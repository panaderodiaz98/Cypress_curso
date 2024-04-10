describe('DELETE elimino datos', () =>{
    it('DELETE', () =>{
        let endpoint;
        endpoint = cy.request('http://localhost:3000/posts') /* Requiero el endpoint */
        endpoint.should((response) => { /* Funcion de flecha donde asiguno una variable "response" donde llamo al status que sea igual a 200 */
            expect(response.status).to.eq(200)
        })
        
        cy.request({ /* En lugar de requerir simplemente el endpoint, le pongo que requiero un arreglo con caracteristicas especificas */
            method: 'DELETE', /* Le paso el metodo que quiero, en este caso POST */
            url: 'http://localhost:3000/posts/5', /* Le paso la URL, es decir el endpoint con la posicion deseada */
        }).then((response) => { /* Funcion ".then" diciendo "Haceme el request solicitado anterior y entonces hace..."  */
           expect(response.status).to.eq(200) /* En este verificamos el response del POST arroja 201 en caso de ejecutar OK */
           /* Luego de ejecutar esto, actualizando la pagina veremos insertados los datos correspondientes.. */
        })
    })
})