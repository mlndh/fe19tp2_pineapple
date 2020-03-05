import React, { Component } from 'react';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
//import { multi } from './multiyears';
import { averagePrices, getBrands } from './multiyears';
import styled from "styled-components";

const Selectcarbrand = styled.div`
    
    `;

/* const Buttonstyle = styled.button`
  margin-left: 10%;
  color: red;
  width: 50px;
`; */

class MultiChart extends Component {
    constructor(props) {
        super(props);
        //const yearData = averageYears(); // {audi: 340000, volvo: 105000}
        //const brands = Object.keys(yearsData);
        //const years = Object.values(yearsData)
        const dataBrands = getBrands()

        const priceData = averagePrices(dataBrands[0]);
        const brands = ["2018", "2019", '2020'];
        const years = ["2018Prices", '2019Prices', '2020Prices'];
        const prices = Object.values(priceData);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            selectedBrand: dataBrands[0],
            chartData: {
                labels: brands,
                datasets: [
                    {
                        label: 'Population',
                        data: prices,
                        backgroundColor: [
                            'pink',
                            'powderblue',
                            'plum',
                            'moccasin',
                            'slateblue',
                            'silver',
                            'darkCyan',
                            'darkSeaGreen',
                            'purple',
                            'lightSkyBlue',
                            'mediumPurple',
                            'midnightBlue',
                            'paleVioletRed',
                            'steelBlue',
                            'thistle'


                        ]
                    }
                ]
            }
        }
    }
    handleChange(event) {
        this.props.handleChartBrandChange(this.props.index, event.target.value);
        const priceData = averagePrices(event.target.value)
        const prices = Object.values(priceData);
        const brands = ["2018", "2019", '2020'];
        this.setState({
            selectedBrand: event.target.value,
            chartData: {
                labels: brands,
                datasets: [
                    {
                        label: 'Population',
                        data: prices,
                        backgroundColor: [
                            'pink',
                            'powderblue',
                            'plum',
                            'moccasin',
                            'slateblue',
                            'silver',
                            'darkCyan',
                            'darkSeaGreen',
                            'purple',
                            'lightSkyBlue',
                            'mediumPurple',
                            'midnightBlue',
                            'paleVioletRed',
                            'steelBlue',
                            'thistle'


                        ]
                    }
                ]
            }
        }
        );
    }
    static defaultProps = {
        displayTitle: true,
        displayLegend: false,
        legendPosition: 'bottom'

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
        const brands = getBrands();
        return (
            <div>
                <Selectcarbrand key={this.props.index}>
                    <select onChange={this.handleChange}>
                        {brands.map(brand => (<option>{brand}</option>))}
                    </select>

                </Selectcarbrand>
                <div>
                    <Line
                        data={this.state.chartData}
                        width={200}
                        height={200}
                        options={{ maintainAspectRatio: false }}
                        options={{
                            title: {
                                display: this.props.displayTitle,
                                text: this.state.selectedBrand.toUpperCase(),
                                fontSize: 23
                            },
                            legend: {
                                display: false,
                                position: this.props.legendPosition
                            }
                        }
                        }

                    />

                </div>
            </div>
        )
    }
}


export default MultiChart;