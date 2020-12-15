import produce from 'immer';
import createReducer from "./reducerUtils";
import { USER_LOGIN } from '../actions/login.actions';

const initialState = {
	response: false,
	token: '',
	username: '',
	errMsg: ''

};

const loginReducer = {
	userLogin(state, action) {
		state.response = action.payload.response;
		state.token = action.payload.token;
		state.username = action.payload.username;
		state.errMsg = action.payload.errMsg;
	}

	// here add more function that this reducer do
}

export default produce((state, action) => createReducer(state, action, loginReducer), initialState);