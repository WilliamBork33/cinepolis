// Import Classes
import {HomePageAction, TheatrePageAction } from './pageObject.js';

module.exports = function () {

    // When at Cinepolis Home Page
    this.Given(/^we are in Cinepolis$/, function () {
        // Write code here that turns the phrase above into concrete actions

        let setURLHome = new HomePageAction();
        setURLHome.setURL();
        console.log("Given Cinepolis");
    });

    this.Given(/^we are on the San Pedro Theatre page$/, function () {
        // Write code here that turns the phrase above into concrete actions

        let setURLTheatre = new TheatrePageAction();
        setURLTheatre.setURL();
        console.log("Given Cinepolis");
    });
}

