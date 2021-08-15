import { Route,BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile.jsx";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
      </Switch>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
      <Switch>
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
