import axios from "axios";

export const signinApi = async (userCreds, dispatch) => {
  dispatch({
    type: "SIGNIN_START",
  });
  try {
    const res = await axios.post("auth/signin", userCreds);
    dispatch({ type: "SIGNIN_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "SIGNIN_FAILURE", payload: error });
  }
};
