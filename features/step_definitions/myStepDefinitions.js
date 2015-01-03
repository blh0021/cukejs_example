var myStepDefinitionsWrapper = function () {
  this.World = require("../support/world.js").World; // overwrite default World constructor

  this.Given(/^I am on Ben Harrington$/, function (callback) {
    this.visit('http://www.benharrington.com', callback);
  });

  this.When(/^I click on Blog$/, function(callback) {
    this.browser.clickLink("Blog", callback);
  });
  this.Then(/^I should The Meat and Potatoes$/, function (callback) {
    var h2 = this.browser.text("h2");
    if (h2 == "The Meat and Potatoes") {
      callback();
    } else {
      callback.fail(new Error("Expected 'The Meat and Potatoes'"));
    }
  });
};

module.exports = myStepDefinitionsWrapper;

