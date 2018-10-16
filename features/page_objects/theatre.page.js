import { Page } from './page';

class TheatrePage extends Page {
    /* 
    super() {
        constructor() {
        this.url = 'http://www.cinepolis.com/cartelera/san-pedro/cinepolis-san-pedro';
        this.timeSelector = 'time.btn.btnhorario.ng-scope'
        }

    }
 */

        // Method to Open Browser to Desired Page
        open() {
            browser.url('http://www.cinepolis.com/cartelera/san-pedro/cinepolis-san-pedro');
        }


        // Method to Capture All Movie Times into an Array & Print to Console
        movieTimes() {
            let times = browser.elements('time.btn.btnhorario.ng-scope');
            let timesArray = []
            
            times.value.forEach(element => {
                if (browser.elementIdDisplayed(element.ELEMENT).value === true) {
                    timesArray.push(browser.elementIdText(element.ELEMENT).value);
                }
            });

            console.log(timesArray)

        }


        // Method to Capture All Movie Titles into an Array & Print to Console
        movieTitles() {
            let movie = browser.elements('.datalayer-movie.ng-binding');
            let movieArray = []
            
            movie.value.forEach(element => {
                if (browser.elementIdDisplayed(element.ELEMENT).value === true) {
                    movieArray.push(browser.elementIdText(element.ELEMENT).value);
                }
            });

            console.log(movieArray)

        }
     

        // Method to Cycle and Click Through Each Individual Movie Page
        clickThrough() {
            let movie = browser.elements('.datalayer-movie.ng-binding');
            movie.value.forEach(function (element) {
                element.click()
                browser.back();
            });
        }

        
        // Method to Capture Individual Movie Times From Individual Pages into an Array & Print to Console
        singleMovie() {
            console.log("singleMovie")
        }


         // Method to Compare Times Between Individual Pages and Theatre Page
        compareTimes() {
            console.log("compareTimes")
        }

    }

export default new TheatrePage();
