/// <reference types="cypress" />

beforeEach(()=>{
    cy.Login();
    cy.get(".nav-icon.fas.fa-book").click();
    cy.get(".nav-icon.far.fa-dot-circle").eq(0).click({force: true});
    cy.wait(3000);
});

describe('Test case C', () => {
    it('Search for product test case', () => {
        cy.get("#SearchProductName").type("Laptop123");
        cy.get("#SearchCategoryId").select("Computers");
        cy.get("#search-products").click();
        cy.wait(3000);
    
        //Assertion
        cy.get(".fas.fa-check.true-icon").should("be.visible");
    });
});
