
//TO DO: ACTIVATE THE REST OF THE FILTER SETTINGS


import theatrePage from '../page_objects/theatre.page';
//import pagePage from '../page_objects/page';

module.exports =  function() {


  this.Given(/^the user is on Cinepolis Theatre Page$/, function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("asdf")
    theatrePage.open()
  });


  this.When(/^the user applies desired filters$/, function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("asdf")
  });

  this.Then(/^the desired movie results are shown$/, function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("asdf")
  });



}
