import { FETCH_DATA } from '../actions/index';

const INITIAL_STATE = {
	allItems: [],
	activeItem: null
};

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case FETCH_DATA:
			return {...state, allItems: action.payload.data};
		default:
			return state;
	}
}
