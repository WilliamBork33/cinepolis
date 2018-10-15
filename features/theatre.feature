@theatre
Feature: Theatre Page

    A user should be able to view movies at their theatre and apply filters

    Scenario: A user filters for and selects their movies
        Given the user is on Cinepolis Theatre Page
        When the user applies desired filters
        Then the desired movie results are shown