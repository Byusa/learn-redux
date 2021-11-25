import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
	//you can name it anything
	//counterReducer (this means counterReducer:counterReducer )
	counter: counterReducer,
	isLogged: loggedReducer,
});

export default allReducers;
