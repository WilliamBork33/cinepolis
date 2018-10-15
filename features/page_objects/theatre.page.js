import { Page } from './page';

class TheatrePage extends Page {
   /*  constructor() {
        this.url = 'http://www.cinepolis.com/';
    } */

        // Method to Set URL to Cars Search Page
        open() {
            browser.url('http://www.cinepolis.com/cartelera/san-pedro/cinepolis-san-pedro');
        }
}

export default new TheatrePage();
