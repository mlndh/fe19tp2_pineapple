import React, { Component } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import { compose } from "recompose";
import { withAuthorization } from "../Session";
import * as ROLES from "../../constants/roles";
import { withFirebase } from "../Firebase";

import { unique, averagePrices } from "./databrabil";
class Chartbrabil extends Component {
  constructor(props) {
    super(props);
    const priceData = averagePrices(); // {audi: 340000, volvo: 105000}
    const brands = Object.keys(priceData);
    const prices = Object.values(priceData);

    this.state = {
      chartData: {
        labels: brands,
        datasets: [
          {
            label: "Population",
            data: prices,
            backgroundColor: [
              "pink",
              "powderblue",
              "plum",
              "moccasin",
              "slateblue",
              "silver",
              "darkCyan",
              "darkSeaGreen",
              "purple",
              "lightSkyBlue",
              "mediumPurple",
              "midnightBlue",
              "paleVioletRed",
              "steelBlue",
              "thistle"
            ]
          }
        ]
      }
    };
  }
  static defaultProps = {
    displayTitle: true,
    displayLegend: false,
    legendPosition: "bottom"
  };
  /*  componentDidMount() {
         console.log(unique);
 
     } */
  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Brabil",
              fontSize: 23
            },
            legend: {
              display: false,
              position: this.props.legendPosition
            }
          }}
        />
      </div>
    );
  }
}

const condition = authUser => authUser && authUser.roles.includes(ROLES.BRABIL);
export default compose(withAuthorization(condition), withFirebase)(Chartbrabil);
