export const signinStart = (userCreds) => ({
  type: "SIGNIN_START",
});

export const signinSuccess = (user) => ({
  type: "SIGNIN_SUCCESS",
  payload: user,
});

export const signinFailure = (error) => ({
  type: "SIGNIN_FAILURE",
  payload: error,
});
