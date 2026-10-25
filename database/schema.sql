CREATE DATABASE IF NOT EXISTS prem_portfolio
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE prem_portfolio;

CREATE TABLE IF NOT EXISTS contact_enquiries (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(254) NOT NULL,
  work_type VARCHAR(60) NOT NULL DEFAULT 'Other',
  message TEXT NOT NULL,
  status ENUM('new', 'contacted', 'closed', 'spam') NOT NULL DEFAULT 'new',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  INDEX idx_contact_created_at (created_at),
  INDEX idx_contact_status_created (status, created_at)
) ENGINE=InnoDB;

-- Recommended: create a dedicated, least-privilege database user rather than using root.
-- Run these separately as a MySQL administrator, replacing the password:
-- CREATE USER 'portfolio_user'@'localhost' IDENTIFIED BY 'replace_with_a_strong_password';
-- GRANT SELECT, INSERT ON prem_portfolio.contact_enquiries TO 'portfolio_user'@'localhost';
-- FLUSH PRIVILEGES;
