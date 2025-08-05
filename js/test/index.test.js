// Tests for PrivacySchema JS module
const privacy = require('../src/index');

describe('privacy.validation', () => {
    it('should validate a correct CPF', () => {
        expect(privacy.validation.isValidCPF('12345678909')).toBe(true);
    });
    it('should invalidate an incorrect CPF', () => {
        expect(privacy.validation.isValidCPF('11111111111')).toBe(false);
    });
    it('should validate a correct email', () => {
        expect(privacy.validation.isValidEmail('test@example.com')).toBe(true);
    });
    it('should invalidate an incorrect email', () => {
        expect(privacy.validation.isValidEmail('test@.com')).toBe(false);
    });
});

describe('privacy.masking', () => {
    it('should mask CPF correctly', () => {
        expect(privacy.masking.mask('cpf', '12345678900')).toBe('*********00');
    });
    it('should mask email correctly', () => {
        expect(privacy.masking.mask('email', 'john.doe@example.com')).toBe('j********e@example.com');
    });
});

describe('privacy.consent', () => {
    it('should register, update, revoke, and check consent', () => {
        privacy.consent.registerConsent('user1', { purpose: 'marketing' });
        expect(privacy.consent.isConsentActive('user1')).toBe(true);
        privacy.consent.updateConsent('user1', { purpose: 'analytics' });
        privacy.consent.revokeConsent('user1');
        expect(privacy.consent.isConsentActive('user1')).toBe(false);
    });
});

describe('privacy.retention', () => {
    it('should mark data for expiration and check if expired', () => {
        const now = new Date();
        const past = new Date(now.getTime() - 10000);
        privacy.retention.markForExpiration('user2', past);
        expect(privacy.retention.isExpired('user2')).toBe(true);
    });
});

describe('privacy.audit', () => {
    it('should log and retrieve audit operations', () => {
        privacy.audit.logOperation('user3', 'access', { field: 'cpf' });
        const logs = privacy.audit.getAuditLogs();
        expect(logs.length).toBeGreaterThan(0);
        expect(logs[logs.length - 1].userId).toBe('user3');
    });
});