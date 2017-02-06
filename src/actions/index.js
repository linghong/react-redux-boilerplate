//An action is a plain js object and must have a type
import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';

//used for fetching data
const ROOT_URL = "https://react-redux-40894.firebaseio.com";
const API="examples";

export function fetchData(){
	const request =axios.get(`${ROOT_URL}/${API}.json`);

	return {
		type: FETCH_DATA,
		payload: request
	};
}
