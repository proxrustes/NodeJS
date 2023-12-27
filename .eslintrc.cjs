module.exports = {
  extends: [
    'plugin:sonarjs/recommended',
    'plugin:@typescript-eslint/recommended',
    'semistandard'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  ignorePatterns:  ["**/public"]
};