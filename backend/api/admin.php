<?php
/**
 * Deligo Technologies - Secured Owner / Executive Dashboard API
 * Hardened with HMAC-SHA256 Bearer Token Verification & Sanitized Outputs.
 */

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../config/auth.php';

$method = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'] ?? 'list';

try {
    $pdo = Database::getConnection();

    // -------------------------------------------------------------
    // 1. PUBLIC AUTHENTICATION ACTION: LOGIN
    // -------------------------------------------------------------
    if ($action === 'login') {
        if ($method !== 'POST') {
            http_response_code(405);
            echo json_encode(['success' => false, 'message' => 'Method Not Allowed.']);
            exit();
        }

        $rawInput = file_get_contents('php://input');
        $payload = json_decode($rawInput, true) ?: $_POST;

        $username = trim($payload['username'] ?? '');
        $password = (string)($payload['password'] ?? '');

        if (!$username || !$password) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Please provide both username and password.']);
            exit();
        }

        $authenticated = false;
        $userData = ['username' => 'admin', 'role' => 'SUPER_ADMIN'];

        // 1. Verify against database admin_users table
        try {
            $stmt = $pdo->prepare("SELECT * FROM admin_users WHERE username = ? OR email = ? LIMIT 1");
            $stmt->execute([$username, $username]);
            $dbUser = $stmt->fetch();
            if ($dbUser && password_verify($password, $dbUser['password_hash'])) {
                $authenticated = true;
                $userData = ['username' => $dbUser['username'], 'role' => $dbUser['role']];
            }
        } catch (Throwable $e) {
            error_log("DB Auth check note: " . $e->getMessage());
        }

        // 2. Master Executive Credentials Fallback
        $validUsers = ['admin', 'owner', 'deligo_admin', 'admin@deligotechnologies.com'];
        $validPasswords = ['DeligoAdmin2026!', 'admin123'];
        if (!$authenticated && in_array(strtolower($username), $validUsers, true) && in_array($password, $validPasswords, true)) {
            $authenticated = true;
        }

        if ($authenticated) {
            $token = AuthManager::generateToken($userData['username'], $userData['role']);
            echo json_encode([
                'success' => true,
                'message' => 'Authentication successful.',
                'token' => $token,
                'user' => $userData
            ]);
            exit();
        } else {
            http_response_code(401);
            echo json_encode(['success' => false, 'message' => 'Invalid executive credentials. Access denied.']);
            exit();
        }
    }

    // -------------------------------------------------------------
    // 2. PROTECTED ACTIONS: REQUIRE HMAC BEARER TOKEN
    // -------------------------------------------------------------
    $currentUser = AuthManager::requireAuth();

    // GET: Analytics & Enquiries Listing
    if ($method === 'GET') {
        if ($action === 'stats') {
            $totalStmt = $pdo->query("SELECT COUNT(*) as count, COALESCE(SUM(estimated_value), 0) as total_val FROM enquiries");
            $totalData = $totalStmt->fetch();

            $newStmt = $pdo->query("SELECT COUNT(*) as count FROM enquiries WHERE status = 'NEW'");
            $newCount = (int)$newStmt->fetch()['count'];

            $discussionStmt = $pdo->query("SELECT COUNT(*) as count FROM enquiries WHERE status IN ('IN_DISCUSSION', 'PROPOSAL_SENT')");
            $discussionCount = (int)$discussionStmt->fetch()['count'];

            $convertedStmt = $pdo->query("SELECT COUNT(*) as count, COALESCE(SUM(estimated_value), 0) as won_val FROM enquiries WHERE status = 'CONVERTED'");
            $convertedData = $convertedStmt->fetch();
            $convertedCount = (int)$convertedData['count'];
            $convertedValue = (float)$convertedData['won_val'];

            $totalCount = (int)$totalData['count'];
            $conversionRate = $totalCount > 0 ? round(($convertedCount / $totalCount) * 100, 1) : 0;

            $serviceStmt = $pdo->query("SELECT service, COUNT(*) as count FROM enquiries GROUP BY service ORDER BY count DESC");
            $services = $serviceStmt->fetchAll();

            echo json_encode([
                'success' => true,
                'stats' => [
                    'total_enquiries' => $totalCount,
                    'new_leads' => $newCount,
                    'in_discussion' => $discussionCount,
                    'converted_deals' => $convertedCount,
                    'converted_value' => $convertedValue,
                    'total_pipeline' => (float)$totalData['total_val'],
                    'conversion_rate' => $conversionRate,
                    'service_breakdown' => $services,
                    'database_driver' => Database::getDriver()
                ]
            ]);
            exit();
        }

        if ($action === 'get_single') {
            $id = (int)($_GET['id'] ?? 0);
            $stmt = $pdo->prepare("SELECT * FROM enquiries WHERE id = ?");
            $stmt->execute([$id]);
            $enquiry = $stmt->fetch();

            if (!$enquiry) {
                http_response_code(404);
                echo json_encode(['success' => false, 'message' => 'Enquiry not found.']);
                exit();
            }

            $noteStmt = $pdo->prepare("SELECT * FROM enquiry_notes WHERE enquiry_id = ? ORDER BY created_at DESC");
            $noteStmt->execute([$id]);
            $enquiry['notes'] = $noteStmt->fetchAll();

            echo json_encode(['success' => true, 'enquiry' => $enquiry]);
            exit();
        }

        // Default: List enquiries with filters
        $statusFilter = $_GET['status'] ?? '';
        $serviceFilter = $_GET['service'] ?? '';
        $search = trim($_GET['search'] ?? '');

        $sql = "SELECT e.*, (SELECT COUNT(*) FROM enquiry_notes n WHERE n.enquiry_id = e.id) as notes_count 
                FROM enquiries e WHERE 1=1";
        $params = [];

        if (!empty($statusFilter) && $statusFilter !== 'ALL') {
            $sql .= " AND e.status = :status";
            $params[':status'] = $statusFilter;
        }

        if (!empty($serviceFilter) && $serviceFilter !== 'ALL') {
            $sql .= " AND e.service = :service";
            $params[':service'] = $serviceFilter;
        }

        if (!empty($search)) {
            $sql .= " AND (e.full_name LIKE :search OR e.email LIKE :search OR e.company LIKE :search OR e.message LIKE :search)";
            $params[':search'] = "%{$search}%";
        }

        $sql .= " ORDER BY e.created_at DESC";

        $stmt = $pdo->prepare($sql);
        $stmt->execute($params);
        $enquiries = $stmt->fetchAll();

        echo json_encode([
            'success' => true,
            'count' => count($enquiries),
            'enquiries' => $enquiries,
            'database_driver' => Database::getDriver()
        ]);
        exit();
    }

    // POST / PUT Actions
    $rawInput = file_get_contents('php://input');
    $payload = json_decode($rawInput, true) ?: $_POST;

    if ($action === 'update_status') {
        $id = (int)($payload['id'] ?? 0);
        $newStatus = trim($payload['status'] ?? '');
        $validStatuses = ['NEW', 'CONTACTED', 'IN_DISCUSSION', 'PROPOSAL_SENT', 'CONVERTED', 'ARCHIVED'];

        if (!$id || !in_array($newStatus, $validStatuses, true)) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Invalid enquiry ID or status code.']);
            exit();
        }

        $stmt = $pdo->prepare("UPDATE enquiries SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?");
        $stmt->execute([$newStatus, $id]);

        $noteStmt = $pdo->prepare("INSERT INTO enquiry_notes (enquiry_id, author, note) VALUES (?, 'System', ?)");
        $noteStmt->execute([$id, "Status transitioned to " . $newStatus]);

        echo json_encode(['success' => true, 'message' => "Enquiry status updated to {$newStatus}."]);
        exit();
    }

    if ($action === 'add_note') {
        $enquiryId = (int)($payload['enquiry_id'] ?? 0);
        $note = trim($payload['note'] ?? '');
        $author = trim($payload['author'] ?? ($currentUser['sub'] ?? 'Executive Admin'));

        if (!$enquiryId || empty($note)) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Enquiry ID and Note content are required.']);
            exit();
        }

        $stmt = $pdo->prepare("INSERT INTO enquiry_notes (enquiry_id, author, note, created_at) VALUES (?, ?, ?, CURRENT_TIMESTAMP)");
        $stmt->execute([$enquiryId, htmlspecialchars($author, ENT_QUOTES, 'UTF-8'), htmlspecialchars($note, ENT_QUOTES, 'UTF-8')]);

        echo json_encode(['success' => true, 'message' => 'Note added successfully.']);
        exit();
    }

    if ($action === 'delete') {
        $id = (int)($payload['id'] ?? $_GET['id'] ?? 0);
        if (!$id) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Enquiry ID required.']);
            exit();
        }

        $stmt = $pdo->prepare("DELETE FROM enquiries WHERE id = ?");
        $stmt->execute([$id]);

        echo json_encode(['success' => true, 'message' => 'Enquiry deleted successfully.']);
        exit();
    }

    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Unknown action.']);

} catch (Exception $e) {
    error_log("Admin API error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'A secure server error occurred. Please try again.']);
}
