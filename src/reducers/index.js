import ActionTypes from '../constants/ActionTypes';

const initialState = 0;

export default (state = initialState, action) => {
	if (action.type === ActionTypes.INCREMENT) {
		return state + 1;
	}
	if (action.type === ActionTypes.DECREMENT) {
		return state - 1;
	}
	if (action.type === ActionTypes.RESET) {
		return initialState;
	}
	return state;
};

export const getValue = (x) => x;
