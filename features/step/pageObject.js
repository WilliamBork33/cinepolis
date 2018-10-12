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


// Class for all the action that happens on San Pedro Theatre Page
export class TheatrePageAction {
    constructor(URL, sliderLeftSelector, sliderRightSelector, sliderRangeSelector, timeSelector) {
        this.URL = 'http://www.cinepolis.com/cartelera/san-pedro/';
        this.sliderRangeSelector = `#slider-range > span.ui-slider-pip.ui-slider-pip-`
        this.sliderRightSelector = '#slider-range > a:nth-child(3)'
        this.sliderLeftSelector = '#slider-range > a:nth-child(2)'
        this.timeSelector = 'time.btn.btnhorario.ng-scope'
    }

    timeStamp(hour) {
        switch (hour) {
            case '00:00':
                return '0';
                break;
            case '10:00':
                return '1';
                break;
            case '11:00':
                return '2';
                break;
            case '12:00':
                return '3';
                break;
            case '13:00':
                return '4';
                break;
            case '14:00':
                return '5';
                break;
            case '15:00':
                return '6';
                break;
            case '16:00':
                return '7';
                break;
            case '17:00':
                return '8';
                break;
            case '18:00':
                return '9';
                break;
            case '19:00':
                return '10';
                break;
            case '20:00':
                return '11'; 7
                break;
            case '21:00':
                return '12';
                break;
            case '22:00':
                return '13';
                break;
            case '23:00':
                return '14';
                break;
            case '24:00':
                return '15';
                break;
        }
    }

    selectHour(startHour, endHour) {
        let a = this.timeStamp(startHour);
        console.log(a)
        let b = this.timeStamp(endHour);
        console.log(b)
        let dragdrop = this.sliderRangeSelector + a;
        let dragdrop2 = this.sliderRangeSelector + b;
        browser.dragAndDrop(this.sliderLeftSelector, dragdrop);
        browser.dragAndDrop(this.sliderRightSelector, dragdrop2);
    }

    clickVerCartelera() {
        browser.click(this.verCarteleraSelector)
    }

    obtainSchedules() {
        let schedules = browser.elements(this.timeSelector);
        let arr = []
        schedules.value.forEach(element => {
            if (browser.elementIdDisplayed(element.ELEMENT).value === true) {
                arr.push(browser.elementIdText(element.ELEMENT).value);
            }

            //console.log(browser.elementIdDisplayed(element.ELEMENT).value)

        });
        console.log(arr)
        return arr
    }

}

