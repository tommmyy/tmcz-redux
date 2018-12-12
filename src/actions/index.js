import ActionTypes from '../constants/ActionTypes';

export const fetchCat = () => (dispatch, getState) => {
	dispatch({ type: ActionTypes.FETCH_CAT_REQUEST });

	return fetch('https://api.thecatapi.com/v1/images/search?format=json')
		.then((response) => response.json())
		.then((json) => dispatch({ type: ActionTypes.FETCH_CAT_SUCCESS, payload: { url: json[0].url, id: json[0].id } }))
		.catch((err) => dispatch({ type: ActionTypes.FETCH_CAT_ERROR, error: true, payload: err }));
};
