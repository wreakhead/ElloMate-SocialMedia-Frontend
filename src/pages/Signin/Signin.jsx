import "./Signin.css";

function Signin() {
  return (
    <div className="signin">
      <div className="signinWrap">
        <div className="signinLeft">
          <h3 className="signinLogo">Ello Mate!</h3>
          <span className="signinDescribe">connect to people or don't ...</span>
        </div>
        <div className="signinRight">
          <div className="signinBox">
            <input
              type="text"
              className="Email signinInput"
              placeholder="Email"
            />
            <input
              type="text"
              className="Password signinInput"
              placeholder="Password"
            />
            <button className="signinButton">Sign in</button>
            <span className="forgotPass">Forgot Password?</span>
            <button className="createAcc">Create Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
