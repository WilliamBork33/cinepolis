@home
Feature: Home Page

    A user should be able to select their location and theatre preference

    Scenario: A user selects their theatre city and location
        Given the user is on Cinepolis Home Page
        When the user selects their location and theatre preference
        Then the desired location and theatre movie results are shown
