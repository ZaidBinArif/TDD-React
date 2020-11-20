module.exports = {
  plugins: ['react'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  env: {
    node: true,
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    'comma-dangle': ['error', 'always-multiline'],
    // START_HIGHLIGHT
    'no-unused-vars': ['error', { varsIgnorePattern: '^_' }],
    // END_HIGHLIGHT
  },
};
