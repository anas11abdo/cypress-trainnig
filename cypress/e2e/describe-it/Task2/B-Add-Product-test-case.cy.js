/// <reference types="cypress" />

beforeEach(()=>{
    cy.Login();
    cy.get(".nav-icon.fas.fa-book").click();
    cy.get(".nav-icon.far.fa-dot-circle").eq(0).click({force: true});
    cy.wait(3000);
});

describe('Test Case B', () => {
    it('Add Product test case', () => {
        cy.contains("Add new").click();
        cy.get("#Name").type("Laptop123");
        cy.screenshot({capture:"runner"});
        cy.get(".select2-search.select2-search--inline").eq(0).type("Computers"+"{enter}");
        cy.get("#Price").clear().type("3000");
        cy.get("[name='save']").click();
            
        //Assertion
        cy.contains("The new product has been added successfully.").should("be.visible");
    });
});