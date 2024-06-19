/// <reference types = "cypress" />


describe("lesson3",()=>{

    it("containe command",()=>{
        cy.visit("/");
        cy.get("ul.footer").find("li").contains("Advanced Search");
        cy.contains("Hot Sellers");
        cy.contains("As low as");
        cy.get(".price-label");
        cy.contains("span","Shop New Yoga");
    });

    it("possition in list command",()=>{
        cy.visit("/");
        cy.get(".block-promo-wrapper").find("a").last();
        cy.get(".block-promo-wrapper a").first();
        cy.get(".block-promo-wrapper a").eq(2);
        cy.get(".block-promo-wrapper a").first().next();
        cy.get(".block-promo-wrapper").find("a").last().prev();
        cy.contains("span","Shop New Yoga").prev().prev();
    });

    
    it.only("filter command",()=>{
        cy.visit("/");
        cy.get("li"); // 44 elemnet
        cy.get("li").filter(".authorization-link");
    });
});