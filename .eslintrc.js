module.exports = {
  plugins: ['react'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  // START_HIGHLIGHT
  parser: 'babel-eslint',
  // END_HIGHLIGHT
  env: {
    node: true,
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    'comma-dangle': ['error', 'always-multiline'],
  },
  settings: {
    react: {
      version: '16.4.2',
    },
  },
};
