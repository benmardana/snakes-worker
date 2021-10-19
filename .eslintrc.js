module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': [
      'error',
      {
        js: 'never',
        actions: 'always',
        graphql: 'always',
        png: 'always',
        css: 'always',
        scss: 'always',
        svg: 'always',
      },
    ],
    'import/no-named-as-default': 'off',
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],
    'no-unused-expressions': ['off'],
    'no-unused-vars': ['off'],
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { allowShortCircuit: true },
    ],
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-undef': 'off',
  },
};
