import React, {Component} from 'react';
import ItemList from '../components/item_list';
import ActiveItem from '../components/active_item';

export default class App extends Component {
	render(){
		return(			
			<div>
				<div className="app">React-Redux Site Boilerplate</div>
				{this.props.children}
			</div>
		);
	}
}