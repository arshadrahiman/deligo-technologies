#!/usr/bin/env python3
"""
Deligo Technologies - Development Companion Server
Provides instant zero-setup local API server powered by Python's built-in libraries
and SQLite database. Matches the exact same endpoints as PHP MySQL backend.

Usage:
    python3 dev_server.py [port] (default: 8085)
"""

import sys
import os
import json
import sqlite3
import csv
import io
from http.server import HTTPServer, SimpleHTTPRequestHandler
from urllib.parse import urlparse, parse_qs

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8085
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, "data")
DB_FILE = os.path.join(DATA_DIR, "deligo.sqlite")
FRONTEND_DIR = os.path.join(os.path.dirname(BASE_DIR), "frontend")

os.makedirs(DATA_DIR, exist_ok=True)

def init_db():
    conn = sqlite3.connect(DB_FILE)
    cur = conn.cursor()
    cur.execute("""
    CREATE TABLE IF NOT EXISTS enquiries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        full_name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        company TEXT,
        service TEXT NOT NULL,
        budget TEXT NOT NULL,
        timeline TEXT,
        message TEXT NOT NULL,
        status TEXT DEFAULT 'NEW',
        priority TEXT DEFAULT 'MEDIUM',
        estimated_value REAL DEFAULT 0.00,
        source TEXT DEFAULT 'Website Form',
        ip_address TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    """)
    cur.execute("""
    CREATE TABLE IF NOT EXISTS enquiry_notes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        enquiry_id INTEGER NOT NULL,
        author TEXT DEFAULT 'Admin',
        note TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (enquiry_id) REFERENCES enquiries(id) ON DELETE CASCADE
    );
    """)

    cur.execute("SELECT COUNT(*) FROM enquiries")
    if cur.fetchone()[0] == 0:
        samples = [
            ('Sarah Jenkins', 'sarah.j@healthwave.io', '+1 (555) 234-8901', 'HealthWave Telemed', 'Mobile App Development', '$25,000 - $50,000', '2 - 3 Months', 'We need an end-to-end HIPAA compliant telemedicine iOS and Android app with WebRTC video calling and electronic health records integration.', 'NEW', 'URGENT', 38000.00, 'Website Form'),
            ('Vikram Malhotra', 'vikram@finscale.ae', '+971 50 123 4567', 'FinScale Global UAE', 'Enterprise Software & ERP', '$50,000 - $100,000', '3 - 6 Months', 'Looking for custom multi-currency automated reconciliation portal and microservices backend with SOC2 compliance.', 'IN_DISCUSSION', 'HIGH', 75000.00, 'Project Estimator'),
            ('Elena Rostova', 'elena@novamarket.de', '+49 170 9876543', 'NovaMarket GmbH', 'Web Platform Engineering', '$10,000 - $25,000', '1 - 2 Months', 'Re-architecting our B2B marketplace frontend into modern React 18 with high-speed search and headless Shopify integration.', 'PROPOSAL_SENT', 'MEDIUM', 18500.00, 'Website Form'),
            ('Liam O’Connor', 'liam@apexai.co.uk', '+44 20 7946 0192', 'Apex Autonomous', 'AI & Machine Learning', '$50,000 - $100,000', '3 - 6 Months', 'We require custom RAG pipeline and LLM fine-tuning for legal contracts analysis with on-premise hosting.', 'CONTACTED', 'HIGH', 62000.00, 'Website Form'),
            ('Marcus Aurelius Vance', 'm.vance@vancestrategy.com', '+1 (415) 890-1234', 'Vance Strategy Group', 'Cloud Architecture & DevOps', '$25,000 - $50,000', '1 - 2 Months', 'Kubernetes cluster migration from AWS to hybrid cloud, automated Terraform infrastructure, and zero-downtime CI/CD deployment pipeline.', 'CONVERTED', 'MEDIUM', 32000.00, 'Referral')
        ]
        cur.executemany("""
        INSERT INTO enquiries (full_name, email, phone, company, service, budget, timeline, message, status, priority, estimated_value, source)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, samples)

        notes = [
            (1, 'Sales Lead', 'Client booked initial discovery call for tomorrow 4 PM GMT. Preparing HIPAA compliance checklist.'),
            (2, 'CTO', 'Sent technical architecture diagram for microservices engine. Awaiting feedback from their security auditor.'),
            (3, 'Account Manager', 'Proposal draft v2 delivered with 8-week sprint roadmap.')
        ]
        cur.executemany("INSERT INTO enquiry_notes (enquiry_id, author, note) VALUES (?, ?, ?)", notes)
        conn.commit()
    conn.close()

init_db()

class RequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path
        qs = parse_qs(parsed.query)

        if path.startswith('/api/admin') or path == '/api/admin.php':
            action = qs.get('action', ['list'])[0]
            conn = sqlite3.connect(DB_FILE)
            conn.row_factory = sqlite3.Row
            cur = conn.cursor()

            if action == 'stats':
                cur.execute("SELECT COUNT(*), COALESCE(SUM(estimated_value), 0) FROM enquiries")
                tot_count, tot_val = cur.fetchone()

                cur.execute("SELECT COUNT(*) FROM enquiries WHERE status = 'NEW'")
                new_count = cur.fetchone()[0]

                cur.execute("SELECT COUNT(*) FROM enquiries WHERE status IN ('IN_DISCUSSION', 'PROPOSAL_SENT')")
                disc_count = cur.fetchone()[0]

                cur.execute("SELECT COUNT(*), COALESCE(SUM(estimated_value), 0) FROM enquiries WHERE status = 'CONVERTED'")
                won_count, won_val = cur.fetchone()

                cur.execute("SELECT service, COUNT(*) as count FROM enquiries GROUP BY service ORDER BY count DESC")
                service_breakdown = [{'service': r['service'], 'count': r['count']} for r in cur.fetchall()]

                conv_rate = round((won_count / tot_count * 100), 1) if tot_count > 0 else 0

                resp = {
                    'success': True,
                    'stats': {
                        'total_enquiries': tot_count,
                        'new_leads': new_count,
                        'in_discussion': disc_count,
                        'converted_deals': won_count,
                        'converted_value': won_val,
                        'total_pipeline': tot_val,
                        'conversion_rate': conv_rate,
                        'service_breakdown': service_breakdown,
                        'database_driver': 'sqlite (Local Python Server)'
                    }
                }
                conn.close()
                self._send_json(resp)
                return

            # Default list with filters
            status = qs.get('status', [''])[0]
            service = qs.get('service', [''])[0]
            search = qs.get('search', [''])[0]

            sql = "SELECT e.*, (SELECT COUNT(*) FROM enquiry_notes n WHERE n.enquiry_id = e.id) as notes_count FROM enquiries e WHERE 1=1"
            params = []
            if status and status != 'ALL':
                sql += " AND e.status = ?"
                params.append(status)
            if service and service != 'ALL':
                sql += " AND e.service = ?"
                params.append(service)
            if search:
                sql += " AND (e.full_name LIKE ? OR e.email LIKE ? OR e.company LIKE ? OR e.message LIKE ?)"
                term = f"%{search}%"
                params.extend([term, term, term, term])

            sql += " ORDER BY e.created_at DESC"
            cur.execute(sql, params)
            rows = [dict(r) for r in cur.fetchall()]
            conn.close()

            self._send_json({
                'success': True,
                'count': len(rows),
                'enquiries': rows,
                'database_driver': 'sqlite (Local Python Server)'
            })
            return

        if path.startswith('/api/export') or path == '/api/export.php':
            conn = sqlite3.connect(DB_FILE)
            conn.row_factory = sqlite3.Row
            cur = conn.cursor()
            cur.execute("SELECT id, full_name, email, phone, company, service, budget, timeline, status, priority, estimated_value, source, created_at, message FROM enquiries ORDER BY created_at DESC")
            rows = cur.fetchall()
            conn.close()

            output = io.StringIO()
            writer = csv.writer(output)
            writer.writerow(['ID', 'Full Name', 'Email', 'Phone', 'Company', 'Service', 'Budget', 'Timeline', 'Status', 'Priority', 'Est. Value ($)', 'Source', 'Received At', 'Message'])
            for r in rows:
                writer.writerow([r['id'], r['full_name'], r['email'], r['phone'], r['company'], r['service'], r['budget'], r['timeline'], r['status'], r['priority'], r['estimated_value'], r['source'], r['created_at'], r['message'].replace('\n', ' ')])
            
            data = output.getvalue().encode('utf-8')
            self.send_response(200)
            self.send_header('Content-Type', 'text/csv; charset=utf-8')
            self.send_header('Content-Disposition', 'attachment; filename="deligo_enquiries.csv"')
            self.send_header('Content-Length', str(len(data)))
            self.end_headers()
            self.wfile.write(data)
            return

        # Serve Frontend files & static assets
        clean_path = path.lstrip('/')
        if not clean_path or clean_path == 'index.html':
            self._serve_file(os.path.join(FRONTEND_DIR, 'index.html'), 'text/html; charset=utf-8')
            return

        frontend_file = os.path.join(FRONTEND_DIR, clean_path)
        if os.path.isfile(frontend_file):
            content_type = 'text/plain'
            if frontend_file.endswith('.html'): content_type = 'text/html; charset=utf-8'
            elif frontend_file.endswith('.js'): content_type = 'application/javascript; charset=utf-8'
            elif frontend_file.endswith('.css'): content_type = 'text/css; charset=utf-8'
            elif frontend_file.endswith('.svg'): content_type = 'image/svg+xml'
            elif frontend_file.endswith('.json'): content_type = 'application/json'
            elif frontend_file.endswith('.png'): content_type = 'image/png'
            elif frontend_file.endswith('.jpg') or frontend_file.endswith('.jpeg'): content_type = 'image/jpeg'
            elif frontend_file.endswith('.ico'): content_type = 'image/x-icon'
            self._serve_file(frontend_file, content_type)
            return

        # Fallback to default file serving
        super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)
        path = parsed.path
        length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(length).decode('utf-8') if length > 0 else '{}'
        data = json.loads(body) if body.startswith('{') else {}

        if path.startswith('/api/enquiry') or path == '/api/enquiry.php':
            full_name = data.get('full_name', '').strip()
            email = data.get('email', '').strip()
            phone = data.get('phone', '').strip()
            company = data.get('company', '').strip()
            service = data.get('service', 'Custom Software Development').strip()
            budget = data.get('budget', '$25,000 - $50,000').strip()
            timeline = data.get('timeline', '2 - 3 Months').strip()
            message = data.get('message', '').strip()
            source = data.get('source', 'Website Form').strip()

            if not full_name or not email or not message:
                self._send_json({'success': False, 'message': 'Missing required fields: full_name, email, or message.'}, 422)
                return

            est_val = 35000.00
            priority = 'MEDIUM'
            if '100,000' in budget:
                priority = 'HIGH'
                est_val = 75000.00

            conn = sqlite3.connect(DB_FILE)
            cur = conn.cursor()
            cur.execute("""
            INSERT INTO enquiries (full_name, email, phone, company, service, budget, timeline, message, status, priority, estimated_value, source)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'NEW', ?, ?, ?)
            """, (full_name, email, phone, company, service, budget, timeline, message, priority, est_val, source))
            new_id = cur.lastrowid
            conn.commit()
            conn.close()

            self._send_json({
                'success': True,
                'message': 'Your project enquiry has been submitted successfully! A Deligo technical director will contact you within 24 business hours.',
                'enquiry_id': new_id
            }, 201)
            return

        if path.startswith('/api/admin') or path == '/api/admin.php':
            action = parse_qs(parsed.query).get('action', [data.get('action', '')])[0]

            if action == 'login':
                username = data.get('username', '').strip().lower()
                password = data.get('password', '')
                valid_users = ['admin', 'owner', 'deligo_admin', 'admin@deligotechnologies.com']
                valid_pass = ['DeligoAdmin2026!', 'admin123', 'QrGQhRqGJH7RjUYNjGj6']
                if username in valid_users and password in valid_pass:
                    self._send_json({
                        'success': True,
                        'message': 'Authentication successful.',
                        'token': 'dev_token_session_secure',
                        'user': {'username': username, 'role': 'SUPER_ADMIN'}
                    })
                else:
                    self._send_json({'success': False, 'message': 'Invalid executive credentials. Access denied.'}, 401)
                return

            conn = sqlite3.connect(DB_FILE)
            cur = conn.cursor()

            if action == 'update_status':
                eid = data.get('id')
                status = data.get('status')
                cur.execute("UPDATE enquiries SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?", (status, eid))
                cur.execute("INSERT INTO enquiry_notes (enquiry_id, author, note) VALUES (?, 'System', ?)", (eid, f"Status updated to {status}"))
                conn.commit()
                conn.close()
                self._send_json({'success': True, 'message': f'Status updated to {status}'})
                return

            if action == 'add_note':
                eid = data.get('enquiry_id')
                note = data.get('note', '').strip()
                author = data.get('author', 'Executive Admin')
                cur.execute("INSERT INTO enquiry_notes (enquiry_id, author, note) VALUES (?, ?, ?)", (eid, author, note))
                conn.commit()
                conn.close()
                self._send_json({'success': True, 'message': 'Note added successfully.'})
                return

            if action == 'delete':
                eid = data.get('id')
                cur.execute("DELETE FROM enquiries WHERE id = ?", (eid,))
                conn.commit()
                conn.close()
                self._send_json({'success': True, 'message': 'Enquiry deleted.'})
                return

        self._send_json({'error': 'Endpoint not found'}, 404)

    def _send_json(self, data, status_code=200):
        content = json.dumps(data).encode('utf-8')
        self.send_response(status_code)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(content)))
        self.end_headers()
        self.wfile.write(content)

    def _serve_file(self, filepath, content_type):
        if not os.path.exists(filepath):
            self.send_error(404, "File not found")
            return
        with open(filepath, 'rb') as f:
            content = f.read()
        self.send_response(200)
        self.send_header('Content-Type', content_type)
        self.send_header('Content-Length', str(len(content)))
        self.end_headers()
        self.wfile.write(content)

if __name__ == '__main__':
    port = PORT
    server = None
    for attempt in range(10):
        try:
            server = HTTPServer(('0.0.0.0', port), RequestHandler)
            break
        except OSError as e:
            if attempt < 9:
                port += 1
            else:
                raise e

    print(f"🚀 Deligo Technologies Dev Server is LIVE at http://localhost:{port}")
    print(f"📁 Serving frontend files from: {FRONTEND_DIR}")
    print(f"📊 SQLite database active at: {DB_FILE}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server...")
        server.server_close()
