Feature: Search functionality

  @smoke
  Scenario Outline: : Search the buy car with model
    Given I am on homepage
    When I mouse hover on “buy+sell” tab
    And I click ‘Search Cars’ link
    Then I navigate to ‘new and used car search’ page
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on Find My Next Car tab
    Then I should see the make "<make>" in results

    Examples:
      | make   | model     | location     | price   |
      | Jeep   | Any Model | Any Location | $30,000 |
      | Audi   | Any Model | Any Location | $30,000 |
      | Toyota | Avensis   | NSW - All    | $20,000 |
      | Nissan | Qashqai   | Any Location | $15,000 |
      | BMW    | Any Model | ACT - All    | $15,000 |

  @sanity
  Scenario Outline: Search the used car with model
    Given I am on homepage
    When I mouse hover on “buy+sell” tab
    And I click ‘Used’ link
    Then I navigate to ‘Used Cars For Sale’ page
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on Find My Next Car tab
    Then I should see the make "<make>" in results
    Examples:
      | make   | model     | location     | price   |
      | Jeep   | Cherokee  | ACT-All      | $20,000 |
      | BMW    | Any Model | ACT - All    | $15,000 |
      | Audi   | Any Model | Any Location | $25,000 |
      | Toyota | Avensis   | NSW - All    | $20,000 |
      | Nissan | Qashqai   | Any Location | $15,000 |

