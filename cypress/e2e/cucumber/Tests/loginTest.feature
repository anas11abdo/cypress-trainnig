
@SomkeTest @login @TC-1234
Feature: login Functionality

    Scenario: Validate that the user can login using valid email and password
        Given The user navigate to Sign in page in magento website
        When The user type email in email input field
        And The user type password in password input field
        And The user click on sign in button
        Then The user will redirected to My account page
