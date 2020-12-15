import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

import loginReducer from '../reducers/login.reducer'


const reducer = combineReducers(loginReducer);// put your reducers dont foget to do import

//in applyMiddleware put your middlewars
const store = createStore(reducer, applyMiddleware(thunk));
window.store = store;
export default store;
;

