import React, { Component } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import RemoveButton from "../../RemoveButton";


import { averagePrices, getBrands } from "./multiyears";

class MultiChart extends Component {
    constructor(props) {
        super(props);

        const dataBrands = getBrands();

        let priceData;

        if (this.props.chart) {
            priceData = averagePrices(this.props.chart);
        }
        else {
            priceData = averagePrices(dataBrands[0]);
        }
        const brands = ["2018", "2019", "2020"];
        const years = ["2018Prices", "2019Prices", "2020Prices"];
        const prices = Object.values(priceData);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            selectedBrand: this.props.chart,
            chartData: {
                labels: brands,
                datasets: [
                    {
                        label: "SEK",
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
    handleChange(event) {
        this.props.handleChartBrandChange(this.props.index, event.target.value);
        const priceData = averagePrices(event.target.value);
        const prices = Object.values(priceData);
        const brands = ["2018", "2019", "2020"];
        this.setState({
            selectedBrand: event.target.value,
            chartData: {
                labels: brands,
                datasets: [
                    {
                        label: "SEK",
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
        });
    }
    static defaultProps = {
        displayTitle: true,
        displayLegend: false,
        legendPosition: "bottom"
    };
    render() {
        const { chart } = this.props;
        const brands = getBrands();
        return (
            <div key={Math.random()} className="chart">
                <select onChange={this.handleChange} className="dropDown">
                    {brands.map(brand => {
                        if (brand === chart) {
                            return <option selected >{brand}</option>;
                        } else {
                            return <option>{brand}</option>;
                        }
                    })}
                </select>
                <div>
                    <Line
                        data={this.state.chartData}
                        width={200}
                        height={200}
                        options={{ maintainAspectRatio: false }}
                        options={{
                            title: {
                                display: this.props.displayTitle,
                                text: chart.toUpperCase(),
                                fontSize: 23
                            },
                            legend: {
                                display: false,
                                position: this.props.legendPosition
                            }
                        }}
                    />
                    <RemoveButton
                        index={this.props.index}
                        handleRemoveChart={this.props.handleRemoveChart}
                    />
                </div>
            </div>
        );
    }
}

export default MultiChart;
