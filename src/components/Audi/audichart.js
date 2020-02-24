import React, { Component } from 'react';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';

import { unique, averageYears } from './audiyears';
class AudiChart extends Component {
    constructor(props) {
        super(props);
        const yearData = averageYears(); // {audi: 340000, volvo: 105000}
        const brands = Object.keys(yearsData);
        const years = Object.values(yearsData)

        this.state = {
            chartData: {
                labels: brands,
                datasets: [
                    {
                        label: 'Population',
                        data: years,
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
    /*  componentDidMount() {
         console.log(unique);
 
     } */
    render() {
        return (
            <div>
                <div className="chart">
                    <Line
                        data={this.state.chartData}
                        options={{
                            title: {
                                display: this.props.displayTitle,
                                text: 'Overall Look',
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

export default AudiChart;