import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import styled, { createGlobalStyle } from "styled-components";
import AddButton from "../AddButton";

import BarChart from "../BarChart";
import MultiChart from "../Charts/MultiChart";
import { withAuthorization } from "../Session";

const USstyle = styled.div`
  background: lightgrey;
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

class LandingUS extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddChart = this.handleAddChart.bind(this);
    this.handleRemoveChart = this.handleRemoveChart.bind(this);
    this.handleChartBrandChange = this.handleChartBrandChange.bind(this);
    this.state = {};
  }

  handleAddChart() {
    const chartArray = this.state.charts;
    chartArray.push("Audi");
    this.props.firebase
      .user(this.props.authUser.uid)
      .child("charts")
      .set({
        ...chartArray
      });
  }
  handleRemoveChart(index) {
    const chartArray = this.state.charts;
    const newArray = chartArray.splice(index, 1);
    this.props.firebase
      .user(this.props.authUser.uid)
      .child("charts")
      .set({
        ...chartArray
      });
  }

  handleChartBrandChange(index, brand) {
    //console.log("index: " + index + ", brand: " + brand);
    const chartArray = this.state.charts;
    chartArray[index] = brand;
    this.props.firebase
      .user(this.props.authUser.uid)
      .child("charts")
      .set({
        ...chartArray
      });
  }

  componentDidMount() {
    this.props.firebase
      .user(this.props.authUser.uid)
      .child("charts")
      .on("value", snapshot => {
        let chartObject = snapshot.val();
        //console.log(chartObject);
        if (!chartObject) {
          chartObject = [];
        }
        this.setState({
          charts: chartObject
        });
      });
  }
  componentWillUnmount() {
    this.props.firebase.user(this.props.authUser.uid).off();
  }

  render() {
    return (
      <React.Fragment>
        <USstyle>
          <H1div>
            <h1>US CENTER LOGGA</h1>
          </H1div>

          <Chartsection>
            <Buttonstyle>
              <AddButton handleAddChart={this.handleAddChart} />
            </Buttonstyle>
            <div className="chartContainer">
              {this.state.charts
                ? this.state.charts.map((chart, index) => (
                    <MultiChart
                      handleChartBrandChange={this.handleChartBrandChange}
                      index={index}
                      chart={chart}
                      handleRemoveChart={this.handleRemoveChart}
                    />
                  ))
                : null}

              {this.state.charts ? (
                <BarChart brands={this.state.charts} />
              ) : null}
              {/* <MultiChart /> */}
              {/* < Chart /> */}
            </div>
          </Chartsection>
        </USstyle>
      </React.Fragment>
    );
  }
}
const condition = authUser => !!authUser;
export default withAuthorization(condition)(LandingUS);
