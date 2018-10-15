import { Page } from './page';

class HomePage extends Page {
   /*  constructor() {
        this.url = 'http://www.cinepolis.com/';
    } */

        // Method to Set URL to Cars Search Page
        open() {
            browser.url('http://www.cinepolis.com/');
        }



/* 
        constructor(URL, citySelector, theatreSelector, verCarteleraSelector) {
            this.URL = 'http://www.cinepolis.com';
            this.citySelector = '#cmbCiudades';
            this.theatreSelector = '#cmbComplejos';
            this.verCarteleraSelector = '.btn.btnEnviar.btnVerCartelera'
        }
         */


        get city()  { return browser.element('#cmbCiudades'); }
        get theatre()  { return browser.element('#cmbComplejos'); }
        get verCartelera()  { return browser.element('.btn.btnEnviar.btnVerCartelera'); }



        selectCity(){
            browser.click('#cmbCiudades')
            browser.click(`//*[@id="cmbCiudades"]/option[107]`);

        }

        selectTheatre(){
            browser.click('#cmbComplejos')
            browser.click(`//*[@id="cmbComplejos"]/option[2]`);
        }

        verCartelera(){
            browser.click('.btn.btnEnviar.btnVerCartelera')
        }

        
}
 
export default new HomePage();




/* 
// Class for all the action that happens on Cinepolis Home Page
export class HomePageAction {
    constructor(URL, citySelector, theatreSelector, verCarteleraSelector) {
        this.URL = 'http://www.cinepolis.com';
        this.citySelector = '#cmbCiudades';
        this.theatreSelector = '#cmbComplejos';
        this.verCarteleraSelector = '.btn.btnEnviar.btnVerCartelera'
    }

    // Method Selects the Cinepolis Home Page
    setURL() {
        browser.url(this.URL);
    }

    // Method Selects the Desired City
    selectCity() {
        //browser.url(this.URL);
        browser.click(this.citySelector);
        console.log("City Field Opened")
        let city = browser.selectByVisibleText(this.citySelector, `San Pedro`);
        console.log(city)
    }

    // Method Selects the Desired Theatre
    selectTheatre() {
        browser.click( this.theatreSelector);
        console.log("Theatre Field Opened")
        let theatre = browser.selectByVisibleText(this.theatreSelector, `Cinépolis San Pedro`);
        console.log(theatre)
    }

    // Method Clicks Ver Cartelera
    verCartelera() {
        browser.click(this.verCarteleraSelector);
        console.log("Ver Cartelera Clicked")
    }
}
 */