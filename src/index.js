import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import allReducer from "./reducers";

//STORE  -> Globalized STATE
//const store = createStore(allReducer);

//ACTION  -> INCREMENT (describes what you want to do!) it's a simple function

const increment = () => {
	return {
		type: "INCREMENT",
	};
};

const decrement = () => {
	return {
		type: "DECREMENT",
	};
};

//REDUCER -> (action transfer from one state to another state, it gonna modify our store)
//You can have many reducers (Auth reducer, Movielist reducer etc ...)
const counter = (state = 0, action) => {
	switch (action.type) {
		case "INCREMENT":
			return state + 1;
		case "DECREMENT":
			return state - 1;
	}
};

//STORE
let store = createStore(counter);

//Display it in the console.
store.subscribe(() => console.log(store.getState()));

//DISPATCH (DISPATTCH this action to the reducer)
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
