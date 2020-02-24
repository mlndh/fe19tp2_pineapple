import React, { Component } from 'react';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';

import { unique, averagePrices } from './data';
class Chart extends Component {
    constructor(props) {
        super(props);
        const priceData = averagePrices(); // {audi: 340000, volvo: 105000}
        const brands = Object.keys(priceData);
        const prices = Object.values(priceData)

        this.state = {
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
        /*         this.state = {
                    chartData: {
                        labels: ['Stockholm', 'Göteborg', 'Malmö', 'Uppsala', 'Örebro', 'Lund'],
                        datasets: [
                            {
                                label: 'Population',
                                data: [
                                    1515017,
                                    572799,
                                    301706,
                                    149245,
                                    115765,
                                    87244
                                ],
                                backgroundColor: [
                                    'pink',
                                    'powderblue',
                                    'plum',
                                    'moccasin',
                                    'lightGreen',
                                    'silver'
                                ]
                            }
                        ]
                    }
                } */
    }
    static defaultProps = {
        displayTitle: true,
        displayLegend: false,
        legendPosition: 'bottom'

    }
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
                            text: 'Cities in Stockholm',
                            fontSize: 23
                        },
                        legend: {
                            display: this.props.displayTitle,
                            position: this.props.legendPosition
                        }
                    }
                    }

                />
            </div>
        )
    }
}

export default Chart;