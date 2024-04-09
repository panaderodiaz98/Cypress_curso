describe('PUT actualizo datos', () =>{
    it('PUT', () =>{
        let endpoint;
        endpoint = cy.request('http://localhost:3000/posts') /* Requiero el endpoint */
        endpoint.should((response) => { /* Funcion de flecha donde asiguno una variable "response" donde llamo al status que sea igual a 200 */
            expect(response.status).to.eq(200)
        })
        
        cy.request({ /* En lugar de requerir simplemente el endpoint, le pongo que requiero un arreglo con caracteristicas especificas */
            method: 'PUT', /* Le paso el metodo que quiero, en este caso POST */
            url: 'http://localhost:3000/posts/3', /* Le paso la URL, es decir el endpoint con la posicion deseada */
            body: { /* Le digo que inserte en el BODY los siguientes campos.. */
                'title': 'Actualizando datos desde cypress..', /* Inserto dato 2 */
                'nombre': 'Martin Diaz' /* Inserto dato 3 */
            }
        }).then((response) => { /* Funcion ".then" diciendo "Haceme el request solicitado anterior y entonces hace..."  */
           expect(response.status).to.eq(200) /* En este verificamos el response del POST arroja 201 en caso de ejecutar OK */
           /* Luego de ejecutar esto, actualizando la pagina veremos insertados los datos correspondientes.. */
        })
    })
})