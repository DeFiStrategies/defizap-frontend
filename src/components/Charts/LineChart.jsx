import React from 'react';
import Chart from 'chart.js';

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    const { data, title, xLabel, yLabel } = this.props;
    this.myChart = new Chart(this.chartRef.current, {
      type: 'line',
      data,
      options: {
        responsive: true,
        title: {
          display: true,
          text: title
        },
        tooltips: {
          mode: 'index',
          intersect: false
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: xLabel
              }
            }
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: yLabel
              }
            }
          ]
        }
      }
    });
  }

  render() {
    return <canvas ref={this.chartRef} />;
  }
}

export default LineChart;
