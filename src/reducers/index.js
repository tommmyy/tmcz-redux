import { combineReducers } from 'redux';
import ActionTypes from '../constants/ActionTypes';

const ui = (state = { newTodo: '', visibleCats: [] }, action) => {
	if (action.type === ActionTypes.FETCH_CAT_SUCCESS) {
		return {
			...state,
			visibleCats: [...state.visibleCats, action.payload.id],
		};
	}

	return state;
};

const entities = (state = { cats: {} }, action) => {
	if (action.type === ActionTypes.FETCH_CAT_SUCCESS) {
		return {
			...state,
			cats: {
				...state.cats,
				[action.payload.id]: action.payload,
			},
		};
	}

	return state;
};

export default combineReducers({ ui, entities });

export const getCats = (state) => {
	const cats = state.entities.cats;
	const ids = state.ui.visibleCats;

	return ids.map((id) => cats[id]);
};
