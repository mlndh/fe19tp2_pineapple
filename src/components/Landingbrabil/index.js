import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import styled, { createGlobalStyle } from "styled-components";
import AddButton from "../AddButton";
import BarChart from "../BarChart";
import MultiChart from "../Charts/MultiChart";
import { withFirebase } from "../Firebase";
import { SignUpForm } from "../SignUp";
import { compose } from "recompose";
import { withAuthorization } from "../Session";
import * as ROLES from "../../constants/roles";

const Brabilstyle = styled.body`
  background: beige;
`;
const Kpidiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Styledlinks = styled.div`
  a {
    font-size: 1.2rem;
    font-weight: 600;
    text-decoration: none;
    list-style: none;
    color: black;
  }
`;

const H1div = styled.div`
  margin-left: 10%;
`;
const Buttonstyle = styled.button`
  margin-left: 10%;
  color: red;
  width: 50px;
`;

const Chartsection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 80vh;
`;

class Landingbrabil extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddChart = this.handleAddChart.bind(this);
    this.handleChartBrandChange = this.handleChartBrandChange.bind(this);
    this.state = { charts: ["Audi"] };
  }

  handleAddChart() {
    const chartArray = this.state.charts;
    chartArray.push("Audi");
    this.setState({ charts: chartArray });
  }

  handleChartBrandChange(index, brand) {
    //console.log("index: " + index + ", brand: " + brand);
    const chartArray = this.state.charts;
    chartArray[index] = brand;
    this.setState({ charts: chartArray });
  }
  render() {
    return (
      <React.Fragment>
        <Brabilstyle>
          <div>
            {/* <Kpidiv>
            <Styledlinks>
              <Link to={ROUTES.Chartmoller}>Möller bil</Link>
            </Styledlinks>
            <Styledlinks>
              <Link to={ROUTES.Chartbrabil}>Brabil</Link>
            </Styledlinks>
            <Styledlinks>
              <Link to={ROUTES.Chartus}>US center</Link>
            </Styledlinks>
          </Kpidiv> */}
            <H1div>
              <h1>
                BRABILLOGGA <br /> Here is the landing page (here should the KPI
                reports show instead)
              </h1>
            </H1div>
          </div>
          <Chartsection>
            <Buttonstyle>
              <AddButton handleAddChart={this.handleAddChart} />
            </Buttonstyle>
            <div className="chartContainer">
              {this.state.charts.map((chart, index) => {
                return (
                  <MultiChart
                    handleChartBrandChange={this.handleChartBrandChange}
                    index={index}
                  />
                );
              })}
              {/* <MultiChart /> */}
              {/* < Chart /> */}
              <BarChart brands={this.state.charts} />
            </div>
          </Chartsection>
        </Brabilstyle>
      </React.Fragment>
    );
  }
}
const condition = authUser => authUser && authUser.roles.includes(ROLES.BRABIL);
export default compose(
  withAuthorization(condition),
  withFirebase
)(Landingbrabil);
