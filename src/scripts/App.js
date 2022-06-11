import React from "react";
import history from "./history";
import { Router, Switch, Route } from "react-router-dom";

// Importing CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";

// Importing views
import IndexView from "../views/index_view";
import ProfileView from "../views/profile_view";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path={["/", "/index"]} exact component={IndexView} />
        <Route path={["/profile"]} exact component={ProfileView} />
      </Switch>
    </Router>
  );
}

export default App;
