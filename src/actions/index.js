//An action is a plain js object and must have a type
export function selectItem(item){
	//selectImage is an ActionCreater, 
	//An action creater is a js function which returns an action.
	return{
		type: 'SelectItem',
		payload: item
	}
}