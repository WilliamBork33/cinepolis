import { Page } from './page';

class TheatrePage extends Page {
    //super() {
        //constructor() {
        //this.url = 'http://www.cinepolis.com/cartelera/san-pedro/cinepolis-san-pedro';
        //this.box1Selector = '#slider-range > a:nth-child(2)';
        //this.box2Selector = '#slider-range > a:nth-child(3)';
        //this.getHours = '.btn.btnhorario.ng-scope';
        //this.timeSelector = 'time.btn.btnhorario.ng-scope'
        //this.fff = "fff"
        //}

    //}

        open() {
            browser.url('http://www.cinepolis.com/cartelera/san-pedro/cinepolis-san-pedro');
        }




        get tabBar()      { return browser.elements('.profile-tabs > li'); }
        get bookings()    { return this.tabBar.value[0]; }


        get a()          { return browser.element('#carteleraCiudad > section.col7.listaCarteleraHorario > div.cinepolis-san-pedro.divComplejo > div > a'); }
        get bookings()    { return this.a.value[0]; }
     //#carteleraCiudad > section.col7.listaCarteleraHorario > div.cinepolis-san-pedro.divComplejo > div > a
     //#carteleraCiudad > section.col7.listaCarteleraHorario > div.cinepolis-san-pedro.divComplejo > div > article:nth-child(2)
     get timeSelector() { return browser.elements('time.btn.btnhorario.ng-scope'); }




        movieTimes() {
            let times = browser.elements('time.btn.btnhorario.ng-scope');
            let timesArray = []
            
            times.value.forEach(element => {

                if (browser.elementIdDisplayed(element.ELEMENT).value === true) {
                    timesArray.push(browser.elementIdText(element.ELEMENT).value);
                    console.log(browser.elementIdDisplayed(element.ELEMENT).value)
                }
            });

            console.log(timesArray)
            //return timesArray
        }

        movieTitles() {
            let movie = browser.elements('.datalayer-movie.ng-binding');
            let movieArray = []
            
            movie.value.forEach(element => {
                
                if (browser.elementIdDisplayed(element.ELEMENT).value === true) {
                    movieArray.push(browser.elementIdText(element.ELEMENT).value);
                    console.log(browser.elementIdDisplayed(element.ELEMENT).value)
                }
            });

            console.log(movieArray)
            //return movieArray

        }
     

/* 
        it('should fetch menu links and visit each page', function () {
            links = $$('#menu a');
        
            links.forEach(function (link) {
                link.click();
            });
        });

 */
        test() {
            let movie = browser.elements('.datalayer-movie.ng-binding');
            movie.value.forEach(function (m) {

                //if (browser.elementIdDisplayed(element.ELEMENT).value === true) {
                    m.click()
                    browser.pause(1000);
                    browser.back();
                    browser.pause(1000);
                    console.log('asdf')
                //}
            });

        }





    }

export default new TheatrePage();
