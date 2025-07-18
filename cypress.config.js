const { defineConfig } = require('cypress');
require('dotenv').config(); 

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL, // se estiver usando
    setupNodeEvents(on, config) {
      // plugins padrão, se necessário
    },
    env: {
      TOKEN: process.env.TOKEN
    },
    specPattern: 'cypress/e2e/**/*.cy.js' // volta para testes JS padrão
  },
});
