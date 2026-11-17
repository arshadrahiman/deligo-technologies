<?php
/**
 * Deligo Technologies - PHP Built-in Server Router
 * Usage: php -S localhost:8000 backend/router.php
 */

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Serve static files if they exist directly
if ($uri !== '/' && file_exists(__DIR__ . '/..' . $uri)) {
    return false;
}

// Route API requests
if (strpos($uri, '/api/enquiry') === 0) {
    require __DIR__ . '/api/enquiry.php';
    exit();
}

if (strpos($uri, '/api/admin') === 0) {
    require __DIR__ . '/api/admin.php';
    exit();
}

if (strpos($uri, '/api/export') === 0) {
    require __DIR__ . '/api/export.php';
    exit();
}

// Fallback to frontend index if run together
if (file_exists(__DIR__ . '/../frontend/index.html')) {
    readfile(__DIR__ . '/../frontend/index.html');
    exit();
}

http_response_code(404);
echo json_encode(['error' => 'Endpoint not found']);

