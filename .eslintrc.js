module.exports = {
  extends: [
    'eslint:recommended',
    "plugin:react/recommended",
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  env: { browser: true, node: true, es6: true },
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    // NOTE: nextは react のimport不要のためoffにする
    "react/react-in-jsx-scope": "off",
    // return typeを強制しない
    '@typescript-eslint/explicit-function-return-type': 'off',
    // 変数の未使用を許可しない
    'no-unused-vars': 'error',
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        singleQuote: true,
        semi: false,
        tabWidth: 2,
        trailingComma: 'es5',
      },
    ],
  },
}
