import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import reducer from './reducers';

const store = createStore(reducer);
store.subscribe(() => {
	console.log('New state');

	console.log(store.getState());
});

const render = () =>
	ReactDOM.render(<App state={store.getState()} dispatch={store.dispatch} />, document.getElementById('root'));

store.subscribe(render);

render();
