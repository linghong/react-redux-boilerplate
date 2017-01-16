//functions that return application states
import { combineReducers } from 'redux';
import Items from './reducer_items';
import ActiveItem from './reducer_active_item';

const rootReducer = combineReducers({
	items: Items,
	activeItem: ActiveItem
});

export default rootReducer;