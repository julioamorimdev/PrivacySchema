// validation.js - Validation logic for personal data

/**
 * Validate if the given data contains valid personal information.
 * Currently supports CPF and email validation.
 * @param {Object} data - The user data to validate.
 * @returns {Object} - Validation results for each field.
 */
function validate(data) {
    const result = {};
    if (data.cpf) {
        result.cpf = isValidCPF(data.cpf);
    }
    if (data.email) {
        result.email = isValidEmail(data.email);
    }
    // Add more validations as needed
    return result;
}

/**
 * Validate CPF (Brazilian ID).
 * @param {string} cpf
 * @returns {boolean}
 */
function isValidCPF(cpf) {
    // Remove non-numeric characters
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
    let sum = 0, rest;
    for (let i = 1; i <= 9; i++) sum += parseInt(cpf.substring(i-1, i)) * (11 - i);
    rest = (sum * 10) % 11;
    if ((rest === 10) || (rest === 11)) rest = 0;
    if (rest !== parseInt(cpf.substring(9, 10))) return false;
    sum = 0;
    for (let i = 1; i <= 10; i++) sum += parseInt(cpf.substring(i-1, i)) * (12 - i);
    rest = (sum * 10) % 11;
    if ((rest === 10) || (rest === 11)) rest = 0;
    return rest === parseInt(cpf.substring(10, 11));
}

/**
 * Validate email address.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
    // Simple regex for email validation
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}

module.exports = {
    validate,
    isValidCPF,
    isValidEmail
};