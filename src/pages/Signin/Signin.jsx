import { useContext } from "react";
import { useRef } from "react";
import { signinApi } from "../../api";
import { Context } from "../../context/Context";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./Signin.css";

function Signin() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(Context);
  const formSubmitted = (event) => {
    event.preventDefault();
    signinApi(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user);
  return (
    <div className="signin">
      <div className="signinWrap">
        <div className="signinLeft">
          <h3 className="signinLogo">Ello Mate!</h3>
          <span className="signinDescribe">connect to people or don't ...</span>
        </div>
        <div className="signinRight">
          <form onSubmit={formSubmitted} className="signinBox">
            <input
              ref={email}
              required
              type="email"
              className="Email signinInput"
              placeholder="Email"
            />
            <input
              ref={password}
              required
              minLength="6"
              type="password"
              className="Password signinInput"
              placeholder="Password"
            />
            <button type="submit" className="signinButton" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress className="signinProgress" />
              ) : (
                "Sign in"
              )}
            </button>
            <span className="forgotPass">Forgot Password?</span>
            
            <button className="createAcc" disabled={isFetching}>
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
