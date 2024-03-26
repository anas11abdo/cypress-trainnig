/// <reference types = "cypress" />


describe("task1",()=>{

    it("solution",()=>{
        cy.visit("https://demo.productionready.io/#/register");
        cy.contains(".navbar-brand","conduit"); // class ,text
        cy.contains("a.nav-link","Home"); // element.class , text
        cy.get(".nav-link.active"); // class.class
        cy.contains("h1.text-xs-center.ng-binding","Sign up"); // element.class.class , text
        cy.contains("a","Have an account?"); // element , text
        cy.get("[placeholder='Username']"); // attrebute = value
        cy.get("[type='email']"); // attrebute2 = value
        cy.get("[placeholder~='Password']"); // attrebute ~= value
        cy.get("button"); //element
        cy.get("a.logo-font.ng-binding"); //element , class , class
        cy.get("span"); // element
    });
});
