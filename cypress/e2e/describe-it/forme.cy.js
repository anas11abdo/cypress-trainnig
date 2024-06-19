/// <reference types="cypress" />


beforeEach(()=>{
    cy.visit("/");
    cy.get("#search").clear().type("shirt",{delay:500});
        cy.get(".actions [type='submit']").click();
        cy.get(".product-item-info").eq(1).click();
        cy.get("#option-label-size-143-item-168").click();
        cy.get("#option-label-color-93-item-57").click();
        cy.get("#product-addtocart-button").click();
        cy.wait(3000);
})

describe('add to cart', () => {
    it('add a item to the shop cart', () => {    
        cy.get("[role=alert]").should("be.visible").and("contain","You added Circe Hooded Ice Fleece to your shopping cart")
        cy.get(".counter-number").should("be.visible").and("contain","1")
    });
    it.only('delete item', () => {
        cy.get(".showcart").click();
        cy.get("[title='Remove item']").click();
        cy.get(".action-accept").click();
        cy.get(".subtitle.empty").should("contain","You have no items in your shopping cart.");
       cy.get(".counter-number").should("be.hidden"); 
    });
});