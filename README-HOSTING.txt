========================================================================
   DELIGO TECHNOLOGIES - PRODUCTION HOSTING & DEPLOYMENT INSTRUCTIONS
========================================================================

DOMAIN: deligotechnologies.com
HOSTING CONTROL PANEL: DirectAdmin / cPanel (https://cloud-da2.xdnscloud.com:2222/)

------------------------------------------------------------------------
1. EXTRACTION LOCATION IN DIRECTADMIN / CPANEL
------------------------------------------------------------------------
In your DirectAdmin File Manager:
1. Navigate to: domains -> deligotechnologies.com -> public_html
   (Or directly into `public_html/`)
2. Upload this ZIP package (`deligo-technologies-production.zip`).
3. Click "Extract" to unpack all files directly inside `public_html/`.
4. Ensure `index.html` is at the root of `public_html/`.

Directory tree should look like:
public_html/
├── index.html
├── app.bundle.js
├── .htaccess
├── CNAME
├── robots.txt
├── sitemap.xml
├── .nojekyll
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
- Hostname:          localhost
- Tables: Auto-initialized on first enquiry or imported via `config/schema.sql`

To manually import schema via phpMyAdmin (optional):
- Open phpMyAdmin in DirectAdmin
- Select `deligote_deligo_db`
- Click "Import" -> Select `config/schema.sql` -> Click "Go"

------------------------------------------------------------------------
3. SECRET OWNER / EXECUTIVE CRM ACCESS
------------------------------------------------------------------------
IMPORTANT: As requested, the Owner CRM is completely HIDDEN from the public
website. There are zero buttons, links, or visual cues on the public site.

To access the Executive CRM Portal:
1. Open your browser and navigate directly to:
   https://deligotechnologies.com/#admin
   OR
   https://deligotechnologies.com/admin

2. An "Executive Portal - Restricted Access" login modal will appear.

3. Enter your secure executive login credentials:
   - Executive Username: admin   (or: owner)
   - Secure Password:    DeligoAdmin2026!  (or: QrGQhRqGJH7RjUYNjGj6)

4. Once authenticated:
   - Full KPI Analytics (Pipeline value, conversion rates, leads count)
   - Real-time Lead tracking (Status workflow: New, Contacted, In Discussion, Converted)
   - Internal Note taking per enquiry
   - 1-Click CSV Export for all client leads

5. To log out:
   - Click the "Sign Out" button in the top right of the dashboard.
   - You will be immediately logged out and returned to the clean public homepage.

------------------------------------------------------------------------
4. SSL / HTTPS CERTIFICATE
------------------------------------------------------------------------
In DirectAdmin:
- Go to "SSL Certificates" -> Select "Free & automatic certificate from Let's Encrypt"
- Check `deligotechnologies.com` and `www.deligotechnologies.com`
- Click "Save"
- Enable "Force SSL with https redirect"
========================================================================
