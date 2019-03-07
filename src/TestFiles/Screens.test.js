import React from 'react';
import HomePage from '../screens/HomePage';
import EventView from '../screens/EventView';
import CreateEventPage from '../screens/CreateEventPage';
import renderer from 'react-test-renderer';

test('Homepage renders correctly', () => {
   const tree = renderer.create(<HomePage />).toJSON();
   expect(tree).toMatchSnapshot();
})

test('EventView renders correctly', () => {
   const tree = renderer.create(<EventView />).toJSON();
   expect(tree).toMatchSnapshot();
})

test('CreateEventPage renders correctly', () => {
   const tree = renderer.create(<CreateEventPage />).toJSON();
   expect(tree).toMatchSnapshot();
})  