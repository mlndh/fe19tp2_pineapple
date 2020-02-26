import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";
import APIDATA from "../APIDATA";
import Chart from "../TestGraph/Chart.js";
import Chartmoller from "../Mollerbil/chartmoller";
import Chartbrabil from "../Brabil/chartbrabil";
import Chartus from "../Usbil/chartus";

//import { averagePrice } from "./data";

const App = () => (
  <React.Fragment>
    <Router>
      <div>
        <Navigation />
        <hr />
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
        <Route path={ROUTES.APIDATA} component={APIDATA} />
        <Route path={ROUTES.Chartmoller} component={Chartmoller} />
        <Route path={ROUTES.Chartbrabil} component={Chartbrabil} />
        <Route path={ROUTES.Chartus} component={Chartus} />
      </div>
    </Router>
  </React.Fragment>
);
export default withAuthentication(App);
