const {defineConfig} = require("cypress");
module.exports = {

  e2e: {

    defaultCommandTimeout: 20000,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
    },
  },
};
