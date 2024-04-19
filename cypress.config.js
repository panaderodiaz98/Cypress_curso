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
  chromeWebSecurity: false,
  /* Estas config sirven para que cargue pagina redireccionada */
  experimentalModifyObstructiveThirdPartyCode: true,
  /* Estas config sirven para que puedas interactuar con pagina redireccionada mediante el cy.origin()... ver en login_FSM_page https://www.youtube.com/watch?v=Fohrq5GZSD8 video */
  experimentalOriginDependencies: true,
  testIsolation: false,
  retries: {
    runMode: 1,
    openMode: 0
  },
  watchForFileChanges: false,
  baseUrl: "https://edenor-test.geocall.cloud"
}})




