const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const getCompareSnapshotsPlugin = require("cypress-image-diff-js/dist/plugin")
      getCompareSnapshotsPlugin(on, config)
    },
    baseUrl: 'https://www.awaytravel.com/',
    viewportHeight: 800,
    viewportWidth: 1200,
    excludeSpecPattern: [
      'cypress/e2e/1-getting-started/*.js',
      'cypress/e2e/2-advanced-examples/*.js',
    ],
  },
});
