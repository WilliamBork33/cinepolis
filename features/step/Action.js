module.exports = function () {


    // CLICK CITY SELECTION FIELD
      this.When(/^we click `\/\/\*\[@id="([^"]*)"\]`$/, function (arg1) {
        browser.click(`//*[@id="cmbCiudades"]`);
        console.log("City Field Opened")
      });

    // CLICK ON "SAN PEDRO" CITY
      this.Then(/^we click `\/\/\*\[@id="([^"]*)"\]\/option\[(\d+)\]`$/, function (arg1, arg2) {
        browser.click(`//*[@id="cmbCiudades"]/option[107]`);
        console.log("City Selected: SP")
      });

    // CLICK ON THEATRE SELECTION FIELD
      this.Then(/^click `\/\/\*\[@id="([^"]*)"\]`$/, function (arg1) {
        browser.click(`//*[@id="cmbComplejos"]`);
        console.log("Theater Field Opened")
      });

    // CLICK ON "SAN PEDRO" THEATRE
      this.Then(/^we click San Pedro `\/\/\*\[@id="([^"]*)"\]\/option\[(\d+)\]`$/, function (arg1, arg2) {
        browser.click(`//*[@id="cmbComplejos"]/option[2]`);
        console.log("Theatre Selected: SP")
      });

    // MOVE SLIDER RANGE
      this.Then(/^we click on the slider `\/\/\*\[@id="([^"]*)"\]\/span\[(\d+)\]`$/, function (arg1, arg2) {
        browser.click(`//*[@id="slider-range"]/span[10]`)
        console.log("Slider Moved")
      });

      // PRINT OUT THE MOVIE TEXT DETAILS TO CONSOLE
      this.Then(/^confirm the times display correctly `row tituloPelicula ng\-scope`$/, function () {

            console.log("Movie Data Confirmed")
            let movie = browser.getText(`#carteleraCiudad > section.col7.listaCarteleraHorario > div.cinepolis-san-pedro.divComplejo > div`);
            console.log(movie)
            let movieArray = []
            movieArray.push(movie)
            //console.log(movieArray)


      });


    // CLICK ON MOVIE TO SEE MOVIE PAGE
      this.When(/^we click to view the movie `datalayer\-movie ng\-binding`$/, function () {
       
        browser.click(`//*[@id="27991-cinepolis-san-pedro-el-depredador"]`)

        //browser.elementIdClick(`#carteleraCiudad > section.col7.listaCarteleraHorario > div.cinepolis-san-pedro.divComplejo > div > article:nth-child(2) > figure > a > div`);

        //if #cinepolis-san-pedro-27991-el-depredador > header > h3
      });







}








/* 

let i;
        

for (i=0; i < 3; i++) {
    let movie = browser.getText(`#carteleraCiudad > section.col7.listaCarteleraHorario > div.cinepolis-san-pedro.divComplejo > div`);
    //console.log(movie)
    let movieArray = []
    movieArray.push(movie)
    console.log(movieArray)

} */