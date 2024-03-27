/* XPATH AND OR */
cy.xpath('//input[@id="primer valor" or @type="segundo valor"]').should('be.visible').as('alias') /* OR, elegime por primer o segundo valor */
cy.xpath('//input[@id="primer valor" and @type="segundo valor"]').should('be.visible').as('alias') /* AND, elegime por primer y segundo valor */

/* XPATH POR TEXTO (para elementos que no tengan atributos, etc) */
cy.xpath('//div[text()="Texto"]').should('be.visible').as('alias')
cy.xpath('//span[text()="Texto"]').should('be.visible').as('alias')

/* XPATH POR UNA PARTE DE SU TEXTO (para elementos que no tengan atributos, etc) */
cy.xpath('//div[contains(text(),"Parte de texto"])').should('be.visible').as('alias')
cy.xpath('//span[contains(text(),"Parte de texto"]]').should('be.visible').as('alias')

