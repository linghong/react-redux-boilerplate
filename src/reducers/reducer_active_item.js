//create reducers for each piece of state
//a reducer takes two actions:
//1. the action (info about what happenned)
//2. copy of current state

//the state is the reducer responsible for. It is not the application state
//if the state is undefined, set the state to null
//never mutate the state, always return a fresh object
export default function(state = null, action){
	switch(action.type){
		case 'SelectItem':
			return action.payload;
		default:
			return state;
	}
}