import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';

// stolen from https://redux.js.org/advanced/middleware
const logger = (store) => (next) => (action) => {
	console.log('dispatching', action);
	let result = next(action);
	console.log('next state', store.getState());
	return result;
};

export default (initialState) => {
	const store = createStore(reducer, initialState, applyMiddleware(logger));

	return store;
};
