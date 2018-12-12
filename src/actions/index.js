import ActionTypes from '../constants/ActionTypes';

export const changeNewTodo = (text) => ({ type: ActionTypes.CHANGE_NEW_TODO, payload: { text } });
export const addTodo = (text) => ({ type: ActionTypes.ADD_TODO, payload: { id: Math.random(), text } });
export const removeTodo = (id) => ({ type: ActionTypes.REMOVE_TODO, payload: { id } });
