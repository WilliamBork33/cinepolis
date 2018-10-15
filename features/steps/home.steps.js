
//TO DO: ACTIVATE THE REST OF THE FILTER SETTINGS


import homePage from '../page_objects/home.page';
//import pagePage from '../page_objects/page';

module.exports =  function() {

  this.Given(/^the user is on Cinepolis Home Page$/, function () {
    // Write code here that turns the phrase above into concrete actions
    homePage.open()
    homePage.selectCity()
    homePage.selectTheatre()
    //homePage.verCartelera()

  });


  this.When(/^the user selects their location and theatre preference$/, function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("asdf")
  });


  this.Then(/^the desired location and theatre movie results are shown$/, function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("asdf")
  });


}
