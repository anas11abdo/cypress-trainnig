const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
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
