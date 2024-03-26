// describe - it
// BDD - gherkin language - Cucumber Give , When , Then
/// <reference types = "cypress" />

//const cypress = require("cypress");

describe("secnario",()=>{

    it("visit magento site test case name",()=>{
        cy.visit("/");
        //cy.visit("/what-is-new.html");
        //cy.visit("https://magento.softwaretestingboard.com/what-is-new.html");
        cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");
    }),
    // اذا عندي اكثر من test case
    // بستخدم ال it
    it.only("validate that the user can login to maginto site",()=>{ //only بتخلي السايبريس يشغل هاي التست كاس فقططططط
        // 1- open the website
        // 2- enter valid email
        // 3- enter valid password
        // 4- click on the login button
        //the user will redirected to my acount page هون بنعمل جواها اسيرشين للتحقق من الفنغشيناليتي
        //cypressUser@gmail.com
        //test@123
        cy.visit("/customer/account/login/"); 
        //عشان ادخل الايميل اول اي اشي بدي استعمل اشي اسمو selectors
        //بدخل على الويب سايت و بعمل انسبكت على ال ايليمانت الي بدي اياه  وبوخذ id or name or title
        //DOM :Document Object Model شجرة اوبجيكت بتقسم الويب سايت الى شجرة هيد بودي و ايليمنت
        // id ادق اشي و مستحيل يتكرر
        cy.get("#email").type("cypressUser@gmail.com");
        //id => #idname
        //class => .classname
        //atrebute => []
        cy.get("#pass").type("test@123");
        cy.get("[name='send']").click();
        // Assertion
        cy.get(".page-title").should("contain","My Account");
        cy.get("#search").type("Hi Anas");
    });
});