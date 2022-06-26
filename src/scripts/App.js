import React from "react";
import history from "./history";
import { Router, Switch, Route } from "react-router-dom";

// Importing CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";

// Importing views
import IndexView from "../views/index_view";
import ProfileView from "../views/profile_view";
import Profile_SetupView from "../views/profile_setup_view";

// Importing Scripts
import { AuthProvider } from "./auth-route";
import PrivateRoute from "./private-route";

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Switch>
          <Route path={["/", "/index"]} exact component={IndexView} />
          <Route path={["/profile"]} exact component={ProfileView} />
          <PrivateRoute
            path={["/profile-setup"]}
            exact
            component={Profile_SetupView}
          />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
