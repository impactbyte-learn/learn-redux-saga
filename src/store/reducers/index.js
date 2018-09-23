const reducers = (
  state = { loading: false, data: [], error: null },
  action
) => {
  switch (action.type) {
    case "FETCH_FOLLOWERS":
      return { ...state, loading: true };
    case "FETCH_FOLLOWERS_FULFILLED":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_FOLLOWERS_REJECTED":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducers;
