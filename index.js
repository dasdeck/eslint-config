/**
 * sharable config for eslint
 */
module.exports = {
    'root': true,
    'env': {
        'es6': true,
        'browser': true,
        'commonjs': true,
    },
    'plugins': [
        'vue'
    ],
    'extends': [
        'eslint:recommended',
        'plugin:vue/recommended'
    ],
    'parserOptions': {
        'parser': 'babel-eslint',
        'sourceType': 'module'
    },
    'rules': {
        'brace-style': ['error', '1tbs', {'allowSingleLine': true}],
        'comma-style': 'error',
        'comma-spacing': 'error',
        'eqeqeq': ['off', 'smart'],
        'indent': 'off',
        'indent-legacy': ['error', 4, {'SwitchCase': 1}],
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'linebreak-style': ['error', 'unix'],
        'no-var': 'error',
        'no-multi-spaces': 'error',
        'no-trailing-spaces': 'error',
        'no-lone-blocks': 'error',
        'no-extend-native': 'error',
        'no-unused-vars': ['error', {'vars': 'local', 'args': 'none'}],
        'no-empty': ['error', {'allowEmptyCatch': true}],
        'no-duplicate-imports': 'error',
        'no-array-constructor': 'error',
        'no-multiple-empty-lines': 'error',
        'no-template-curly-in-string': 'error',
        'no-console': 'off',
        'object-curly-spacing': 'error',
        'prefer-const': 'error',
        'quotes': ['error', 'single', {'avoidEscape': true}],
        'semi': ['error', 'always'],
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'space-in-parens': 'error',
        'space-before-blocks': 'error',
        'template-curly-spacing': 'error',
        'vue/html-indent': ['error', 4],
        'vue/html-self-closing': ['error', {'html': {'normal': 'never'}}],
        'vue/require-v-for-key': 'off',
        'vue/require-default-prop': 'off',
        'vue/max-attributes-per-line': 'off'
    }
};