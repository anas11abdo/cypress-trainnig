import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const message = "You submitted your review for moderation.";

Given("The user navigate to magento website",()=>{
    cy.visit("/");
});

Given("Search for product",()=>{
    cy.get("#search").type("shirt"+"{enter}");
});

Given("Choose a product from results page",()=>{
    cy.contains("a","Circe Hooded Ice Fleece").click();
});

When("Open Reviews tab",()=>{
    cy.get("#tab-label-reviews-title").click();
    cy.wait(1000)
});

When("Fill the rating",()=>{
    cy.get("#Rating_1_label").click();
});

When("Type Nickname in Nickname input field",()=>{
    cy.get("#nickname_field").clear().type("Razan")
});

When("Type Summary in Summary input field",()=>{
    cy.get("#summary_field").clear().type("This shirt is very good")
});

When("Type Review in Review input field",()=>{
    cy.get("#review_field").clear().type("Test Test Test")
});

When("Click on submit review in button",()=>{
    cy.wait(1000)
    cy.contains("button","Submit Review").click();
});

Then("The Review will be submitted successfully",()=>{
    cy.wait(3000)
    cy.get("[role=alert]").should("contain",message)
});