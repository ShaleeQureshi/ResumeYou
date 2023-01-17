import React from "react";
import history from "./history.ts";
import { Router, Route, Switch } from "react-router-dom";

// Importing css
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";

// Importing scripts
import { AuthProvider, AppTextProvider } from "./context";
import { PrivateRoute } from "./routes/private";
import { LandingPage } from "../pages";

const App = () => {
  return (
    <AuthProvider>
      <AppTextProvider>
        <Router history={history}>
          <Switch>
            <Route path={["/", "/landing"]} exact component={LandingPage} />
          </Switch>
        </Router>
      </AppTextProvider>
    </AuthProvider>
  );
};

export default App;
