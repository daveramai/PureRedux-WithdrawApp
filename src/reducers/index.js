export default (state, action) => {
  //   console.log("Action:", action);
  switch (action.type) {
    case "WITHDRAW":
      return {
        ...state,
        totalAmount: state.totalAmount - action.amt,
      };
    default:
      return state;
  }
};
