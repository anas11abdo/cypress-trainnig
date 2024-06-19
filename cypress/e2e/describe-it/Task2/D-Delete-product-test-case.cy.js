/// <reference types="cypress" />

beforeEach(()=>{
    cy.Login();
    cy.get(".nav-icon.fas.fa-book").click();
    cy.get(".nav-icon.far.fa-dot-circle").eq(0).click({force: true});
    cy.wait(3000);
});

describe('Test Case D', () => {
    it('Delete product test case', () => {
        cy.get("#SearchProductName").type("Laptop123");
        cy.get("#SearchCategoryId").select("Computers");
        cy.get("#search-products").click();
        cy.wait(5000);
        cy.get("[type='checkbox']").eq(1).click();
        cy.get("#delete-selected").click();
        cy.wait(3000);
        cy.contains("Yes").click();

        //Assertion
        cy.contains("No data available in table").should("be.visible");
    });
});