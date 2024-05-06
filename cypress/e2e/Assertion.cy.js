/// <reference types="cypress" />
describe('Assertions', () => {
    it('Verify that the elements are visible in header', () => {
        cy.visit("/"); // pre-condition (Given)

        // action (When) 

        // assertions (Then)
        cy.get(".logo").should("be.visible");
        cy.get("#search").should("be.visible");
        cy.get(".showcart").should("be.visible");
        cy.get(".counter").first().should("not.be.visible");
        cy.get(".counter").first().should("be.hidden");
    });

    it('css', () => {
        cy.visit("/");
        cy.get(".copyright") // testing the footer css
        .should("have.css","color","rgb(255, 255, 255)") //تأكدت من ال proparity color
        .and("have.css","background-color","rgb(110, 113, 110)") //تأكدت من ال proparity backgroundcolor
        .and("have.css","text-align","center")

        // cy.get(".copyright").should("have.css","background-color","rgb(110, 113, 110)");
        // cy.get(".copyright").should("have.css","text-align","center");
    });

    it('attr-class', () => {
       cy.visit("/")
       cy.get(".showcart").should("have.attr","href") // testing the showcart attrebuit
       cy.get(".showcart").should("have.attr", "data-bind")
       cy.contains("span","Shop New Yoga").should("have.class","more")
    });

    it('', () => {
        cy.visit("/");
        cy.get('.counter').first().should("exist");
        cy.get(".info").first().should("contain","New Luma Yoga");
        cy.get(".info").first().should("have.text","New Luma Yoga Collection")
        cy.get(".action.search").should("have.prop","disabled");
        cy.get(".action.search").should("be.disabled")
        cy.get("#search").should("be.empty")
        cy.visit("/hero-hoodie.html");
        cy.get("#qty").should("have.value",1)

    });

    it('Verify that the search button should be enabled after typing in search field', () => {
        cy.visit("/");
        cy.get(".action.search").should("be.disabled")

        cy.get("#search").type("bag") // it will be focused 
        cy.get("#search").should("have.focus")
        cy.get(".action.search").should("be.enabled")
    });

    it('', () => {
        cy.visit("http://127.0.0.1:5500/cypress/actionsLesson.html");

        cy.get("#country").select("Jordan")
        cy.get("#Banana").check();

        cy.get("[value=jordan_country]").should("be.selected");
        cy.get("#Banana").should("be.checked")
    });

});