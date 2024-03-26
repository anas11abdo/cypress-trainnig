/// <reference types = "cypress" />


describe("task1",()=>{

    it("solution",()=>{
        cy.visit("https://demo.productionready.io/#/register");
        cy.get(".navbar-brand").contains("conduit");
        cy.get("li").filter(".nav-item").first();
        cy.get(".nav-link.active").eq(0);
        cy.get(".text-xs-center.ng-binding").contains("h1","Sign up");
        cy.get(".ng-scope").find("p").find("a").first();
        cy.get("[placeholder='Username']");
        cy.get("[type='email']");
        cy.get(".form-group").next().next().find("[placeholder='Password']");
        cy.get("button");
        cy.get("a.logo-font.ng-binding");
        cy.get("span");
    });
});