Feature: SHOW/HIDE AN EVENT’S DETAILS


Scenario: An event element is collapsed by default.
Given The list of events has been loaded completely.
When the list was just loaded,
Then all event elements are collapsed.

Scenario: User can expand an event to see its details.
Given A user views the list of events and needs more information.
When the user clicks on the details-button,
Then the event element should expand to show all details.

Scenario: User can collapse an event to hide its details.
Given A user expanded an event element.
When the user clicks on the details-button of the previously expanded event element,
Then the event element should collapse into its original state.
