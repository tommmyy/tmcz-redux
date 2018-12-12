import ActionTypes from './ActionTypes';

export default (state = 0, action) => {
	if (action.type === ActionTypes.INCREMENT) {
		return state + 1;
	}
	return state;
};

export const getValue = x => x;
