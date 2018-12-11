import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
	it('calls componentDidMount method', () => {
		jest.spyOn(App.prototype, 'componentDidMount');

		shallow(<App />);

		expect(App.prototype.componentDidMount.mock.calls.length).toBe(1);
	});
});
