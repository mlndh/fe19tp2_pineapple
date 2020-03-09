import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "../Navigation";
import LandingPage from "../Landing";
import LANDINGUS from "../LandingUS";
import Landingbrabil from "../Landingbrabil";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";


class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            <Navigation />
            <Switch>
              <Route
                exact
                path={ROUTES.LANDING}
                render={() => <LandingPage />}
              />
              <Route exact path={ROUTES.LANDINGUS} component={LANDINGUS} />
              <Route
                exact
                path={ROUTES.LANDINGBRABIL}
                component={Landingbrabil}
              />
              <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
              <Route path={ROUTES.SIGN_IN} component={SignInPage} />
              <Route path={ROUTES.HOME} component={HomePage} />
              <Route path={ROUTES.ACCOUNT} component={AccountPage} />
              <Route path={ROUTES.ADMIN} component={AdminPage} />
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default withAuthentication(App);
