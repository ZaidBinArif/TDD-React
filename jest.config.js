module.exports = {
  setupTestFrameworkScriptFile: './src/tests/jestSetup.js',
  // START_HIGHLIGHT
  snapshotSerializers: ['enzyme-to-json/serializer'],
  // END_HIGHLIGHT
};
