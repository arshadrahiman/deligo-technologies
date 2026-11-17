-- Deligo Technologies - MySQL Database Schema
-- Compatible with MySQL 5.7+ and MySQL 8.0+

CREATE DATABASE IF NOT EXISTS `deligo_db` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `deligo_db`;

-- Enquiries / Leads Table
CREATE TABLE IF NOT EXISTS `enquiries` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `full_name` VARCHAR(120) NOT NULL,
    `email` VARCHAR(150) NOT NULL,
    `phone` VARCHAR(40) NULL,
    `company` VARCHAR(150) NULL,
    `service` VARCHAR(80) NOT NULL,
    `budget` VARCHAR(50) NOT NULL,
    `timeline` VARCHAR(50) NULL,
    `message` TEXT NOT NULL,
    `status` ENUM('NEW', 'CONTACTED', 'IN_DISCUSSION', 'PROPOSAL_SENT', 'CONVERTED', 'ARCHIVED') DEFAULT 'NEW',
    `priority` ENUM('LOW', 'MEDIUM', 'HIGH', 'URGENT') DEFAULT 'MEDIUM',
    `estimated_value` DECIMAL(10, 2) DEFAULT 0.00,
    `source` VARCHAR(80) DEFAULT 'Website Form',
    `ip_address` VARCHAR(45) NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX `idx_status` (`status`),
    INDEX `idx_created_at` (`created_at`),
    INDEX `idx_service` (`service`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Internal Notes for Enquiries (Owner CRM notes)
CREATE TABLE IF NOT EXISTS `enquiry_notes` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `enquiry_id` INT NOT NULL,
    `author` VARCHAR(80) DEFAULT 'Admin',
    `note` TEXT NOT NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`enquiry_id`) REFERENCES `enquiries`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Admin Users Table
CREATE TABLE IF NOT EXISTS `admin_users` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(80) NOT NULL UNIQUE,
    `email` VARCHAR(150) NOT NULL UNIQUE,
    `password_hash` VARCHAR(255) NOT NULL,
    `role` ENUM('SUPER_ADMIN', 'MANAGER', 'SALES') DEFAULT 'MANAGER',
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Seed initial admin user (password: admin123 - bcrypt hash)
INSERT IGNORE INTO `admin_users` (`id`, `username`, `email`, `password_hash`, `role`)
VALUES (1, 'owner', 'owner@deligo.tech', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'SUPER_ADMIN');

-- Sample High-Value Enquiries to populate the Owner Dashboard
INSERT INTO `enquiries` (`full_name`, `email`, `phone`, `company`, `service`, `budget`, `timeline`, `message`, `status`, `priority`, `estimated_value`, `source`)
VALUES 
('Sarah Jenkins', 'sarah.j@healthwave.io', '+1 (555) 234-8901', 'HealthWave Telemed', 'Mobile App Development', '$25,000 - $50,000', '2 - 3 Months', 'We need an end-to-end HIPAA compliant telemedicine iOS and Android app with WebRTC video calling and electronic health records integration.', 'NEW', 'URGENT', 38000.00, 'Website Form'),

('Vikram Malhotra', 'vikram@finscale.ae', '+971 50 123 4567', 'FinScale Global UAE', 'Enterprise Software & ERP', '$50,000 - $100,000', '3 - 6 Months', 'Looking for custom multi-currency automated reconciliation portal and microservices backend with SOC2 compliance.', 'IN_DISCUSSION', 'HIGH', 75000.00, 'Project Estimator'),

('Elena Rostova', 'elena@novamarket.de', '+49 170 9876543', 'NovaMarket GmbH', 'Web Platform Engineering', '$10,000 - $25,000', '1 - 2 Months', 'Re-architecting our B2B marketplace frontend into modern React 18 with high-speed search and headless Shopify integration.', 'PROPOSAL_SENT', 'MEDIUM', 18500.00, 'Website Form'),

('Liam O’Connor', 'liam@apexai.co.uk', '+44 20 7946 0192', 'Apex Autonomous', 'AI & Machine Learning', '$50,000 - $100,000', '3 - 6 Months', 'We require custom RAG (Retrieval-Augmented Generation) pipeline and LLM fine-tuning for legal contracts analysis with on-premise hosting.', 'CONTACTED', 'HIGH', 62000.00, 'Website Form'),

('Marcus Aurelius Vance', 'm.vance@vancestrategy.com', '+1 (415) 890-1234', 'Vance Strategy Group', 'Cloud Architecture & DevOps', '$25,000 - $50,000', '1 - 2 Months', 'Kubernetes cluster migration from AWS to hybrid cloud, automated Terraform infrastructure, and zero-downtime CI/CD deployment pipeline.', 'CONVERTED', 'MEDIUM', 32000.00, 'Referral');

-- Seed Notes for sample enquiries
INSERT INTO `enquiry_notes` (`enquiry_id`, `author`, `note`)
VALUES 
(1, 'Sales Lead', 'Client booked initial discovery call for tomorrow 4 PM GMT. Preparing HIPAA compliance checklist.'),
(2, 'CTO', 'Sent technical architecture diagram for microservices engine. Awaiting feedback from their security auditor.'),
(3, 'Account Manager', 'Proposal draft v2 delivered with 8-week sprint roadmap.');

