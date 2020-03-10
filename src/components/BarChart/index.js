import React, { Component } from 'react';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';

import { averagePrices, getBrands } from '../Charts/MultiChart/multiyears';

class BarChart extends Component {
    constructor(props) {
        super(props);
        console.log("BarChart constructor ran")
        const dataBrands = props.brands;
        const priceData = averagePrices(dataBrands[0]);
        const years = ["2018Prices", '2019Prices', '2020Prices'];
        const prices = dataBrands.map(brand => averagePrices(brand)['2020'])//[priceData['2020']]
        const brands = props.brands;
        this.calcData = this.calcData.bind(this);

        this.state = {
            chartData: {
                labels: brands,
                datasets: [
                    {
                        label: 'SEK',
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
    static defaultProps = {
        displayTitle: true,
        displayLegend: false,
        legendPosition: 'bottom'

    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState.chartData.labels);
        console.log(this.state.chartData.labels);

        if (prevState.chartData.labels !== this.state.chartData.labels) {
            console.log("TRUE! " + prevProps.brands);
            const dataBrands = prevProps.brands;
            const years = ["2018Prices", '2019Prices', '2020Prices'];
            const prices = dataBrands.map(brand => averagePrices(brand)['2020'])//[priceData['2020']]
            const brands = prevProps.brands;
            this.setState({
                chartData: {
                    labels: brands,
                    datasets: [
                        {
                            label: 'SEK',
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
            });
        }
    }
    calcData(brands) {
        const years = ["2018Prices", '2019Prices', '2020Prices'];
        const prices = brands.map(brand => parseInt(averagePrices(brand)['2020']))//[priceData['2020']]
        return ({
            labels: brands,
            datasets: [
                {
                    label: 'SEK',
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
        );

    }
    render() {
        console.log("render ran!");
        return (
            <div className="BarChart">
                <Bar
                    width={200}
                    height={200}
                    options={{ maintainAspectRatio: false }}
                    data={this.calcData(this.props.brands)}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'MULTI',
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
        )
    }
}

export default BarChart;