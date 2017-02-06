import React, {Component} from 'react';

class ActiveItem extends Component{	
	render(){
		//get data from redux store
		const $r = this._reactInternalInstance._context;
 		const allItems= $r.store.getState().items.allItems;
 		
 		//get id from props
 		const id = this.props.params.id;
 		
 		//we use images from http://lorempixel.com as our example content, our id will determine which imgUrl will be fetched. 
 		//it only lists images from "/0"-"/10", thus we need to divided by 11	
 		const imgId =parseInt(id)% 11;
		const imgUrl = `http://lorempixel.com/640/480/abstract/${imgId}`;
		
		return (
			<main  className="active-item col-md-offset-1 col-md-10 col-xs-12">
				<h2>This Is The Content Page For {allItems[id].title} </h2>
				<img src={imgUrl} className="lorem-img" />
				<p>To change the display of your content or style, modify the ActiveItem component code. The change will show here.</p>
			</main>
		);
	}
}

export default ActiveItem;