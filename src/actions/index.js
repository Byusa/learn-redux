//ACTION  -> INCREMENT (describes what you want to do!) it's a simple function

export const increment = (nr) => {
	return {
		type: "INCREMENT",
		payload: nr,
	};
};

export const decrement = () => {
	return {
		type: "DECREMENT",
	};
};
