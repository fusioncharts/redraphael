module.exports = {
    'root': true,
    env: {
        jasmine: true
      },
    'extends': 'standard',
    'plugins': [
        'standard',
        'promise'
    ],
    'rules': {
        'indent': ['error', 4],
        'no-magic-numbers': 'off',
        'no-eq-null': 'off',
        'semi': [
            'error',
            'always'
          ],
        'one-var': 'off',
        'block-scoped-var': [
            'error'
        ]
    }
};
