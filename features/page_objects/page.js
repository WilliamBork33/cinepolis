export class Page {

    constructor() {
        this.url = 'http://www.cinepolis.com/';
    }

    open(path) {
        browser.url(this.url);
    }

}
