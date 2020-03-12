import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import styled, { createGlobalStyle } from "styled-components";
import AddButton from "../AddButton";

import BarChart from "../BarChart";
import MultiChart from "../Charts/MultiChart";
import { withAuthorization } from "../Session";

const UScentericon = require("../Assets/US center.jpeg");

const USstyle = styled.div`
  background: white;
  font-family: arial;
  img {
    width: 9rem;
  }
  @media (max-width: 649px) {
    margin-bottom: 13%;
  }
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
  padding-bottom: 30px;
`;
const Buttonstyle = styled.button`
  background-color: white;
  width: 16rem;
  height: 14rem;
  border: none;
  border-radius: 1rem;
  text-align: center;
  margin-top: 2%;
  margin-right: 10px;
  justify-content: flex-end;
`;

const Chartsection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  width: 100vw;
  min-height: 85vh;
  img {
    width: 1.5rem;
  }
`;

const Chartcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
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
            <img src={UScentericon} />
            <h3>
              Here you can chose what brands you want to see in the charts. They
              will be saved by default and you can delete them anytime.
            </h3>
          </H1div>

          <Chartsection>
            <Chartcontainer>
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
            </Chartcontainer>
            <Buttonstyle>
              <AddButton handleAddChart={this.handleAddChart} />
            </Buttonstyle>
          </Chartsection>
        </USstyle>
      </React.Fragment>
    );
  }
}
const condition = authUser => !!authUser;
export default withAuthorization(condition)(LandingUS);
