import homePage from '../page_objects/home.page';

module.exports =  function() {

  this.Given(/^the user is on Cinepolis Home Page$/, function () {
    homePage.open()
  });


  this.When(/^the user selects their location and theatre preference$/, function () {
    homePage.selectCity()
    homePage.selectTheatre()
  });


  this.Then(/^the desired location and theatre movie results are shown$/, function () {
    console.log("Location & Theatre Selected")
  });

}
