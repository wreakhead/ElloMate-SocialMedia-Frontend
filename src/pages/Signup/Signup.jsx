import "./Signup.css";

function Signup() {
  return (
    <div className="signup">
      <div className="signupWrap">
        <div className="signupLeft">
          <h3 className="signupLogo">Ello Mate!</h3>
          <span className="signupDescribe">connect to people or don't ...</span>
        </div>
        <div className="signupRight">
          <div className="signupBox">
            <input
              type="text"
              className="Name signupInput"
              placeholder="Name"
            />
            <input
              type="text"
              className="Email signupInput"
              placeholder="Email"
            />
            <input
              type="text"
              className="Password signupInput"
              placeholder="Password"
            />
            <input
              type="text"
              className="Password signupInput"
              placeholder="Confirm Password"
            />
            <button className="signupButton">Sign Up</button>

            <button className="createAcc">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
