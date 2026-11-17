<?php
/**
 * Deligo Technologies - Database Connection Manager
 * 
 * Supports MySQL (Production & Standard dev) with graceful auto-fallback
 * to SQLite when MySQL daemon is not running locally.
 */

class Database {
    private static ?PDO $instance = null;
    private static string $driverUsed = 'mysql';

    // MySQL Configuration (DirectAdmin / Production)
    // In DirectAdmin/cPanel, PHP scripts running on the web server connect to MySQL via 'localhost'
    // or '127.0.0.1'. The server host 'cloud-da2.xdnscloud.com' is also supported.
    private static string $host = 'localhost';
    private static string $port = '3306';
    private static string $dbName = 'deligote_deligo_db';
    private static string $username = 'deligote_deligo_db';
    private static string $password = 'QrGQhRqGJH7RjUYNjGj6';

    public static function getConnection(): PDO {
        if (self::$instance !== null) {
            return self::$instance;
        }

        // Allow environment overrides
        $configuredHost = getenv('DB_HOST') ?: self::$host;
        $port = getenv('DB_PORT') ?: self::$port;
        $dbName = getenv('DB_NAME') ?: self::$dbName;
        $username = getenv('DB_USER') ?: self::$username;
        $password = getenv('DB_PASS') ?: self::$password;

        // Try MySQL hosts in order: configured host (localhost), loopback (127.0.0.1), and DirectAdmin hostname
        $candidateHosts = array_unique([$configuredHost, 'localhost', '127.0.0.1', 'cloud-da2.xdnscloud.com']);
        $lastException = null;

        foreach ($candidateHosts as $h) {
            try {
                $dsn = "mysql:host={$h};port={$port};dbname={$dbName};charset=utf8mb4";
                $options = [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                    PDO::ATTR_EMULATE_PREPARES => false,
                    PDO::ATTR_TIMEOUT => 2,
                ];
                self::$instance = new PDO($dsn, $username, $password, $options);
                self::$driverUsed = 'mysql';

                // Auto-initialize MySQL tables if not yet imported
                self::initMysqlSchema(self::$instance);

                return self::$instance;
            } catch (PDOException $e) {
                $lastException = $e;
            }
        }

        if ($lastException) {
            error_log("MySQL connection attempts failed: " . $lastException->getMessage() . ". Falling back to local SQLite database.");
        }

        // Fallback to SQLite so local testing runs without friction
        try {
            $dataDir = __DIR__ . '/../data';
            if (!is_dir($dataDir)) {
                mkdir($dataDir, 0777, true);
            }
            $sqliteFile = $dataDir . '/deligo.sqlite';
            $isNew = !file_exists($sqliteFile);

            $dsn = "sqlite:" . $sqliteFile;
            self::$instance = new PDO($dsn, null, null, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            ]);
            self::$driverUsed = 'sqlite';

            if ($isNew) {
                self::initSqliteSchema(self::$instance);
            }

            return self::$instance;
        } catch (PDOException $ex) {
            throw new Exception("Database Connection Error: " . $ex->getMessage());
        }
    }

    public static function getDriver(): string {
        return self::$driverUsed;
    }

    private static function initSqliteSchema(PDO $pdo): void {
        $schema = "
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

        CREATE TABLE IF NOT EXISTS enquiry_notes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            enquiry_id INTEGER NOT NULL,
            author TEXT DEFAULT 'Admin',
            note TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (enquiry_id) REFERENCES enquiries(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS admin_users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            email TEXT NOT NULL UNIQUE,
            password_hash TEXT NOT NULL,
            role TEXT DEFAULT 'SUPER_ADMIN',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
        ";

        $pdo->exec($schema);

        // Seed initial sample leads
        $seed = "
        INSERT INTO enquiries (full_name, email, phone, company, service, budget, timeline, message, status, priority, estimated_value, source)
        VALUES 
        ('Sarah Jenkins', 'sarah.j@healthwave.io', '+1 (555) 234-8901', 'HealthWave Telemed', 'Mobile App Development', '$25,000 - $50,000', '2 - 3 Months', 'We need an end-to-end HIPAA compliant telemedicine iOS and Android app with WebRTC video calling and electronic health records integration.', 'NEW', 'URGENT', 38000.00, 'Website Form'),
        ('Vikram Malhotra', 'vikram@finscale.ae', '+971 50 123 4567', 'FinScale Global UAE', 'Enterprise Software & ERP', '$50,000 - $100,000', '3 - 6 Months', 'Looking for custom multi-currency automated reconciliation portal and microservices backend with SOC2 compliance.', 'IN_DISCUSSION', 'HIGH', 75000.00, 'Project Estimator'),
        ('Elena Rostova', 'elena@novamarket.de', '+49 170 9876543', 'NovaMarket GmbH', 'Web Platform Engineering', '$10,000 - $25,000', '1 - 2 Months', 'Re-architecting our B2B marketplace frontend into modern React 18 with high-speed search and headless Shopify integration.', 'PROPOSAL_SENT', 'MEDIUM', 18500.00, 'Website Form'),
        ('Liam O’Connor', 'liam@apexai.co.uk', '+44 20 7946 0192', 'Apex Autonomous', 'AI & Machine Learning', '$50,000 - $100,000', '3 - 6 Months', 'We require custom RAG (Retrieval-Augmented Generation) pipeline and LLM fine-tuning for legal contracts analysis with on-premise hosting.', 'CONTACTED', 'HIGH', 62000.00, 'Website Form'),
        ('Marcus Aurelius Vance', 'm.vance@vancestrategy.com', '+1 (415) 890-1234', 'Vance Strategy Group', 'Cloud Architecture & DevOps', '$25,000 - $50,000', '1 - 2 Months', 'Kubernetes cluster migration from AWS to hybrid cloud, automated Terraform infrastructure, and zero-downtime CI/CD deployment pipeline.', 'CONVERTED', 'MEDIUM', 32000.00, 'Referral');

        INSERT INTO enquiry_notes (enquiry_id, author, note)
        VALUES 
        (1, 'Sales Lead', 'Client booked initial discovery call for tomorrow 4 PM GMT. Preparing HIPAA compliance checklist.'),
        (2, 'CTO', 'Sent technical architecture diagram for microservices engine. Awaiting feedback from their security auditor.'),
        (3, 'Account Manager', 'Proposal draft v2 delivered with 8-week sprint roadmap.');
        ";
        $pdo->exec($seed);
    }

    private static function initMysqlSchema(PDO $pdo): void {
        try {
            $check = $pdo->query("SHOW TABLES LIKE 'enquiries'");
            if ($check && $check->rowCount() === 0) {
                $schemaFile = __DIR__ . '/schema.sql';
                if (file_exists($schemaFile)) {
                    $sql = file_get_contents($schemaFile);
                    // Strip database creation and use statements so it executes in current database
                    $sql = preg_replace('/CREATE DATABASE[^;]+;/i', '', $sql);
                    $sql = preg_replace('/USE[^;]+;/i', '', $sql);
                    $pdo->exec($sql);
                }
            }
        } catch (Throwable $t) {
            error_log("MySQL auto-schema check note: " . $t->getMessage());
        }
    }
}

