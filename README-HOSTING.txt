========================================================================
   DELIGO TECHNOLOGIES - PRODUCTION HOSTING & DEPLOYMENT INSTRUCTIONS
========================================================================

PRODUCTION DOMAINS:
  1. deligotechnologies.com
  2. deligotechnologies.ae
  3. deligotechnologies.ai

HOSTING CONTROL PANEL: DirectAdmin (https://cloud-da2.xdnscloud.com:2222/)
GITHUB PAGES URL: https://arshadrahiman.github.io/deligo-technologies/

------------------------------------------------------------------------
1. EXTRACTION LOCATION IN DIRECTADMIN / CPANEL
------------------------------------------------------------------------
In your DirectAdmin File Manager:
1. Navigate to: domains -> deligotechnologies.com -> public_html
   (Or into `public_html/` directly)
2. Upload this ZIP package (`deligo-technologies-production.zip`).
3. Click "Extract" to unpack all files directly inside `public_html/`.
4. Ensure `index.html` is at the root of `public_html/`.

To support the additional domains (`deligotechnologies.ae` & `deligotechnologies.ai`):
In DirectAdmin:
- Go to "Account Manager" -> "Domain Pointers" (or "Domain Setup")
- Add `deligotechnologies.ae` and `deligotechnologies.ai` as Domain Pointers / Aliases pointing to `deligotechnologies.com` with "Create as Alias" checked.
- All three domains will serve the exact same high-performance platform!

Directory tree in public_html:
public_html/
├── index.html
├── app.bundle.js
├── .htaccess
├── robots.txt
├── sitemap.xml
├── admin/
│   └── index.html
├── vendor/
│   ├── react.min.js
│   ├── react-dom.min.js
│   ├── tailwind.min.js
│   ├── icons.js
│   └── confetti.min.js
├── api/
│   ├── enquiry.php
│   ├── admin.php
│   └── export.php
├── config/
│   ├── db.php
│   ├── auth.php
│   ├── schema.sql
│   └── .htaccess
└── data/
    └── .htaccess

------------------------------------------------------------------------
2. DATABASE CONFIGURATION (ALREADY CONFIGURED!)
------------------------------------------------------------------------
Your MySQL database has already been configured in `config/db.php`:
- Database Name:     deligote_deligo_db
- Database Username: deligote_deligo_db
- Hostname:          localhost (with automatic fallback to 127.0.0.1 and cloud-da2.xdnscloud.com)
- Tables: Auto-initialized on first enquiry or imported via `config/schema.sql`

------------------------------------------------------------------------
3. SECRET OWNER / EXECUTIVE CRM ACCESS
------------------------------------------------------------------------
IMPORTANT: The Owner CRM is completely HIDDEN from the public website.
There are zero buttons, links, or visual cues on the public site.

To access the Executive CRM Portal:
1. Open your browser and navigate directly to:
   https://deligotechnologies.com/#admin
   (or https://deligotechnologies.ae/#admin or https://deligotechnologies.ai/#admin)

2. Enter your secure executive login credentials:
   - Executive Username: admin   (or: owner)
   - Secure Password:    DeligoAdmin2026!

------------------------------------------------------------------------
4. GITHUB PAGES CONFIGURATION
------------------------------------------------------------------------
GitHub Pages is configured to run on your default GitHub Pages URL:
  https://arshadrahiman.github.io/deligo-technologies/

Custom domains (deligotechnologies.com, deligotechnologies.ae, deligotechnologies.ai)
are strictly reserved for your hosting server and are NOT bound to GitHub Pages.
========================================================================
