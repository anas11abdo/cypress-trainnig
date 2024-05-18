// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("logintomaginto",()=>{
    cy.visit("/customer/account/login/");
});

Cypress.Commands.add("Login",()=>{
    cy.visit("https://admin-demo.nopcommerce.com/");
    cy.get("#Email").clear().type("admin@yourstore.com");
    cy.get("#Password").clear().type("admin");
    cy.get("[type='submit']").click();
    cy.wait(2000);

    //Assertion
    cy.get(".content-header").should("contain","Dashboard")
});

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
  });