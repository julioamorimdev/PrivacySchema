// masking.js - Masking logic for personal data

/**
 * Mask a sensitive value (e.g., CPF, email, phone, RG, CNPJ, name, address) according to type.
 * @param {string} type - The type of data to mask (e.g., 'cpf', 'email', 'phone', 'rg', 'cnpj', 'name', 'address').
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
    if (type === 'phone') {
        // Mask all but the last 2 digits
        return value.replace(/\d(?=\d{2})/g, '*');
    }
    if (type === 'rg') {
        // Mask all but the last 2 digits
        return value.replace(/\d(?=\d{2})/g, '*');
    }
    if (type === 'cnpj') {
        // Mask all but the last 4 digits
        return value.replace(/\d(?=\d{4})/g, '*');
    }
    if (type === 'name') {
        // Mask all but the first and last character of each word
        return value.split(' ').map(word => {
            if (word.length <= 2) return word[0] + '*';
            return word[0] + '*'.repeat(word.length - 2) + word[word.length - 1];
        }).join(' ');
    }
    if (type === 'address') {
        // Mask all but the first and last character of each word, except for numbers
        return value.split(' ').map(word => {
            if (/^\d+$/.test(word)) return word;
            if (word.length <= 2) return word[0] + '*';
            return word[0] + '*'.repeat(word.length - 2) + word[word.length - 1];
        }).join(' ');
    }
    return value;
}

module.exports = {
    mask
};