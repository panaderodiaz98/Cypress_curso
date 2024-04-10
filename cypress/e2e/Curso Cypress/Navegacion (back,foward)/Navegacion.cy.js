describe('Navegacion', () =>{
    it('back and foward', () =>{

        cy.visit('https://rodrigovillanueva.com.mx/form/demo-application')
        cy.wait(1000)
        cy.go("back")
        cy.wait(1000)
        cy.go("forward")
        cy.wait(1000)

    })

    it.only('refresh', () =>{

        cy.visit('https://rodrigovillanueva.com.mx/form/demo-application')
        cy.wait(1000)
        cy.reload()

    })
})