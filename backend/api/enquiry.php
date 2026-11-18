<?php
/**
 * Deligo Technologies - Hardened Public Enquiry API
 * Features Honeypot Anti-Spam, Strict Input Length Clamping & Sanitization.
 */

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed. Use POST.']);
    exit();
}

require_once __DIR__ . '/../config/db.php';

try {
    $rawInput = file_get_contents('php://input');
    $data = json_decode($rawInput, true) ?: $_POST;

    // 1. Anti-Spam Honeypot Check (Bots fill hidden fields)
    if (!empty($data['website_hp']) || !empty($_POST['website_hp'])) {
        // Return fake success to deceive the bot without saving spam
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Enquiry submitted successfully.']);
        exit();
    }

    // 2. Field Clamping and Sanitization
    $fullName = mb_substr(trim($data['full_name'] ?? ''), 0, 100);
    $email = mb_substr(trim($data['email'] ?? ''), 0, 120);
    $phone = mb_substr(trim($data['phone'] ?? ''), 0, 40);
    $company = mb_substr(trim($data['company'] ?? ''), 0, 120);
    $service = mb_substr(trim($data['service'] ?? 'General Consultation'), 0, 80);
    $budget = mb_substr(trim($data['budget'] ?? 'Not specified'), 0, 50);
    $timeline = mb_substr(trim($data['timeline'] ?? 'Flexible'), 0, 50);
    $message = mb_substr(trim($data['message'] ?? ''), 0, 4000);
    $source = mb_substr(trim($data['source'] ?? 'Website Form'), 0, 80);

    $errors = [];
    if (empty($fullName) || mb_strlen($fullName) < 2) {
        $errors[] = 'Please enter a valid full name (minimum 2 characters).';
    }
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'A valid corporate or personal email address is required.';
    }
    if (empty($message) || mb_strlen($message) < 5) {
        $errors[] = 'Please provide a project description (minimum 5 characters).';
    }

    if (!empty($errors)) {
        http_response_code(422);
        echo json_encode([
            'success' => false,
            'message' => 'Validation failed.',
            'errors' => $errors
        ]);
        exit();
    }

    // 3. Lead Valuation Model
    $estimatedValue = 15000.00;
    $priority = 'MEDIUM';
    if (strpos($budget, '100,000') !== false || strpos($budget, '50,000 - $100,000') !== false) {
        $priority = 'HIGH';
        $estimatedValue = 65000.00;
    } elseif (strpos($budget, '100,000+') !== false) {
        $priority = 'URGENT';
        $estimatedValue = 120000.00;
    } elseif (strpos($budget, '25,000 - $50,000') !== false) {
        $priority = 'HIGH';
        $estimatedValue = 35000.00;
    }

    $ipAddress = $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';

    $pdo = Database::getConnection();

    $sql = "INSERT INTO enquiries 
            (full_name, email, phone, company, service, budget, timeline, message, status, priority, estimated_value, source, ip_address, created_at)
            VALUES 
            (:full_name, :email, :phone, :company, :service, :budget, :timeline, :message, 'NEW', :priority, :estimated_value, :source, :ip_address, CURRENT_TIMESTAMP)";

    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':full_name' => htmlspecialchars($fullName, ENT_QUOTES, 'UTF-8'),
        ':email' => filter_var($email, FILTER_SANITIZE_EMAIL),
        ':phone' => htmlspecialchars($phone, ENT_QUOTES, 'UTF-8'),
        ':company' => htmlspecialchars($company, ENT_QUOTES, 'UTF-8'),
        ':service' => htmlspecialchars($service, ENT_QUOTES, 'UTF-8'),
        ':budget' => htmlspecialchars($budget, ENT_QUOTES, 'UTF-8'),
        ':timeline' => htmlspecialchars($timeline, ENT_QUOTES, 'UTF-8'),
        ':message' => htmlspecialchars($message, ENT_QUOTES, 'UTF-8'),
        ':priority' => $priority,
        ':estimated_value' => $estimatedValue,
        ':source' => htmlspecialchars($source, ENT_QUOTES, 'UTF-8'),
        ':ip_address' => $ipAddress
    ]);

    $enquiryId = $pdo->lastInsertId();

    http_response_code(201);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your project brief has been received. Our technical team will reach out within 24 business hours.',
        'enquiry_id' => (int)$enquiryId
    ]);

} catch (Exception $e) {
    error_log("Enquiry API error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'An unexpected server error occurred while processing your enquiry. Please try again or email contact@deligotechnologies.com directly.'
    ]);
}
