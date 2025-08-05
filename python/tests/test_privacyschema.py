# Tests for PrivacySchema Python module
import pytest
from privacyschema import (
    validate, is_valid_cpf, is_valid_email, mask,
    register_consent, update_consent, revoke_consent, is_consent_active,
    mark_for_expiration, is_expired,
    log_operation, get_audit_logs
)
from datetime import datetime, timedelta

def test_validate():
    # Should validate correct CPF and email
    result = validate({'cpf': '12345678909', 'email': 'test@example.com'})
    assert result['cpf'] is True
    assert result['email'] is True
    # Should invalidate incorrect CPF and email
    result = validate({'cpf': '11111111111', 'email': 'test@.com'})
    assert result['cpf'] is False
    assert result['email'] is False

def test_mask():
    # Should mask CPF and email correctly
    assert mask('cpf', '12345678900') == '*********00'
    assert mask('email', 'john.doe@example.com') == 'j********e@example.com'

def test_consent():
    # Should register, update, revoke, and check consent
    register_consent('user1', {'purpose': 'marketing'})
    assert is_consent_active('user1') is True
    update_consent('user1', {'purpose': 'analytics'})
    revoke_consent('user1')
    assert is_consent_active('user1') is False

def test_retention():
    # Should mark data for expiration and check if expired
    past = datetime.now() - timedelta(seconds=10)
    mark_for_expiration('user2', past)
    assert is_expired('user2') is True

def test_audit():
    # Should log and retrieve audit operations
    log_operation('user3', 'access', {'field': 'cpf'})
    logs = get_audit_logs()
    assert len(logs) > 0
    assert logs[-1]['user_id'] == 'user3'