
import theatrePage from '../page_objects/theatre.page';

module.exports =  function() {


  this.Given(/^the user is on Cinepolis Theatre Page$/, function () {
    // Write code here that turns the phrase above into concrete actions
    theatrePage.open()
  });


  this.When(/^the user applies desired filters$/, function () {
    // Write code here that turns the phrase above into concrete actions
    

    //Capture the movie times in an array.
    theatrePage.movieTimes()
    theatrePage.movieTitles()
    theatrePage.test()


    // Enter a movie page.
    // Evaluate if the times on both the theater landing page and the movie page are the same

    //theatrePage.a.value()
    //heatrePage.getFuncTime()


  });

  this.Then(/^the desired movie results are shown$/, function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("asdf")
  });



}
