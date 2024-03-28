const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners her
      
    },
  defaultCommandTimeout: 10000, /* Timeout espera de objetos de la pagina */
  pageLoadTimeout: 20000, /* Timeout espera de carga de la pagina (comandos visit(), go(), reload()) */
  video: true,
  screenshotOnRunFailure: true,
  projectId: "wig4et",
}})




