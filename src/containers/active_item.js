import React, {Component} from 'react';
import { connect } from 'react-redux';

class ActiveItem extends Component{	
	render(){
		if(!this.props.item){
			return(
				<div>
					Please select an item to view.
				</div>
			);
		}
		return (
			<a href="#" className="thumbnail col-xs-12">
				{this.props.params.id} 
			</a>
		);
	}
}

function mapStateToProps(state){
	return {
		item: state.activeItem
	};
}

export default connect(mapStateToProps)(ActiveItem);