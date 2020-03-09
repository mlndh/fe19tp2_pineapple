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

const Brabilicon = require("../Assets/brabil.jpeg");

const Brabilstyle = styled.div`
  background: beige;
  img {
    width:  9rem;
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
`;

const Chartsection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  width: 100vw;
  min-height: 85vh;
`;


const Chartcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;



class Landingbrabil extends React.Component {
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
        <Brabilstyle>
          <H1div>
            <h1><img src={Brabilicon} /></h1>
          </H1div>

          <Chartsection>
            <Buttonstyle>
              <AddButton handleAddChart={this.handleAddChart} />
            </Buttonstyle>
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
