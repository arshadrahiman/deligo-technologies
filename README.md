# DELIGO TECHNOLOGIES — Enterprise Software Engineering & Owner CRM



---

## 🌟 Architecture Overview

```text
deligo-technologies/
├── index.html                   # Webroot SPA application (Zero-redirect entry point)
├── app.bundle.js                # Pre-compiled React 18 production bundle (Zero-CDN, zero plain secrets)
├── .htaccess                    # Enterprise Apache security headers, Gzip, and routing
├── CNAME                        # Custom domain mapping (deligotechnologies.com)
├── robots.txt                   # Search crawler directives
├── sitemap.xml                  # XML Sitemap for search engines
├── README.md                    # Project documentation
├── SECURITY.md                  # Security architecture, policy & audit disclosures
├── README-HOSTING.txt           # DirectAdmin & cPanel hosting instructions
│
├── admin/                       # Executive CRM portal gateway
│   └── index.html               # Seamless router to /#admin
│
├── vendor/                      # Offline, self-contained local dependencies
│   ├── react.min.js             # React 18 Core
│   ├── react-dom.min.js         # React 18 DOM Renderer
│   ├── tailwind.min.js          # Tailwind CSS Compiler
│   ├── icons.js                 # Native Lucide SVG Icon definitions
│   └── confetti.min.js          # Canvas Confetti Particle FX
│
├── backend/                     # Canonical Backend Source
│   ├── api/                     # Hardened REST API Endpoints
│   │   ├── enquiry.php          # Public lead submission (Honeypot + Validation)
│   │   ├── admin.php            # Executive CRM API (HMAC Bearer token protected)
│   │   └── export.php           # CSV Lead Export engine (Token authenticated)
│   ├── config/                  # Database & Authentication Layer
│   │   ├── db.php               # Multi-host failover PDO manager (MySQL + SQLite)
│   │   ├── auth.php             # Stateless HMAC-SHA256 Token Manager
│   │   ├── schema.sql           # MySQL database schema & seed data
│   │   └── .htaccess            # Enforced Require all denied
│   ├── data/                    # Protected Local Data Store
│   │   ├── deligo.sqlite        # Development SQLite database
│   │   └── .htaccess            # Enforced Require all denied
│   └── dev_server.py            # Local zero-dependency Python API & dev server
│
├── docs/                        # GitHub Pages automated deployment target
│   ├── index.html
│   ├── app.bundle.js
│   ├── admin/
│   ├── vendor/
│   ├── CNAME
│   └── .nojekyll
│
└── scripts/                     # Automation & Tooling
    ├── build.js                 # Babel JSX compiler & multi-target bundle distributor
    ├── package.py               # Production zip package generator
    └── test_security.js         # Playwright automated security & regression test suite
```

---

## 🔒 Security Hardening Highlights

1. **Zero-Trace Confidential Executive CRM**:
   - The public website contains **zero visual links, buttons, or clues** to the administrative CRM.
   - Access is restricted strictly to direct URL paths:
     - `https://deligotechnologies.com/#admin`
     - `https://deligotechnologies.com/admin`
   - Access requires authentication via the **Executive Portal Gate** (Username: `admin` | Password: `DeligoAdmin2026!`).

2. **Stateless HMAC-SHA256 Bearer Token Verification**:
   - All protected endpoints (`/api/admin.php`, `/api/export.php`) require a cryptographically signed HMAC-SHA256 token.
   - Missing, expired, or tampered tokens return `401 Unauthorized`.

3. **Anti-Spam Bot Honeypot Defense**:
   - The enquiry form embeds an invisible honeypot trap (`website_hp`) that neutralizes automated spam submissions without database execution.

4. **Zero Secrets in Client Code**:
   - Database credentials and plaintext passwords have been purged from all client bundles.
   - Static fallbacks use one-way WebCrypto SHA-256 digests.

5. **Server & Directory Protection (`.htaccess`)**:
   - Blocks direct HTTP access to configuration, database, SQLite, and sensitive files.
   - Enforces enterprise security headers: `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`.

---

## 🚀 Development & Build Workflows

### Run the Development Server
```bash
python3 backend/dev_server.py
# Server starts automatically at http://localhost:8085
```

### Recompile the Production Bundle
```bash
node scripts/build.js
# Automatically compiles and syncs app.bundle.js across webroot, frontend, and docs
```

### Run the Security Test Suite
```bash
node scripts/test_security.js
# Runs 6 automated Playwright tests verifying zero-trace public UI, honeypot, auth gate, and sign-out
```

### Generate Production Hosting ZIP
```bash
python3 scripts/package.py
# Generates deligo-technologies-production.zip ready to extract in public_html/
```

---

## 🌐 Production Hosting Deployment (DirectAdmin / cPanel)

1. Upload `deligo-technologies-production.zip` to your hosting server.
2. In File Manager, extract the archive directly inside `public_html/`.
3. The database connection in `config/db.php` is pre-configured with automatic multi-host connection (`localhost` ➔ `127.0.0.1` ➔ `cloud-da2.xdnscloud.com`).
4. Point your domain registrar nameservers to:
   - `dns1.xdnscloud.com`
   - `dns2.xdnscloud.com`

---

## 📄 License & Credits
© 2026 DELIGO TECHNOLOGIES. All rights reserved.
Built with React 18, Tailwind CSS, Lucide Icons, and PHP MySQL Architecture.
