/// <reference types = "cypress" />


describe("task1",()=>{

    it("selectors",()=>{
        cy.visit("https://www.telerik.com/support/demos");
        //cy.get(".u-s-mb0");
        cy.get("h1").contains("Demos");
        cy.get('[href="#testing"]');
        cy.get("#conversational-ui");
        cy.get("li.TK-Footer-List").eq(1).find("li.TK-Footer-List-item a").eq(4);
    });
});