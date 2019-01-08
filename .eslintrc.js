module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
      experimentalObjectRestSpread: true,
    },
    allowImportExportEverywhere: true,
  },
  plugins: ['import', 'prettier'],
  extends: ['eslint:recommended', 'prettier'],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    'func-names': ['error', 'as-needed'],
    'no-shadow': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: true,
        allowArrowFunction: true,
        allowLiteral: true,
        allowObject: true,
      },
    ],
    'no-extra-semi': 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
      },
    ],
  },
};
