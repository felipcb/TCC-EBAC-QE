const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
require('dotenv').config(); 

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL, // se estiver usando
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },

    env: {
      TOKEN: process.env.TOKEN
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // volta para testes JS padrão

    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'mochawesome-report',
      overwrite: false,
      html: true,
      json: true
    }
  },
});
