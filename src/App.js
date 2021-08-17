import { useContext } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { Context } from "./context/Context";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile.jsx";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Signin />}
        </Route>
      </Switch>
      <Switch>
        <Route path="/signin">{user ? <Redirect to="/" /> : <Signin />}</Route>
      </Switch>
      <Switch>
        <Route path="/signup">{user ? <Redirect to="/" /> : <Signup />}</Route>
      </Switch>
      <Switch>
        <Route path="/profile">
          {user ? <Profile /> : <Redirect to="/signin" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
