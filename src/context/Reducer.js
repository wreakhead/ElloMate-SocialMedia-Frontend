export const Reducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "SIGNIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };

    case "SIGNIN_FAILURE":
      return {
        user: false,
        isFetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
