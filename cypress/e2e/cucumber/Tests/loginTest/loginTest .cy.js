import { Given, Then, When } from "cypress-cucumber-preprocessor/steps"

Given("The user navigate to Sign in page in magento website",()=>{
    cy.visit("/customer/account/login");
});

When("The user type email in email input field",()=>{
    cy.get("#email").type("CypressUser@gmail.com");
});

When("The user type password in password input field",()=>{
    cy.get("#pass").type("test@123")
});

When("The user click on sign in button",()=>{
    cy.get("#send2").click();
});

Then("The user will redirected to My account page",()=>{
    cy.get(".page-title").should("contain","My Account")
});