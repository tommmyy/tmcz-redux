import { combineReducers } from 'redux';
import ActionTypes from '../constants/ActionTypes';

const ui = (state = { newTodo: '', visibleTodos: [] }, action) => {
	if (action.type === ActionTypes.CHANGE_NEW_TODO) {
		return {
			...state,
			newTodo: action.payload.text,
		};
	}

	if (action.type === ActionTypes.ADD_TODO) {
		return {
			...state,
			newTodo: '',
			visibleTodos: [...state.visibleTodos, action.payload.id],
		};
	}

	if (action.type === ActionTypes.REMOVE_TODO) {
		return {
			...state,
			visibleTodos: state.visibleTodos.filter((x) => x !== action.payload.id),
		};
	}

	return state;
};

const entities = (state = { todos: {} }, action) => {
	if (action.type === ActionTypes.ADD_TODO) {
		return {
			...state,
			todos: {
				...state.todos,
				[action.payload.id]: action.payload,
			},
		};
	}

	return state;
};

export default combineReducers({ ui, entities });

export const getVisibleTodos = (state) => {
	const todos = state.entities.todos;
	const ids = state.ui.visibleTodos;

	return ids.map((id) => todos[id]);
};

export const getNewTodo = (state) => state.ui.newTodo;
