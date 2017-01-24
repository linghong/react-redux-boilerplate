//An action is a plain js object and must have a type
import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';

const ROOT_URL = "https://react-redux-40894.firebaseio.com";
const API="examples";

export function fetchData(){
	const request =axios.get(`${ROOT_URL}/${API}.json`);
	console.log(request);
	return {
		type: FETCH_DATA,
		payload: request
	};
}

export function selectItem(item){
	//An action creater is a js function which returns an action.
	return{
		type: 'SelectItem',
		payload: item
	}
}