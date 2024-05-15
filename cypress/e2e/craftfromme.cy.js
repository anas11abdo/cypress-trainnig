/// <reference types="cypress" />
describe('Cart Functionalities', () => {
    before(()=>{
        const email = "CypressUser@gmail.com"; 
        const password = "test@123"
        // custom command 
        cy.loginToMagento(email,password)
    })
    
    beforeEach(()=>{
        cy.visit("/");
        cy.get("#search").type("shirt"+"{enter}");
        cy.contains("a","Circe Hooded Ice Fleece").click();
        cy.wait(1000)
        cy.get(".swatch-option.text").contains("M").click();
        cy.get("[aria-label=Purple]").click()
        cy.get("#product-addtocart-button").click();
        cy.wait(3000)
    })
   
    it('Validate that the user can add product to cart', () => {
        cy.get("[role=alert]").should("be.visible").and("contain","You added Circe Hooded Ice Fleece to your shopping cart")
        cy.get(".counter-number").should("be.visible").and("contain","1")
    });

    it('Validate that the user can delete product', () => {

       cy.get(".showcart").click();
       cy.get("[title='Remove item']").click();
       cy.get(".action-accept").click()
       cy.get(".subtitle.empty").should("contain","You have no items in your shopping cart.")
       cy.get(".counter-number").should("be.hidden") 

    });

    it('Validate that the user can update a product in shopping cart ', () => {
        cy.get(".showcart").click();
        cy.get("[title='Edit item']").click();
        cy.wait(1500)
        cy.get(".swatch-option.text").contains("XS").click();
        cy.get("[aria-label=Green]").click()
        cy.get("#qty").clear().type("2")
        cy.get("#product-updatecart-button").click()
        cy.wait(1000)
        cy.get("[role=alert]").should("be.visible").and("contain","Circe Hooded Ice Fleece was updated in your shopping cart.")
        cy.get("dl.item-options").should("contain","XS").and("contain","Green")
        cy.get("[title='Qty']").should("have.value","2")
    
    });


});