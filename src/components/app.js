import React, {Component} from 'react';
import ItemList from '../containers/item_list';

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