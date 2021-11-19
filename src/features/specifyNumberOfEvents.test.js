import { loadFeature, defineFeature } from 'jest-cucumber';

import React from 'react';
import { mount } from 'enzyme';
import App from '../components/App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature'); //loadFeature() expects the file path to start from the root of the project

defineFeature(feature, test => {
    test('When a user hasn’t specified a number, 32 is the default number.', ({ given, when, then }) => {
            let AppWrapper;
            given('A user views the list of events.', () => {
                AppWrapper = mount(<App />);
            });
            when('no number was set manually,', () => {
                //nothing happens -> no user interaction or sync behavior 
            });
            then('the default number of events on one page should be 32.', () => {
                AppWrapper.update();
                expect(AppWrapper.state('numberOfEvents')).toBe(32);
            });
        });
    
        test('Users can change the number of events they want to see.', ({ given, when, then }) => {
            let AppWrapper;
            given('A user views the list of events.', () => {
                AppWrapper = mount(<App />);
            });
            when('the user sets a number of element for one page manually,', () => {
                AppWrapper.find('.amountEventsOnePage').simulate('change', { target: { value: 4 } });
                AppWrapper.update();
            });    
            then('the amount of elements of the list of events should change accordingly.', () => {
                expect(AppWrapper.state('numberOfEvents')).toBe(4);
            });
        });
});