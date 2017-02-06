//functions that return application states
import { combineReducers } from 'redux';
import ItemsReducer from './reducer_items';

//add more reducers below
const rootReducer = combineReducers({
	items: ItemsReducer
});

export default rootReducer;