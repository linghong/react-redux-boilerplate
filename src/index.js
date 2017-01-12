import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'

const App = ()=>{
	return (
		<div className="app col-sm-offset-3 col-sm-9">React-Redux Site Boilerplate</div>
	);
};

ReactDOM.render(<App />, document.querySelector(".container"));