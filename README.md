# DELIGO TECHNOLOGIES — Next-Gen IT Startup Agency Website & Owner CRM

> A premier, high-converting digital agency platform engineered with **React 18 + PHP + MySQL**, inspired by the design and technical excellence of **[Lilac Infotech](https://lilacinfotech.com)**.

---

## 🌟 Key Highlights & Innovations

1. **Client-Catchy & Innovative UI/UX**:
   - Deep Cosmos theme with glassmorphism cards, glowing border accents, and responsive typography.
   - **Interactive Particle Network Canvas**: Dynamic connected nodes that react in real-time to user mouse movements.
   - **Interactive Project Cost & Scope Estimator**: Allows prospective clients to select platform, feature modules, and timeline to receive an instant investment and squad estimate, then pre-populates the lead form with 1 click.
   - **Agile Engineering Roadmap**: 5-step visual delivery pipeline (Discovery -> UI/UX -> Agile Sprints -> QA & Security -> Global Scale).
   - **Interactive Tech Stack Matrix**: Filterable badges covering Frontend, Backend & DB, Mobile (Flutter/React Native/iOS/Android), and Enterprise AI / Cloud.
   - **Client Showcases & Testimonials**: Metric-driven case studies (+340% User Growth, $1.4B Volume) and verified 5-star Clutch reviews.

2. **Company Owner / Executive Dashboard (Enquiry Tracker & CRM)**:
   - **Real-time KPI Metrics**: Total Inbound Leads, New/Unread leads requiring <24h response, Deals in Negotiation, Won Deals, and Total Pipeline Dollar Value.
   - **Lifecycle Status Workflow**: Instant status changes (`NEW` → `CONTACTED` → `IN_DISCUSSION` → `PROPOSAL_SENT` → `CONVERTED` → `ARCHIVED`).
   - **Client Dossier Modal**: Inspect full project description, budget, timeline, with 1-click Email, WhatsApp chat, and phone launcher.
   - **CRM Activity Notes**: Allows founders and account managers to write timestamped internal notes.
   - **CSV Export Engine**: 1-click export of all enquiries formatted for Excel & Google Sheets.

3. **Robust Backend Architecture (PHP + MySQL + Auto-Fallback)**:
   - **PDO MySQL Connection** with parameterization against SQL injection.
   - **Smart Auto-Fallback to SQLite**: If MySQL isn't running on your local machine yet, the API seamlessly auto-initializes a local SQLite database (`backend/data/deligo.sqlite`) and seeds it with sample enterprise leads, so you can test everything immediately without any database setup errors!
   - RESTful JSON endpoints with CORS headers, validation, and sanitization.

---

## 📁 Project Directory Structure

```text
it-startup-agency/
├── frontend/
│   ├── index.html              # Standalone, 1-click browser-ready React 18 production bundle
│   ├── package.json            # Node/Vite dependencies (for npm run dev / build)
│   ├── vite.config.js          # Vite config with API proxy
│   └── src/
│       ├── App.jsx             # Main React Application
│       ├── services/
│       │   └── api.js          # REST API Client
│       └── components/         # Modular React components
├── backend/
│   ├── api/
│   │   ├── enquiry.php         # Public Lead Submission endpoint (POST)
│   │   ├── admin.php           # Owner CRM Dashboard API (GET, POST, PUT)
│   │   └── export.php          # CSV Lead Export engine
│   ├── config/
│   │   ├── db.php              # PDO Database Connection (MySQL + SQLite fallback)
│   │   └── schema.sql          # MySQL Schema & Seed Data
│   ├── dev_server.py           # Zero-setup Python companion dev server
│   └── router.php              # PHP built-in server router
└── README.md
```

---

## 🚀 How to Run the Project (3 Simple Methods)

### Option 1: Instant Local Dev Server (Zero Configuration Needed!)
Using macOS's built-in Python 3, you can launch the live frontend and SQLite backend simultaneously with a single command:

```bash
cd /Users/arshadulrahman/.gemini/antigravity/scratch/it-startup-agency/backend
python3 dev_server.py 8085
```
Open **`http://localhost:8085`** in Google Chrome or Safari.
- Website & Animations will be live!
- Form submissions will store directly into the database.
- Click **"👑 Owner CRM"** in the top bar to test the dashboard.

---

### Option 2: Run with PHP & MySQL

#### 1. Import MySQL Database:
```bash
mysql -u root -p < /Users/arshadulrahman/.gemini/antigravity/scratch/it-startup-agency/backend/config/schema.sql
```

#### 2. Configure Credentials:
Edit `backend/config/db.php` or set environment variables:
```bash
export DB_HOST="127.0.0.1"
export DB_PORT="3306"
export DB_NAME="deligo_db"
export DB_USER="root"
export DB_PASS="your_password"
```

#### 3. Start PHP Server:
```bash
cd /Users/arshadulrahman/.gemini/antigravity/scratch/it-startup-agency
php -S localhost:8000 backend/router.php
```

---

### Option 3: Double-Click Standalone Frontend
You can open `frontend/index.html` directly in any web browser without starting any server. It features mock demo data pre-loaded so you can evaluate all animations, calculations, and the owner dashboard immediately.

---

### Option 4: Deploy to GitHub Pages (Live Worldwide!)

This repository is pre-configured with automated GitHub Actions and multi-mode support for **GitHub Pages**:

#### Step 1: Link and Push to GitHub
Create a new repository named **`deligo-technologies`** on [GitHub](https://github.com/new), then run:
```bash
git remote add origin https://github.com/<your-github-username>/deligo-technologies.git
git branch -M main
git push -u origin main
```
*(For user `arshadrahiman`, the remote URL is: `https://github.com/arshadrahiman/deligo-technologies.git`)*

#### Step 2: Enable GitHub Pages in Repository Settings
1. On GitHub, navigate to your repository's **Settings** tab.
2. Click **Pages** in the left navigation sidebar.
3. Under **Build and deployment > Source**:
   - **Recommended (Zero Config)**: Select **GitHub Actions**. The included workflow (`.github/workflows/deploy.yml`) automatically publishes the site on every push.
   - **Alternative**: Select **Deploy from a branch** and choose branch `main` with folder `/docs`.
4. Your website will be live in ~60 seconds at:
   **`https://<your-github-username>.github.io/deligo-technologies/`**

> **Static Hosting Delight**: On GitHub Pages, form submissions, the interactive Scope Estimator, status changes, CRM notes, and instant CSV downloads operate seamlessly with native browser persistence.

---

## 🔌 API Endpoint Specifications

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/api/enquiry.php` | `POST` | Public lead submission form. Accepts `full_name`, `email`, `phone`, `company`, `service`, `budget`, `message`. |
| `/api/admin.php?action=list` | `GET` | Fetches leads with optional filters `status`, `service`, `search`. |
| `/api/admin.php?action=stats`| `GET` | Returns aggregated metrics (Total, New, In Discussion, Converted, Pipeline Value). |
| `/api/admin.php?action=update_status` | `POST` | Updates lead pipeline status (`NEW`, `CONTACTED`, `IN_DISCUSSION`, `PROPOSAL_SENT`, `CONVERTED`, `ARCHIVED`). |
| `/api/admin.php?action=add_note` | `POST` | Appends internal CRM activity note to a lead. |
| `/api/export.php` | `GET` | Generates and downloads a `.csv` file with all client inquiries. |

---

## 🎨 Inspired by Lilac Infotech's DNA
- **High-Impact Value Proposition**: Focused on custom software, enterprise AI, mobile apps, and scalable web architectures.
- **Client Conversion Focus**: Interactive scope calculator and high-urgency CTAs.
- **Owner Visibility**: Built-in CRM tracking tailored for startup founders to never let a high-value lead slip through the cracks.

