// masking.js - Masking logic for personal data

/**
 * Mask a sensitive value (e.g., CPF, email) according to type.
 * @param {string} type - The type of data to mask (e.g., 'cpf', 'email').
 * @param {string} value - The value to be masked.
 * @returns {string} - The masked value.
 */
function mask(type, value) {
    if (type === 'cpf') {
        // Mask all but the last 2 digits
        return value.replace(/\d(?=\d{2})/g, '*');
    }
    if (type === 'email') {
        // Mask all but the first and last character before @
        const [user, domain] = value.split('@');
        if (user.length <= 2) return '*@' + domain;
        return user[0] + '*'.repeat(user.length - 2) + user[user.length - 1] + '@' + domain;
    }
    // TODO: Add more types (phone, etc.)
    return value;
}

module.exports = {
    mask
};