const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    specPattern:"**/*.{feature,cy.js}",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    baseUrl:"https://magento.softwaretestingboard.com", // first confegration بعطي ال يو ار ال الاساسي و بقدر اكمل من مثل ما في بالكود 
    //viewportHeight : 500,
    //viewportWidth : 500   // second confg للتحكم ف الطول و العرض للتحكم بالريسبونسف و للموبايل مثلا 
    watchForFileChanges : false, //شوف التغيرات على الملف واعكسها على البروزر
    //screenshotOnRunFailure:false,
    trashAssetsBeforeRuns:true,
    video:true,
    trashAssetsBeforeRuns:true,
    videoCompression:20,
  },
  
});
