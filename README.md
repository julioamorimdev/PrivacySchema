# PrivacySchema

Pluggable framework for anonymization, consent, retention, and access to personal data (LGPD/GDPR).

## Purpose
Facilitate the implementation of sensitive data compliance in different languages (Node.js, Python, JS via CDN).

## Usage examples

```js
// JavaScript/Node.js
const privacy = require('privacyschema');
privacy.validate(user_data);
privacy.mask('cpf', '123.456.789-00');
```

```python
# Python
from privacyschema import privacy
privacy.validate(user_data)
privacy.mask('cpf', '123.456.789-00')
```

## Installation

### Node.js
```sh
npm install privacyschema
```

### Python
```sh
pip install privacyschema
```

### CDN
```html
<script src="https://cdn.jsdelivr.net/npm/privacyschema"></script>
```

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md).

## License
MIT
