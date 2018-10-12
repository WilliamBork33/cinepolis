import { /*CinepolisHomePage, PageSanPedro,*/ HomePageAction, TheatrePageAction } from './pageObject.js';

module.exports = function () {

    // Calls Class and Methods for Home Page
    this.Then(/^we select the city and theatre on home page$/, function (arg1) {
        // Method Selects City
        let selectCity = new HomePageAction();
        selectCity.selectCity();
        
        // Method Selects Theatre
        let selectTheatre = new HomePageAction();
        selectTheatre.selectTheatre();

        // Method Selects Ver Cartelera Button (Actually Don't Need to Press to Proceed)
        let verCartelera = new HomePageAction();
        verCartelera.verCartelera();

      });


      //////////////^^^^^^^^^^^ GET SCRIPT TO END INSTEAD OF TIME OUT!!!!!^^^^^^^^


      this.Then(/^we select the time filter$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
      });


      

     /*  this.Then(/^we select the time filter$/, function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        //let sanPedro = new TheatrePageAction();
        //sanPedro.selectHour(arg1, arg2);
        // Selects Ver Cartelera Button (Actually Don't Need to Press to Proceed)
        let selectCity = new HomePageAction();
        selectCity.selectCity();;
        console.log("asf")
    });

 */

}

