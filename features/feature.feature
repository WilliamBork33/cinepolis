@watch
Feature: Test
    Scenario: Cinepolis
        Given we're in Cinepolis
        When we click `//*[@id="cmbCiudades"]`
        Then we click `//*[@id="cmbCiudades"]/option[107]`
        Then click `//*[@id="cmbComplejos"]`
        Then we click San Pedro `//*[@id="cmbComplejos"]/option[2]`
        Then we click on the slider `//*[@id="slider-range"]/span[10]`
        Then confirm the times display correctly `row tituloPelicula ng-scope`
        
        When we click to view the movie `datalayer-movie ng-binding`