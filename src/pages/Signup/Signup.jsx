import "./Signup.css";
import { useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Signup() {
  const email = useRef();
  const password = useRef();
  const username = useRef();
  const confPassword = useRef();
  const history = useHistory();

  const formSubmitted = async (event) => {
    event.preventDefault();
    if (password.current.value !== confPassword.current.value) {
      confPassword.current.setCustomValidity("Password do not match");
    } else {
      const user = {
        username: username.current.value,
        password: password.current.value,
        email: email.current.value,
      };
      try {
        await axios.post("auth/signup", user);
        history.push("/signin");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="signup">
      <div className="signupWrap">
        <div className="signupLeft">
          <h3 className="signupLogo">Ello Mate!</h3>
          <span className="signupDescribe">connect to people or don't ...</span>
        </div>
        <div className="signupRight">
          <form className="signupBox" onSubmit={formSubmitted}>
            <input
              required
              ref={username}
              type="text"
              className="Name signupInput"
              placeholder="Name"
            />
            <input
              ref={email}
              required
              type="email"
              className="Email signupInput"
              placeholder="Email"
            />
            <input
              ref={password}
              required
              type="password"
              className="Password signupInput"
              placeholder="Password"
              minLength="6"
            />
            <input
              required
              ref={confPassword}
              type="password"
              className="Password signupInput"
              placeholder="Confirm Password"
            />
            <button type="submit" className="signupButton">
              Sign Up
            </button>

            <button className="signupButton">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
