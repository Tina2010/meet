import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../components/App'; // always import the component that is tested in your .test.js file
import EventList from '../components/EventList';
import CitySearch from '../components/CitySearch';
import NumberOfEvents from '../components/NumberOfEvents';
import {extractLocations, getEvents} from '../api';
import {mockData} from '../mock-data';

// unit tests
describe('<App /> component', () => {
    let AppWrapper;
    beforeAll(() => {
      AppWrapper = shallow(<App />);
    });
  
    test('render list of events', () => {
      expect(AppWrapper.find(EventList)).toHaveLength(1);
    });
  
    test('render CitySearch', () => {
      expect(AppWrapper.find(CitySearch)).toHaveLength(1);
    });

    test('render NumberOfEvents', () => {
      expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
    });
  });

//----FEATURE: Eventlist => integration tests
describe('<App /> integration', () => {
  test('App passes "events" state as a prop to EventList', () => {
    const AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state('events');
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    AppWrapper.unmount();
  });

//----FEATURE: CitySearch => integration tests

  test('App passes "locations" state as a prop to CitySearch', () => {
    const AppWrapper = mount(<App />);
    const AppLocationsState = AppWrapper.state('locations');
    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
    AppWrapper.unmount();
  });

  test('get list of events matching the city selected by the user', async () => {
    const AppWrapper = mount(<App />);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    const selectedIndex = Math.floor(Math.random() * (suggestions.length));
    const selectedCity = suggestions[selectedIndex];
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter(event => event.location === selectedCity);
    expect(AppWrapper.state('events')).toEqual(eventsToShow);
    AppWrapper.unmount();
  });

  test('get list of all events when user selects "See all cities"', async () => {
    const AppWrapper = mount(<App />);
    const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
    await suggestionItems.at(suggestionItems.length - 1).simulate('click');
    const allEvents = await getEvents();
    expect(AppWrapper.state('events')).toEqual(allEvents);
    AppWrapper.unmount();
  });

//----FEATURE: NumberOfEvents => integration tests

  test('App passes "numberOfEvents" state as a prop to NumberOfEvents', () => {
    const AppWrapper = mount(<App />);
    const AppNumberOfEventsState = AppWrapper.state('numberOfEvents');
    expect(AppNumberOfEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(NumberOfEvents).props().numberOfEvents).toEqual(32);
    AppWrapper.unmount();
  });

  test('get list of events matching the amount selected by the user', async () => {
    const AppWrapper = mount(<App />);
    AppWrapper.find('.amountEventsOnePage').at(0).simulate('change', { target: { value: 11 } });
    expect(AppWrapper.find(NumberOfEvents).props().numberOfEvents).toEqual(11);
    AppWrapper.unmount();
  });

}); 