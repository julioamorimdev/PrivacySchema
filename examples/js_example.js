// JS Example: Real-world usage of PrivacySchema
const privacy = require('../js/src/index');

// Example user data
const user = {
    cpf: '12345678909',
    email: 'john.doe@example.com',
    id: 'user1'
};

// Validation
console.log('Validation:', privacy.validation.validate(user));

// Masking
console.log('Masked CPF:', privacy.masking.mask('cpf', user.cpf));
console.log('Masked Email:', privacy.masking.mask('email', user.email));

// Consent
privacy.consent.registerConsent(user.id, { purpose: 'marketing' });
console.log('Consent active:', privacy.consent.isConsentActive(user.id));
privacy.consent.revokeConsent(user.id);
console.log('Consent active after revoke:', privacy.consent.isConsentActive(user.id));

// Retention
const now = new Date();
const past = new Date(now.getTime() - 10000);
privacy.retention.markForExpiration(user.id, past);
console.log('Is expired:', privacy.retention.isExpired(user.id));

// Audit
privacy.audit.logOperation(user.id, 'access', { field: 'cpf' });
console.log('Audit logs:', privacy.audit.getAuditLogs());