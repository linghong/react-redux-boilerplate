import React, {Component} from 'react';

class ActiveItem extends Component{	
	render(){
		//get data from redux store
		const $r = this._reactInternalInstance._context;
 		const allItems= $r.store.getState().items.allItems;
 		
 		//get id from props
 		const id = this.props.params.id;
		
		return (
			<main  className="active-item col-md-offset-1 col-md-10 col-xs-12">
				<h1>This is the content page for {allItems[id].title} </h1>
				<p>The content from atributes of a single item will be displayed in this page. </p>
				<p>To change the display of your content or style, modify the ActiveItem component code, the change will show here.</p>
			</main>
		);
	}
}

export default ActiveItem;