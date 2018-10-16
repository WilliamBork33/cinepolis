
import theatrePage from '../page_objects/theatre.page';

module.exports =  function() {

  this.Given(/^the user is on Cinepolis Theatre Page$/, function () {
    theatrePage.open()
  });


  this.When(/^the user applies desired filters$/, function () {
    theatrePage.movieTimes()
    theatrePage.movieTitles()
    theatrePage.clickThrough()
    theatrePage.singleMovie()
  });

  this.Then(/^the desired movie results are shown$/, function () {
    theatrePage.compareTimesMovie()
  });

}
