import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore , applyMiddleware  } from 'redux';
import thunk from "redux-thunk";
import appReducers from './reducers/appReducers';
import Button from 'react-bootstrap/Button';
import App from './App';
import './fonts/fonts.css';
import * as serviceWorker from './serviceWorker';
import * as config from './config';
const store = createStore(appReducers , applyMiddleware(thunk)  );

ReactDOM.render(
	<Provider store={store} >
		<BrowserRouter forceRefresh={true}>
		<App />
		</BrowserRouter>
		
	</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




