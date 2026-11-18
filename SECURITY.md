# Deligo Technologies - Security Architecture & Policy

This document outlines the multi-layered security model implemented across **Deligo Technologies** web platforms and APIs.

---

## 1. Zero-Trust Access & Confidential Executive Portal
- **Zero-Trace Public Surface**: The public-facing web applications contain zero visual buttons, links, or metadata pointing to administrative tooling or CRM portals.
- **Direct Route Gate**: Administrative access is restricted to direct URI paths (`/#admin` or `/admin`).
- **Stateful & Cryptographic Gate**: Access is gated behind an Executive Login Portal.
  - Server-side verification validates user credentials using PHP's native `password_verify` with cryptographically secure bcrypt hashing.
  - Client-side static fallbacks use one-way WebCrypto SHA-256 digests. Plaintext passwords and database secrets are strictly excluded from all JavaScript distribution bundles.

---

## 2. Stateless HMAC-SHA256 Bearer Token Architecture
- **Token Generation**: Upon successful authentication at `/api/admin.php?action=login`, the server issues a signed HMAC-SHA256 session token containing:
  - Subject identity (`sub`)
  - Role-based authorization tier (`role`)
  - Issued-at timestamp (`iat`)
  - Expiration time (`exp`, 24-hour TTL)
  - Cryptographic entropy (`rnd`)
- **Endpoint Enforcement**: All protected endpoints (`/api/admin.php`, `/api/export.php`) require this Bearer token passed via the HTTP `Authorization: Bearer <token>` header.
- **Automatic Rejection**: Requests with missing, expired, or tampered tokens are rejected immediately with `401 Unauthorized`.

---

## 3. Input Sanitization & Anti-Spam Defenses
- **Bot Honeypot Defense**: Public enquiry forms contain an invisible, zero-opacity trap input (`website_hp`). Automated bots that blindly populate this field receive a silent 200 response without saving or database execution, neutralizing automated form scrapers and spam floods.
- **Strict Input Clamping**: Form inputs are bounded by strict length and character limits (e.g., `full_name` clamped to 100 characters, `message` clamped to 4,000 characters).
- **Sanitization & Escaping**: All inputs are sanitized using `htmlspecialchars(..., ENT_QUOTES, 'UTF-8')` and `filter_var(..., FILTER_SANITIZE_EMAIL)` to prevent Cross-Site Scripting (XSS) and injection attacks.
- **Prepared Statements**: All database operations use PDO prepared statements with parameter binding to prevent SQL Injection.

---

## 4. Web Server Hardening & Directory Defense (.htaccess)
- **Deny-All File Protection**: Direct HTTP access to sensitive extensions is blocked:
  ```apache
  <FilesMatch "(^\.|\.(htaccess|htpasswd|ini|phps|log|sh|sql|sqlite|sqlite3|env|bak|conf|md|json|yml|yaml))$">
      Require all denied
  </FilesMatch>
  ```
- **Protected Directories**: The `config/` and `data/` directories contain independent `.htaccess` policies enforcing `Require all denied` to prevent browser access to database configuration or local SQLite files.
- **Directory Browsing Disabled**: `Options -Indexes` prevents automated directory scanning.
- **Enterprise Security Headers**:
  - `X-Content-Type-Options: "nosniff"`
  - `X-Frame-Options: "SAMEORIGIN"` (Clickjacking prevention)
  - `X-XSS-Protection: "1; mode=block"`
  - `Referrer-Policy: "strict-origin-when-cross-origin"`
  - `Permissions-Policy: "camera=(), microphone=(), geolocation=()"`

---

## 5. Information Disclosure Prevention
- **Database Exceptions**: All database and server exceptions in production API handlers are logged to internal server error logs (`error_log`) while returning generic, safe error responses to callers. Database table names, schemas, and internal file paths are never leaked in API response payloads.
