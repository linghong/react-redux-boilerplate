import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import ItemList from './containers/item_list';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'

export default (
	<Route path='/'component={App}>
		<IndexRoute component={ItemList}></IndexRoute>
	</Route>
);