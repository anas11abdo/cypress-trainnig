/// <reference types = "cypress" />

describe("secnario",()=>{

    it("lesson2",()=>{
        cy.visit("/");
        cy.get(".authorization-link a").first().click();
        cy.get("#search").type("bag");
        cy.get(".showcart").click();
        cy.get(".nav-1 span").click();
    });
});