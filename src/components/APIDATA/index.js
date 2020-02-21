import React, { Component } from "react";
import { volvo, averagePrice } from "../App/data";

const API =
  "https://skatteverket.entryscape.net/rowstore/dataset/fad86bf9-67e3-4d68-829c-7b9a23bc5e42/json";
const vehicleType = "?fordonstyp=Personbil";
const mfgYear = "&tillverkningsar=2018";
const vehicleBrand = "&marke=Volvo";

class APIDATA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: ""
    };
  }
  componentDidMount() {
    // console.log(averagePrice());
    this.setState({ cars: volvo.results });
    return;
    fetch(API + vehicleType + mfgYear + vehicleBrand)
      .then(response => response.json())
      .then(data => this.setState({ cars: volvo.results }));
  }

  render() {
    const { cars } = this.state;
    return (
      <div>
        {cars &&
          cars.map((car, index) => (
            <p key={index}>
              {car.nybilspris} {car.tillverkningsar} {car.marke} {car.modell}
            </p>
          ))}
      </div>
    );
  }
}
export default APIDATA;
