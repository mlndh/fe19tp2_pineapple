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
import GraphForm from "../GraphForm";
import { volvo, averagePrice } from "./data";
import AddButton from '../AddButton';
import BarChart from '../BarChart';
import Chartmoller from "../Mollerbil/chartmoller";
import Chartbrabil from "../Brabil/chartbrabil";
import Chartus from "../Usbil/chartus";
import KUND from "../Kund";

// import Chart from "../Charts/Chart.js";
import MultiChart from "../Charts/MultiChart";
/* import MultiChart from "../Charts/MultiChart"; */

//import { averagePrice } from "./data";

class App extends React.Component {
  constructor(props) {
    super(props);


    this.handleAddChart = this.handleAddChart.bind(this);
    this.handleChartBrandChange = this.handleChartBrandChange.bind(this);
    this.state = { charts: ['Audi'] }
  }

  handleAddChart() {
    const chartArray = this.state.charts;
    chartArray.push('Audi');
    this.setState({ charts: chartArray })
  }

  handleChartBrandChange(index, brand) {
    //console.log("index: " + index + ", brand: " + brand);
    const chartArray = this.state.charts;
    chartArray[index] = brand;
    this.setState({ charts: chartArray })
  }
  render() {
    return (
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

          </div>
        </Router>
        <AddButton handleAddChart={this.handleAddChart} />
        <div className='chartContainer'>
          {this.state.charts.map((chart, index) => {
            return (
              <MultiChart handleChartBrandChange={this.handleChartBrandChange} index={index} />
            )
          })}
          {/* <MultiChart /> */}
          {/* < Chart /> */}
          <BarChart brands={this.state.charts} />
        </div>

      </React.Fragment>
    );
  }
}

export default withAuthentication(App);
