// PrivacySchema main module

const validation = require('./validation');
const masking = require('./masking');
const consent = require('./consent');
const retention = require('./retention');
const audit = require('./audit');

// Export all modules under the privacy namespace
module.exports = {
    validation,
    masking,
    consent,
    retention,
    audit
};