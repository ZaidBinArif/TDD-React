module.exports = function() {
  return {
    testFramework: 'jest', //<callout id="co.test-framework-jest" />

    env: {
      type: 'node', //<callout id="co.wallaby-node-env" />
    },

    tests: ['tests/**/*.test.js'], //<callout id="co.test-files" />
    files: ['**/*.js', '!node_modules/**/*', '!**/*.test.js', '!**/.*'], //<callout id="co.project-files" />
  };
};
