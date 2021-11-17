import { loadFeature, defineFeature } from 'jest-cucumber';

import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature'); //loadFeature() expects the file path to start from the root of the project

defineFeature(feature, test => {
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        let AppWrapper;
        given('The list of events has been loaded completely.', () => {
            AppWrapper = mount(<App />);
        });
        when('the list was just loaded,', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.eventCard').hostNodes()).toHaveLength(mockData.length)
        });
        then('all event elements are collapsed.', async () => {
            const eventDetails = await AppWrapper.find('.eventCard .eventDetails.inactive');
            expect(eventDetails).toBeDefined();
        });
    });

    test('User can expand an event to see its details.', ({ given, when, then }) => {
        let AppWrapper;
        given('A user views the list of events and needs more information.',  () => {
            AppWrapper = mount(<App />);
        });
        when('the user clicks on the details-button,', () => {     
            AppWrapper.update();
            AppWrapper.find('.detailsButton').at(0).simulate('click');
        });
        then('the event element should expand to show all details.', async () => {
            const eventDetails = await AppWrapper.find('.eventCard .eventDetails.active');
            expect(eventDetails).toBeDefined();
        });
    });

    test('User can collapse an event to hide its details.', ({ given, when, then }) => {
        let AppWrapper;
            AppWrapper = mount(<App />);
        given('A user expanded an event element.', async () => {
            AppWrapper.update();
            AppWrapper.find('.detailsButton').at(0).simulate('click');
            const eventDetails = await AppWrapper.find('.eventCard .eventDetails.active');
            expect(eventDetails).toBeDefined();
        });
        when('the user clicks on the details-button of the previously expanded event element,', () => {
            AppWrapper.find('.detailsButton').at(0).simulate('click');
        });
        then('the event element should collapse into its original state.', async () => {
            const eventDetails = await AppWrapper.find('.eventCard .eventDetails.inactive');
            expect(eventDetails).toBeDefined();
        });
    });
});