//ACTION  -> INCREMENT (describes what you want to do!) it's a simple function

export const increment = (number) => {
	return {
		type: "INCREMENT",
		payload: number,
	};
};

export const decrement = () => {
	return {
		type: "DECREMENT",
	};
};
