/* 1 */ cy.log("Bienvenido a Cypress") /* Largo mensaje por consola/log */
/* 2 */ cy.visit('https://www.google.com.ar/') /* Abro URL indicada */
/* 3 */ cy.title().should('eq','Home Page | RodrigoVillanueva.com.mx') /* Valida titulo de pagina */
/* 4 */ cy.get("#Objeto").type("TextoQueDeseesIngresar{enter}") /* Ingresa un enter en el objeto deseado incluso ingresando texto si deseamos conjuntamente */
/* 5 */ cy.get("#Objeto").scrollTo('center'); /* Scroll normal */ cy.get("#Objeto").scrollTo('center',{ ensureScrollable: false }) /* En caso de no ser un objeto scrolleabe */
/* 6 */ cy.get("#Objeto").type('{pagedown}') /* Page down */
/* 7 */ cy.get("#Objeto").type('{pageup}') /* Page UP */
/* 8 */ cy.get("#Objeto").tab() /* Funcion TAB, Instalar plugin tabs comando: "npm install -D cypress-plugin-tab" y agregar en el archivo de test el comando para que reconozca la funcion: "require('cypress-plugin-tab')" */
/* 9 */ cy.get("#Objeto").should("be.visible").type('Exito') /* Funcion de espera, que este visible y tipear "exito" */
        cy.get("#Objeto").should("be.visible", {timeout: 5000}).type('Exito') /* Funcion de espera, que este visible y tipear "exito" */ /* Se le puede agregar time out propio */
        cy.get("#Objeto").should("be.visible").should("be.enabled").type('Exito') /* Funcion de espera, que se puede concatenar si se necesita, que este visible y habilitado */
/* 10 */cy.get("#Objeto").should("be.visible").click() /* Ejemplos de click */
        cy.get("#Objeto").scrollTo("center",{ensureScrollable:false}).click() /* Ejemplos de click */
        cy.get("#Objeto").scrollTo("center",{ensureScrollable:false}).should("be.enabled").click() /* Ejemplos de click */
        cy.get("#Objeto").should("be.visible").click({force:true}) /* Este click fuerza algun elemento q no deje hacer click naturalmente o incluso para verificar en el caso de aparecer error que no estemos buscando mal el objeto y falle por eso */
        cy.get("#Objeto").should("be.visible").click(20,20) /* Ejemplos de click con coordenadas*/
/* 11 */cy.get("#Objeto") /* Selector objeto por ID */
        cy.get("[atributo='valor']") /* Selector por atributo: Atributo entre corchetes y valor de atributo entre comillas simples */
        cy.xpath("//input[@name='contact[name]']") /* Selector XPATH (Instalar dependencia y escribir comando en archivo de prueba para que reconozca la funcion "XPATH") */
        cy.get(".clase").contains("Valor") /* Selector CONTAINS por valor */
        cy.contains("valor") /* Selector por contenido del objeto, osea por el valor dle texto */
        cy.xpath("//div[texto()='ValorTexto']") /* Selector XPATH para seleccionar por su texto si no tuviera atributos */
        cy.xpath("//span[texto()='ValorTexto']") /* Selector XPATH para seleccionar por su texto si no tuviera atributos */
        cy.xpath("//span[contains(text(),'valor')]") /* Selector XPATH para seleccionar por su texto si no tuviera atributos */ 
        cy.xpath("//div[contains(text(),'valor')]") /* Selector XPATH para seleccionar por su texto si no tuviera atributos */ 
/* 12 */cy.get('#Checkbox').check().should('be.checked') /* Hago check y verifico que esta chequeado correctamente */
        cy.get('#Checkbox').uncheck().should('not.be.checked') /* Saco check y verifico que no este chequeado */
/* 13 */cy.get("#Select").should("be.enabled").select("ValorSelect") /* Selecciono dentro de combo box valor elegido */
        cy.get("#Select").should("be.enabled").select("ValorSelect").should("have.value","Sunday") /* Con ASSERT: valido valor elegido en misma seleccion*/
        cy.get("#Select").should("be.enabled").should("have.value","Sunday") /* Con ASSERT: valido valor elegido*/
        cy.get('#Multi-select').should("be.enabled").select(["California","Ohio","New York"]) /* Multiples opciones, dentro del parentesis como si fuera un arreglo */
/* 14 */cy.get("#Select").should("be.enabled").should("have.value","Sunday").then(()=>{
            cy.get('#printAll').should("be.enabled").click() 
        }) /* PROMESAS: luego de accion o lo que fuere, ".then(()=>{})" marca una promesa de funcion que accionara SI se cumple lo anterior ".entoncesEjecutaEsto(..)*/
/* 15 */cy.get('#Objeto').contains("ValorTexto").click() /* Clickeo en objeto que contenga ese ValorTexto elegido */
        cy.get('#Objeto').find("PropiedadObjeto").eq(1) /*  */
        cy.xpath("//td[text()='Mike Trout']").then((e)=>{
          let texto=e.text()
          if(texto=="Mike Trout"){
           cy.log("Texto correcto")
          }})
        cy.get('h2').should("have.text","Type in your search to filter data by Tasks / Assignee / Status ") /* Valido texto entero con HAVE */
        cy.get('h2').should("contains.text","Type in your search") /* Valido una parte del texto con CONTAINS */
        cy.get('#InputALllenar').should("have.value","Type in your search to filter data by Tasks / Assignee / Status ") /* Sirve por ej para cuando llenamos INPUTS, para validar lo que ingresamos por teclado */ /* Si contiene en su totalidad exacta el texto */
        cy.get('#InputALllenar').should("contains.value","Type in your search") /* Sirve por ej para cuando llenamos INPUTS, para validar lo que ingresamos por teclado */ /* Si contiene esa parte el valor texto */
/* 16 */cy.log("Mensaje") /* Imprimir por consola mensaje deseado */
/* 17 */cy.get('h2').should("contains.text","Type in your search").and("be.visible") /* Se puede concatenar validaciones con el "And" en lugar de volver a poner should("")*/ 
/* 18 */cy.url().should("include","table-search-filter-demo.html") /* Valido una parte de la URL */
        cy.url().should("eq","https://demo.seleniumeasy.com/table-search-filter-demo.html") /* Valido URL exacta */
/* 19 */cy.get('#ObjetoAMover').drag('#ObjetoDondeMuevo') /* Drag and drop */ /* Si no funciona poner: */ .drag('#ObjetoDondeMuevo',{force:true})
/* 20 */cy.xpath("//span[normalize-space()='Prácticas']").trigger("mouseover") /* Funcion MOUSEOVER, mediante triggers */
/* 21 */cy.xpath("//input[@name='contact[name]']").should("be.visible").as("nombre")
        cy.get("@nombre").type("Hola") /* Creo ALIAS de objeto con ".as("nombre") */
/* 22 */cy.xpath("//p[contains(text(),'Hola carlos')]").invoke("text").as("textoObtenido") /* Funcion INVOKE para quedarse con el texto y crear una especie de variable con la funcion AS concatenada */
/* 23 */cy.reload() /* Refresco pagina */
        cy.go("back") /* Vuelvo anterior pagina */
        cy.go("foward") /* Voy a la pagina donde estaba*/