describe('Formas de request y verificar status 200', () =>{
    it('Request forma 1', () =>{
        let endpoint;
        endpoint = cy.request('http://localhost:3000/posts') /* Requiero el endpoint */
        endpoint.its('status').should('equal',200) /* Le digo que el status del endpoint debe ser 200 */
    })
    it('Request forma 2', () =>{
        let endpoint;
        endpoint = cy.request('http://localhost:3000/posts') /* Requiero el endpoint */
        endpoint.should((response) => { /* Funcion de flecha donde asiguno una variable "response" donde llamo al status que sea igual a 200 */
            expect(response.status).to.eq(200)
        })
    })
})