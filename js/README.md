# PrivacySchema

Pluggable framework for anonymization, consent, retention, and access to personal data (LGPD/GDPR).

## Features
- Personal data validation (CPF, email, etc.)
- Data masking (CPF, email, phone, RG, CNPJ, name, address)
- Consent management (register, update, revoke)
- Retention policy (mark for expiration/removal)
- Audit logging (operations on sensitive data)

## Installation
```sh
npm install privacyschema
```

## Usage Example
```js
const privacy = require('privacyschema');

// Masking examples
console.log(privacy.masking.mask('cpf', '12345678900')); // *********00
console.log(privacy.masking.mask('email', 'john.doe@example.com')); // j********e@example.com
console.log(privacy.masking.mask('phone', '11987654321')); // ********21
console.log(privacy.masking.mask('rg', '123456789')); // *******89
console.log(privacy.masking.mask('cnpj', '12345678000199')); // ************0199
console.log(privacy.masking.mask('name', 'Maria Silva')); // M***a S***a
console.log(privacy.masking.mask('address', 'Rua das Flores 123')); // R**a d**s F***s 123
```

## Documentation
See the main [PrivacySchema repository](https://github.com/julioamorimdev/PrivacySchema) for full documentation, Python usage, and contribution guidelines.

## License
MIT