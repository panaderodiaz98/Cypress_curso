describe('Ejemplos HOOKS', () =>{
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
    
})