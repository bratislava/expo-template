module.exports = {
  extends: ['auto', 'plugin:i18next/recommended'],
  ignorePatterns: [
    '*.config.*',
    '.eslintrc.js',
    'modules/backend/openapi-generated',
    'modules/backend/utils/fix-client.js',
  ],
  rules: {
    '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
    /* We use this a lot with isDefined and hasAttributes */
    'unicorn/no-array-callback-reference': 'off',
    /* Named export is easier to refactor automatically */
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-shadow': ['error', { allow: ['event', 'value', 'key', 'error'] }],
    /* Too tedious to type every function return explicitly */
    '@typescript-eslint/explicit-function-return-type': 'off',
    /* We prefer arrow functions */
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    /* e.g. Keeps return statement in short arrow functions */
    'arrow-body-style': 'off',
    /* Links get confused for secrets */
    /* Turned off completely because of several false positives */
    'no-secrets/no-secrets': ['off', { ignoreContent: 'http' }],
    /* Very hard to maintain, especially with other libs not respecting this */
    '@typescript-eslint/no-unsafe-assignment': 'off',
    /* To remove optional parameter warning e.g. { page?: number } */
    'react/require-default-props': 'off',
    /* Include Typography as allowed text component */
    'react-native/no-raw-text': ['error', { skip: ['Typography', 'Button'] }],
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'switch-case/newline-between-switch-case': 'off',
    /* Solve warning "Promise-returning function provided to attribute where a void return was expected." */
    '@typescript-eslint/no-misused-promises': [
      'warn',
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    /* If comparing values in cx function or creating translations, it"s overkill to create variables for that */
    'sonarjs/no-duplicate-string': 'warn',
    /* Quite annoying as it conflicts with VS Code"s auto import */
    'lodash/import-scope': 'off',
    /* Solves error with imports from files with no extension */
    'import/extensions': 'off',
    'react/react-in-jsx-scope': 'off',
    /* Too many false positives */
    'pii/no-phone-number': 'off',
    /* Not relevant to force separation of styles, when we use nativewind */
    'react-native/no-inline-styles': 'off',
    'padding-line-between-statements': ['warn', { blankLine: 'always', prev: '*', next: 'return' }],
    '@typescript-eslint/no-floating-promises': 'warn',
    'const-case/uppercase': 'off',
    'i18next/no-literal-string': ['error', { 'should-validate-template': true }],
  },
}
