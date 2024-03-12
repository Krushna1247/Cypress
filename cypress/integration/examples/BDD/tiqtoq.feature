Feature: TiqToq validation

    application Sanity
    @Sanity
    Scenario: TiqToq HomePage validation
    Given I open Tiqtoq Page
    When I am verifying the tabs on that page
    Then I am verifying the links of that page

   |username|password|
   |admin|admin123|
