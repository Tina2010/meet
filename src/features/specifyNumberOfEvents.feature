Feature: SPECIFY NUMBER OF EVENTS

Scenario: When a user hasn’t specified a number, 32 is the default number.
Given A user views the list of events.
When no number was set manually,
Then the default number of events on one page should be 32.

Scenario: Users can change the number of events they want to see.
Given A user views the list of events.
When the user sets a number of element for one page manually,
Then the amount of elements of the list of events should change accordingly.