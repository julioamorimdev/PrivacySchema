// audit.js - Audit logging for sensitive data operations

// In-memory audit log (for demonstration purposes)
const auditLog = [];

/**
 * Log an operation on sensitive data.
 * @param {string} userId
 * @param {string} operation
 * @param {Object} details
 */
function logOperation(userId, operation, details) {
    auditLog.push({
        timestamp: new Date().toISOString(),
        userId,
        operation,
        details
    });
}

/**
 * Get all audit logs.
 * @returns {Array}
 */
function getAuditLogs() {
    return auditLog;
}

module.exports = {
    logOperation,
    getAuditLogs
};