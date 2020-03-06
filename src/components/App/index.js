import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "../Navigation";
import LandingPage from "../Landing";
import LANDINGUS from "../LandingUS";
import Landingbrabil from "../Landingbrabil";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";
import APIDATA from "../APIDATA";
//import GraphForm from "../GraphForm";
//import { volvo, averagePrice } from "./data";

// import Chart from "../Charts/Chart.js";
//import MultiChart from "../Charts/MultiChart";
/* import MultiChart from "../Charts/MultiChart"; */

//import { averagePrice } from "./data";

class App extends React.Component {
  /*   constructor(props) {
      super(props);
  
      this.handleAddChart = this.handleAddChart.bind(this);
      this.handleChartBrandChange = this.handleChartBrandChange.bind(this);
      this.state = { charts: ["Audi"] };
    } */

  /*   handleAddChart() {
      const chartArray = this.state.charts;
      chartArray.push("Audi");
      this.setState({ charts: chartArray });
    }
  
    handleChartBrandChange(index, brand) {
      //console.log("index: " + index + ", brand: " + brand);
      const chartArray = this.state.charts;
      chartArray[index] = brand;
      this.setState({ charts: chartArray });
    } */
  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            <Navigation />
            <hr />
            <Switch>
              {/* <Route exact path={ROUTES.LANDING} component={LandingPage} /> */}
              <Route exact path={ROUTES.LANDING} render={() => <LandingPage />} />

              <Route exact path={ROUTES.LANDINGUS} component={LANDINGUS} />
              <Route
                exact
                path={ROUTES.LANDINGBRABIL}
                component={Landingbrabil}
              />
              <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
              <Route path={ROUTES.SIGN_IN} component={SignInPage} />
              <Route
                path={ROUTES.PASSWORD_FORGET}
                component={PasswordForgetPage}
              />
              <Route path={ROUTES.HOME} component={HomePage} />
              <Route path={ROUTES.ACCOUNT} component={AccountPage} />
              <Route path={ROUTES.ADMIN} component={AdminPage} />
              <Route path={ROUTES.APIDATA} component={APIDATA} />
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default withAuthentication(App);
