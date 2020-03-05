import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import styled from "styled-components";
import AddButton from "../AddButton";
/* här har vi importen */
import BarChart from "../BarChart";
import MultiChart from "../Charts/MultiChart";

const Mollerstyle = styled.body`
  background: lightblue;
`;

const H1div = styled.div`
  margin-left: 10%;
`;
const Buttonstyle = styled.button`
  margin-left: 10%;
  color: red;
  width: 50px;
`;

/* här har vi knapp styling */

const Chartsection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 80vh;
`;

const Chartcontainer = styled.div `
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
`;

const BarCdwqdwdq = styled.div `
max-width: 800px;
display: flex;
flex-wrap: wrap;
`;


class App extends React.Component {
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
        <Mollerstyle>
          <div>
            <H1div>
              <h1>
                MÖLLERBIL LOGGA
                <br /> Here is the landing page (here should the KPI reports
                show instead)
              </h1>
            </H1div>
          </div>
          <Chartsection>
            <Chartcontainer>
            <Buttonstyle>
              <AddButton handleAddChart={this.handleAddChart} />
            </Buttonstyle>
              {this.state.charts.map((chart, index) => {
                return (
                  <MultiChart
                    handleChartBrandChange={this.handleChartBrandChange}
                    index={index}
                  />
                );
              })}
              <BarChart brands={this.state.charts} />
            </Chartcontainer>
          </Chartsection>
        </Mollerstyle>
      </React.Fragment>
    );
  }
}
export default App;
