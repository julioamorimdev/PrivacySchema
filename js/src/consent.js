// consent.js - Consent management logic

// In-memory consent store (for demonstration purposes)
const consentStore = {};

/**
 * Register user consent.
 * @param {string} userId
 * @param {Object} consentData
 */
function registerConsent(userId, consentData) {
    consentStore[userId] = { ...consentData, revoked: false };
}

/**
 * Update user consent.
 * @param {string} userId
 * @param {Object} consentData
 */
function updateConsent(userId, consentData) {
    if (consentStore[userId]) {
        consentStore[userId] = { ...consentStore[userId], ...consentData };
    }
}

/**
 * Revoke user consent.
 * @param {string} userId
 */
function revokeConsent(userId) {
    if (consentStore[userId]) {
        consentStore[userId].revoked = true;
    }
}

/**
 * Check if user consent is active.
 * @param {string} userId
 * @returns {boolean}
 */
function isConsentActive(userId) {
    return consentStore[userId] && !consentStore[userId].revoked;
}

module.exports = {
    registerConsent,
    updateConsent,
    revokeConsent,
    isConsentActive
};