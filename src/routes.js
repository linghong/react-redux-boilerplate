import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import ItemList from './components/item_list';
import ActiveItem from './components/active_item';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'

export default (
	<Route path='/' component={App}>
		<IndexRoute component={ItemList}></IndexRoute>
		<Route path='/items/:id' component={ActiveItem}></Route>
	</Route>
);