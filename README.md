## Project description:

In this project, I will create an app where you will preview upcoming events.

##  Endpoints:

  GET - https://b0vy91f8hf.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url

  GET - https://b0vy91f8hf.execute-api.eu-central-1.amazonaws.com/dev/api/token/{code}
  
  GET - https://b0vy91f8hf.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/{access_token}

### Task 1:
Convert all Features into user stories.
### Task 2: 
Convert all Features into scenarios.

FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS
Scenario 1: An event element is collapsed by default.
Scenario 2: User can expand an event to see its details.
Scenario 3: User can collapse an event to hide its details.

FEATURE 3: SPECIFY NUMBER OF EVENTS
Scenario 1: When a user hasn’t specified a number, 32 is the default number.
Scenario 2: Users can change the number of events they want to see.

FEATURE 4: USE THE APP WHEN OFFLINE
Scenario 1: Show cached data when there’s no internet connection.
Scenario 2: Show error when user changes the settings (city, time range).

FEATURE 5: DATA VISUALIZATION
Scenario 1: Show a chart with the number of upcoming events in each city.


#### Solution Task 1:

F2 / Sc 1:

As a user,
I should see a collapsed version of the events list,
So that I can preview more events in smaller detail on one page.

F 2 / Sc 2:

As a user,
I should be able to expand the details of an event,
So that I am able to view all necessary information.

F 2 / Sc 3:

As a user,
I should be able to collapse the previously expanded details of an event,
So that I can get back the space to preview more events.

F 3 / Sc 1:

As a user,
I shouldn't view more than 32 events per page per default,
So that I don't need to wait until all events have been loaded.

F 3 / Sc 2:

As a user,
I should be able to change the number of events displayed on one page,
So that I can see only the number of events I need on a page.

F 4 / Sc 1:

As a user,
I should be able to see all previously cached data without being online,
So that I don't need to rely on my internet connection.

F 4 / Sc 2:

As a user,
I should get an error, when I try to change the city or time range when I am offline,
So that I get the information, that this data can’t be changed, while I am offline.

F 5 / Sc 1:

As a user,
I should see a chart of upcoming events in each city,
So that I can get a fast overview of the events of one city.

____________

Given pattern from the exercise:

As a [role],
I should be able to [action]
So that [benefit]
____

#### Solution Task 2

F2 / Sc 1:

GIVEN: The list of events has been loaded completely.
WHEN: the list was just loaded,
THEN: all event elements are collapsed.

F 2 / Sc 2:

GIVEN: A user views the list of events  and needs more information.
WHEN: the user clicks on the details-button,
THEN: the event element should expand to show all details.

F 2 / Sc 3:

GIVEN: A user expanded an event element.
WHEN: the user clicks on the details-button of the previously expanded event element,
THEN: the event element should collapse into its original state.

F 3 / Sc 1:

GIVEN: A user views the list of events.
WHEN: no number was set manually,
THEN: the default number of events on one page should be 32.

F 3 / Sc 2:

GIVEN: A user views the list of events.
WHEN: the user sets a number of element for one page manually,
THEN: the amount of elements of the list of events should change accordingly.

F 4 / Sc 1:

GIVEN: A user uses the app offline.
WHEN: the user cached data before going offline,
THEN: they should be able to view this data without connecting to the internet.

F 4 / Sc 2:

GIVEN: A user uses the app offline.
WHEN: the user attempts to change their settings for the city or time range,
THEN: they should receive a blocking error that explains that this is not possible while they are offline.

F 5 / Sc 1:


GIVEN: Events in several cities have been created.
WHEN: a user moves to the event list,
THEN: the main page should contain graphs that display all given events.


______________

Given pattern from the exercise:

SCENARIO 1: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.
Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events
