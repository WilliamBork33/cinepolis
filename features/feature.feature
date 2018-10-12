@watch
Feature: Test1
    Scenario: Cinepolis
        Given we are in Cinepolis
        Then we select the city and theatre on home page
        
        Given we are on the San Pedro Theatre page
        Then we select the time filter

        #When we select "San Pedro"
        #Then we click VER CARTELERA
        #Given we were correctly redirected to the schedule of Cinepolis San Pedro
        #When we select an hour filter between "11:00" and "19:00"
        #         # up to here both tests are alike
        #Then all movies should only have  pertinent schedules between "11:00" and "19:00"
