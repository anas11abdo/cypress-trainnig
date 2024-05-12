/// <reference types="cypress" />
describe('check create new account form in maginto website', () => {

    beforeEach(()=>{
        // before execution each test case 
        cy.visit("/customer/account/create/");
    });


    it('verify that all fields are visible in create new account form', () => {
        // pre-condition
        //cy.visit("/customer/account/create/"); 
        // assertions (Then)
        cy.get(".page-title").should("be.visible");
        cy.contains("span","Personal Information").should("be.visible");
        cy.contains("span","Sign-in Information").should("be.visible");
        cy.get("[for=firstname]").should("be.visible");
        cy.get("[for=lastname]").should("be.visible");
        cy.get("[for=email_address]").should("be.visible");
        cy.get("[for=password]").should("be.visible");
        cy.get("[for=password-confirmation]").should("be.visible");

        cy.get("#password-strength-meter").should("be.visible")
        .and("contain","Password Strength")

        cy.get("button").contains("Create an Account").should("be.visible");

        cy.get("#firstname").should("be.visible");
        cy.get("#lastname").should("be.visible");
        cy.get("#email_address").should("be.visible");
        cy.get("#password").should("be.visible");
        cy.get("#password-confirmation").should("be.visible");

        cy.get(".fieldset.create.account").should("have.attr","data-hasrequired","* Required Fields")
    });

    it('Validate that the user can create a new account', () => {
        
        //  Math.random() // 0-8  ,  0.1 , 0.43  
        const emailNum = Math.floor(Math.random()*1000); // 0 - 999

        // Actions
        cy.get("#firstname").type("Anas")
        cy.get("#lastname").type("Abdo")
        cy.get("#email_address").type("Anasabdo"+emailNum+"@gmail.com")

        // Anasabdo873@gmail.com 
        // Anasabdo543@gmail.com 
        // Anasabdo10@gmail.com 

        cy.get("#password").type("test@123")
        cy.get("#password-confirmation").type("test@123")
        cy.contains("button","Create an Account").click();

        //Assertions |
        cy.wait(1000)
        cy.get("[role=alert]").should("be.visible").and("contain","Thank you for registering with Main Website Store")
        cy.get(".page-title").should("contain","My Account")
        cy.get(".logged-in").first().should("contain","Welcome, Anas Abdo!")
    });

});