// Import Classes
import {HomePageAction, TheatrePageAction } from './pageObject.js';

module.exports = function () {

    // When at Cinepolis Home Page
    this.Given(/^we are in Cinepolis$/, function () {
        // Write code here that turns the phrase above into concrete actions
        browser.url('http://www.cinepolis.com');
        console.log("Given Cinepolis");
/* 
        let HomePageAction = new HomePageAction();
        HomePageAction.redirect();
 */

    });

    this.Given(/^we are on the San Pedro Theatre page$/, function () {
        // Write code here that turns the phrase above into concrete actions
        browser.url('http://www.cinepolis.com/cartelera/san-pedro/');
        console.log("Given San Pedro Theatre");
    });
}

