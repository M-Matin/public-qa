Feature: E2E test with Cucumber for App

  I want to open a Madison Website


  Scenario: Opens the app UI
    Given Opens the app UI
    Then Check the Tile

  Scenario: Second Debit Transaction Amount Confirmation
    Given Access second debit transaction
    Then Compare with user data entry

  Scenario: Transaction Date Confirmation
    Given Access second debit transaction date
    Then Confirm date is equal todays date



