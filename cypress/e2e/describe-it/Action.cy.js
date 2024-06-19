/// <reference types="cypress" />
describe('Actions', () => {

    it('Click', () => {
        cy.visit("http://127.0.0.1:5500/cypress/actionsLesson.html");
        cy.get("#btn1").click();
        cy.get("#btn2").click("left");
        cy.get("#btn0").click({force:true});
        cy.get(".btn").click({multiple:true , force:true})
    });

    it('Type', () => {
        cy.visit("http://127.0.0.1:5500/cypress/actionsLesson.html");
        cy.get("input[placeholder='Type your name']").clear().type("Cypress{leftArrow}{leftArrow}",{delay:500});
        cy.get("input[placeholder='Type your name']").clear().type("Cypress" + "{leftArrow}{leftArrow}",{delay:500});
        cy.get("input[placeholder='Type your name']").clear().type("Cypress" + "{home}",{delay:500});
        cy.get("[type=number]").type(4);
        cy.get("[name=input_0]").type("Hello",{force:true});

    });
    
    it('Enter-seq', () => {
        cy.visit("/");
        cy.get("#search").type("bag"+"{enter}");
        cy.get("#search").type("bag{enter}");

    });

    it('Select', () => {
        cy.visit("http://127.0.0.1:5500/cypress/actionsLesson.html");
        // select by text 
        cy.get("#country").select("Jordan");
        // select by value 
        cy.get("#country").select("egypt_country")
        // select by index 
        cy.get("#country").select(0)
    });

    it('check-uncheck', () => {
        cy.visit("http://127.0.0.1:5500/cypress/actionsLesson.html");
        cy.get("#Banana").check();
        cy.get("[name=snack3]").check();
        cy.get(".checkboxes input").check() 
        cy.get(".checkboxes input").uncheck() 
        cy.get(".checkboxes input").check(['ap','Nuts','or']) 
        cy.get("#checkMe").check({force:true})
        cy.get("#Banana").uncheck();

        // radio 
        cy.get("#developer").check()
        cy.get("[name=job]").check()
    });

    it('dbclick', () => {
        cy.visit("http://127.0.0.1:5500/cypress/actionsLesson.html");
        cy.get("#dbClick").dblclick();
        cy.get("#dbClick").dblclick("left");
    });

    it('focus-blur', () => {
        cy.visit("http://127.0.0.1:5500/cypress/actionsLesson.html");
        cy.get("#myTextField").focus(); 
        cy.get("#myTextField").focus().blur()
    });

    it('trigger', () => {
        cy.visit("http://127.0.0.1:5500/cypress/actionsLesson.html");
        cy.get("#trigger_btn").trigger("mouseover");
        cy.get("#trigger_btn").trigger("mouseleave");
        // cy.get("#btn1").click();
        cy.get("#btn1").trigger("mousedown");
    });
});