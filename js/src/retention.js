// retention.js - Retention policy logic

// In-memory retention store (for demonstration purposes)
const retentionStore = {};

/**
 * Mark data for expiration/removal.
 * @param {string} userId
 * @param {Date} expirationDate
 */
function markForExpiration(userId, expirationDate) {
    retentionStore[userId] = { expirationDate };
}

/**
 * Check if data is expired.
 * @param {string} userId
 * @returns {boolean}
 */
function isExpired(userId) {
    if (!retentionStore[userId]) return false;
    return new Date() > new Date(retentionStore[userId].expirationDate);
}

module.exports = {
    markForExpiration,
    isExpired
};