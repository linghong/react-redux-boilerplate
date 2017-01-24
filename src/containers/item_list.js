import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchData, SelectItem} from '../actions/index';
import {bindActionCreators} from 'redux';

class ItemList extends Component {
	//will call when component is about to call
	// This is the best place to fetch data
	componentWillMount(){
		this.props.fetchData();
	}

	renderList(){
		return this.props.items.map((item) =>{
			return(
				<div key={item.title} className="col-xs-6 col-md-3">
				 	<a href="#" className="thumbnail" alt='{item.title}'>{item.title}
    				</a>
				</div>
			);
		});
	}

	render(){
		return (
			<div className="item-list row">
				{this.renderList()}
			</div>
		);
	}
}

//connect to reducer
//whatever is returned will show up as a props inside the above class
function mapStateToProps(state){
	return{
		items: state.items.allItems
	}
}

//Anything returned from this function will end up as props on the ItemList container
function mapDispatchToProps(dispatch){
	//whenever selectImg is called the result should be passed to all resucers
	return bindActionCreators({ fetchData }, dispatch);
}

//promote ImageList from a component to a container
//it needs to know the dispatch method, selectImage. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(ItemList); 