describe('GET verifico datos', () =>{
    it('GET', () =>{
        let endpoint;
        endpoint = cy.request('http://localhost:3000/posts') /* Requiero el endpoint */
        endpoint.should((response) => { /* Funcion de flecha donde asiguno una variable "response" donde llamo al status que sea igual a 200 */
            expect(response.status).to.eq(200)
        })
        
        cy.request({ /* En lugar de requerir simplemente el endpoint, le pongo que requiero un arreglo con caracteristicas especificas */
            method: 'GET', /* Le paso el metodo que quiero, en este caso GET */
            url: 'http://localhost:3000/posts', /* Le paso la URL, es decir el endpoint */
            headers: { /* Headers le aclaro el tipo de archivo que vamos a buscar */
                accept: 'application/json' /* Le digo que el tipo de archivo que buscamos y acepte sea un JSON */
            }
        }).then((response) => { /* Funcion ".then" diciendo "Haceme el request solicitado anterior y entonces hace..."  */
            let datos;
            datos = JSON.parse(JSON.stringify(response.body)) /* Creo variable datos donde le digo que parsee TODOS los datos obtenidos (json.parse) a un json de tipo string (json.stringify) que vea en el body (response.body)  */
            cy.log(datos) /* Verifico y muestro datos */ /* Lo cual trae un arreglo de objetos (Un objeto por cada uno que traiga el GET ) */
            expect(datos[0]).has.property('title','a title') /* Como trae un arreglo de objetos, le digo que del primer objeto en el arreglo me verifique el campo "title" mediante el has.property */
            expect(datos[1]).has.property('title','Tincho Cypress actualizacion mediante PUT') /* Verifico has property title del objeto 2 */
            expect(datos[3]).has.property('title','Insertando desde cypress..') /* Verifico dato agregado desde el post... */
        })
    })
})