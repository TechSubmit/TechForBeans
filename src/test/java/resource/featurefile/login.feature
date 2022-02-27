
Feature: Login functionality

  Scenario: As a User I should not login successfully with invalid credentials
    Given I am on the homepage
    When  I click on Login link
    Then  I enter valid user name "test@test.com"
    And   I enter invalid password "testingStuff"
    And   I click on login button
    Then  I should see error message display next to password field
