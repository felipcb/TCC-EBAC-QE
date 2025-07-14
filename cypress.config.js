const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br', // se estiver usando
    setupNodeEvents(on, config) {
      // plugins padrão, se necessário
    },
    specPattern: 'cypress/e2e/**/*.cy.js' // volta para testes JS padrão
  },
});
