<?php
/**
 * Deligo Technologies - Public Enquiry API
 * Handles lead submissions from Website Contact Form & Interactive Estimator.
 */

// Allow cross-origin requests from React frontend
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

// Handle CORS preflight
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
    $data = json_decode($rawInput, true);

    if (!$data) {
        $data = $_POST;
    }

    // Required fields validation
    $fullName = trim($data['full_name'] ?? '');
    $email = trim($data['email'] ?? '');
    $phone = trim($data['phone'] ?? '');
    $company = trim($data['company'] ?? '');
    $service = trim($data['service'] ?? 'General Consultation');
    $budget = trim($data['budget'] ?? 'Not specified');
    $timeline = trim($data['timeline'] ?? 'Flexible');
    $message = trim($data['message'] ?? '');
    $source = trim($data['source'] ?? 'Website Form');

    $errors = [];
    if (empty($fullName)) {
        $errors[] = 'Full name is required.';
    }
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'A valid email address is required.';
    }
    if (empty($message)) {
        $errors[] = 'Project description or message is required.';
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

    // Determine priority and estimated value based on budget
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
    $stmt = $pdo->prepare("
        INSERT INTO enquiries 
        (full_name, email, phone, company, service, budget, timeline, message, status, priority, estimated_value, source, ip_address, created_at)
        VALUES 
        (:full_name, :email, :phone, :company, :service, :budget, :timeline, :message, 'NEW', :priority, :estimated_value, :source, :ip_address, datetime('now'))
    ");

    // Execute with MySQL / SQLite parameter compatibility
    if (Database::getDriver() === 'mysql') {
        $stmt = $pdo->prepare("
            INSERT INTO enquiries 
            (full_name, email, phone, company, service, budget, timeline, message, status, priority, estimated_value, source, ip_address, created_at)
            VALUES 
            (:full_name, :email, :phone, :company, :service, :budget, :timeline, :message, 'NEW', :priority, :estimated_value, :source, :ip_address, NOW())
        ");
    }

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
        'message' => 'Your project enquiry has been submitted successfully! A Deligo technical director will contact you within 24 business hours.',
        'enquiry_id' => (int)$enquiryId,
        'database_driver' => Database::getDriver(),
    ]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Internal server error while saving enquiry: ' . $e->getMessage()
    ]);
}

