//functions that return application states
import { combineReducers } from 'redux';
import ItemsReducer from './reducer_items';
import ActiveItemReducer from './reducer_active_item';

const rootReducer = combineReducers({
	items: ItemsReducer,
	activeItem: ActiveItemReducer
});

export default rootReducer;