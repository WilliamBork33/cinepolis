import { Page } from './page';

class HomePage extends Page {

    super() {
        constructor(url, citySelector, theatreSelector); {
            this.url = 'http://www.cinepolis.com';
            this.citySelector = '#cmbCiudades';
            this.theatreSelector = '#cmbComplejos';
        }
    }

    
        get city()          { return browser.element('#cmbCiudades'); }
        get theatre()       { return browser.element('#cmbComplejos'); }
        get verCartelera()  { return browser.element('.btn.btnEnviar.btnVerCartelera'); }


        // Method to Open Browser to Desired Page
        open() {
            browser.url(this.url);
        }


        // Method to Select City
        selectCity(){
            browser.click('#cmbCiudades');
            browser.click(`#cmbCiudades > option:nth-child(107)`);

            //browser.pause(6000);
            /* 
            let annoyingBanner = browser.isExisting('#takeover-close');

            if (annoyingBanner == true) {
                browser.click('#takeover-close')
                browser.waitUntil(annoyingBanner == false, 7000)
                browser.click('#cmbCiudades');
                browser.click(`#cmbCiudades > option:nth-child(107)`);
            }

            else {
                browser.click('#cmbCiudades');
                browser.click(`#cmbCiudades > option:nth-child(107)`); 
            } */
            
        }


        // Method to Select Theatre
        selectTheatre(){
            browser.click('#cmbComplejos')
            browser.click('#cmbComplejos > option:nth-child(2)');
        }

        
        // This Method Can Be Removed Due to Site Design Redundancy
        verCartelera(){
            browser.click('.btn.btnEnviar.btnVerCartelera')
        }
        
}
 
export default new HomePage();
