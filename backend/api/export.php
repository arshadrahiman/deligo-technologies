<?php
/**
 * Deligo Technologies - Secured CSV Export for Enquiries
 * Requires verified executive authentication token.
 */

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../config/auth.php';

// Enforce Bearer Token or query param ?token=...
$currentUser = AuthManager::requireAuth();

try {
    $pdo = Database::getConnection();
    $stmt = $pdo->query("SELECT id, full_name, email, phone, company, service, budget, timeline, status, priority, estimated_value, source, created_at, message FROM enquiries ORDER BY created_at DESC");
    $rows = $stmt->fetchAll();

    $filename = "deligo_leads_" . date('Y-m-d_His') . ".csv";

    header('Content-Type: text/csv; charset=utf-8');
    header('Content-Disposition: attachment; filename=' . $filename);
    header('Cache-Control: no-cache, no-store, must-revalidate');

    $output = fopen('php://output', 'w');

    // Add BOM for UTF-8 Excel support
    fprintf($output, chr(0xEF).chr(0xBB).chr(0xBF));

    // CSV Headers
    fputcsv($output, ['ID', 'Full Name', 'Email', 'Phone', 'Company', 'Service', 'Budget', 'Timeline', 'Status', 'Priority', 'Est. Value ($)', 'Source', 'Received At', 'Project Description']);

    foreach ($rows as $row) {
        fputcsv($output, [
            $row['id'],
            $row['full_name'],
            $row['email'],
            $row['phone'],
            $row['company'],
            $row['service'],
            $row['budget'],
            $row['timeline'],
            $row['status'],
            $row['priority'],
            $row['estimated_value'],
            $row['source'],
            $row['created_at'],
            str_replace(["\r", "\n"], ' ', $row['message'])
        ]);
    }

    fclose($output);
    exit();

} catch (Exception $e) {
    error_log("Export error: " . $e->getMessage());
    http_response_code(500);
    echo "Error generating export.";
}
