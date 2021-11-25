//REDUCER -> (action transfer from one state to another state, it gonna modify our store)
//You can have many reducers (Auth reducer, Movielist reducer etc ...)
const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case "INCREMENT":
			return state + 1;
		case "DECREMENT":
			return state - 1;
	}
};

export default counterReducer;
