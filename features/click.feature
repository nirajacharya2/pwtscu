Feature: Random
    As a user
    I want to click a button
    
    Scenario: Clicking button
        Given I view 'file:///home/niraj/Desktop/html/index.html'
        When I click click button
        Then I expect clicked to be shown