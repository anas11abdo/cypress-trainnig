@smokeTest
Feature: Submit review functionality

    Scenario: Validate that the user can submit review for any product
        Given The user navigate to magento website
        And Search for product
        And Choose a product from results page
        When Open Reviews tab
        And Fill the rating
        And Type Nickname in Nickname input field
        And Type Summary in Summary input field
        And Type Review in Review input field
        And Click on submit review in button
        Then The Review will be submitted successfully