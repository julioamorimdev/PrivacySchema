# Python Example: Real-world usage of PrivacySchema
from privacyschema import (
    validate, mask,
    register_consent, revoke_consent, is_consent_active,
    mark_for_expiration, is_expired,
    log_operation, get_audit_logs
)
from datetime import datetime, timedelta

# Example user data
user = {
    'cpf': '12345678909',
    'email': 'john.doe@example.com',
    'id': 'user1'
}

# Validation
print('Validation:', validate(user))

# Masking
print('Masked CPF:', mask('cpf', user['cpf']))
print('Masked Email:', mask('email', user['email']))

# Consent
register_consent(user['id'], {'purpose': 'marketing'})
print('Consent active:', is_consent_active(user['id']))
revoke_consent(user['id'])
print('Consent active after revoke:', is_consent_active(user['id']))

# Retention
past = datetime.now() - timedelta(seconds=10)
mark_for_expiration(user['id'], past)
print('Is expired:', is_expired(user['id']))

# Audit
log_operation(user['id'], 'access', {'field': 'cpf'})
print('Audit logs:', get_audit_logs())