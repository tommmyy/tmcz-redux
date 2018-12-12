// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './components/App';

// ReactDOM.render(<App />, document.getElementById('root'));

import { createStore } from 'redux';

const reducer = (state = 0, action) => {
	if (action.type === 'INCREMENT') {
		return state + 1;
	}
	return state;
};

const store = createStore(reducer);
store.subscribe(() => {
	console.log('New state');

	console.log(store.getState());
});

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });

console.log(store);
