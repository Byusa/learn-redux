import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import allReducer from "./reducers";
import { Provider } from "react-redux";

//STORE  -> Globalized STATE
const store = createStore(
	allReducer,
	+window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/*
//Display it in the console.
store.subscribe(() => console.log(store.getState()));

//DISPATCH (DISPATTCH this action to the reducer)
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());

*/

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

reportWebVitals();
