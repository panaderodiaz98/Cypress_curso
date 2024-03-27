// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
// Alternatively you can use CommonJS syntax:
/* ::::::::::: Aca se puede declarar los HOOKS :::::::::::*/
before(()=>{
    cy.log("Before se ejecuta antes que inicie TODO")
})

beforeEach(()=>{
    cy.log("Before each se ejecuta antes de cada test")
})

afterEach(()=>{
    cy.log("After each se ejecuta despues de cada test")
})

after(()=>{
    cy.log("After se ejecuta despues de que finalice TODO")
})
// require('./commands')