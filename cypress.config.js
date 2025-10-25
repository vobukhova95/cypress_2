const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1c2m8a',
  e2e: {
    baseUrl: 'http://qamid.tmweb.ru',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
