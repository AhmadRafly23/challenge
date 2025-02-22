const reducerContext = (state, action) => {
  const { step } = action.payload;
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + step,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "reset":
      return {
        count: 0,
      };
    default:
      return state;
  }
};

export default reducerContext;
