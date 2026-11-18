<?php
/**
 * Deligo Technologies - Security Authentication & Token Manager
 * Implements stateless HMAC-SHA256 tokens for Executive CRM operations.
 */

class AuthManager {
    // Secret signing key for HMAC tokens (Unique to Deligo Technologies)
    private static string $secretKey = 'deligo_sec_jwt_key_9f82d1c7a8b4e6301295fc78a4b6d0e1';

    /**
     * Generate a tamper-proof HMAC-SHA256 session token
     */
    public static function generateToken(string $username, string $role = 'SUPER_ADMIN', int $ttlSeconds = 86400): string {
        $payload = [
            'sub' => $username,
            'role' => $role,
            'iat' => time(),
            'exp' => time() + $ttlSeconds,
            'rnd' => bin2hex(random_bytes(8))
        ];

        $payloadEncoded = rtrim(strtr(base64_encode(json_encode($payload)), '+/', '-_'), '=');
        $signature = hash_hmac('sha256', $payloadEncoded, self::$secretKey);

        return $payloadEncoded . '.' . $signature;
    }

    /**
     * Validate an HMAC-SHA256 token. Returns payload array if valid, null if invalid/expired.
     */
    public static function validateToken(?string $token): ?array {
        if (!$token || strpos($token, '.') === false) {
            return null;
        }

        [$payloadEncoded, $signature] = explode('.', $token, 2);

        $expectedSig = hash_hmac('sha256', $payloadEncoded, self::$secretKey);
        if (!hash_equals($expectedSig, $signature)) {
            return null; // Tampered token
        }

        $jsonStr = base64_decode(strtr($payloadEncoded, '-_', '+/'));
        $payload = json_decode($jsonStr, true);

        if (!$payload || !isset($payload['exp']) || $payload['exp'] < time()) {
            return null; // Expired or malformed
        }

        return $payload;
    }

    /**
     * Extract Bearer token from HTTP Authorization header or query parameter
     */
    public static function getBearerToken(): ?string {
        $header = $_SERVER['HTTP_AUTHORIZATION'] ?? $_SERVER['REDIRECT_HTTP_AUTHORIZATION'] ?? '';

        if (empty($header) && function_exists('apache_request_headers')) {
            $headers = apache_request_headers();
            $header = $headers['Authorization'] ?? $headers['authorization'] ?? '';
        }

        if (!empty($header) && preg_match('/Bearer\s+(.*)$/i', $header, $matches)) {
            return trim($matches[1]);
        }

        // Support URL query parameter for file exports
        if (!empty($_GET['token'])) {
            return trim($_GET['token']);
        }

        return null;
    }

    /**
     * Enforce authentication on protected API endpoints. Halts execution with 401 if unauthorized.
     */
    public static function requireAuth(): array {
        $token = self::getBearerToken();
        $payload = self::validateToken($token);

        if (!$payload) {
            http_response_code(401);
            header("Content-Type: application/json; charset=UTF-8");
            echo json_encode([
                'success' => false,
                'message' => 'Unauthorized: Invalid or expired executive authentication token.'
            ]);
            exit();
        }

        return $payload;
    }
}
