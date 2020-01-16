import React from 'react';
import Chart from 'chart.js';

class StackedBarChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    this.myChart = new Chart(this.chartRef.current, {
      type: 'bar',
      data: this.props.data,
      options: {
        title: {
          display: true,
          text: this.props.title
        },
        tooltips: {
          mode: 'index',
          intersect: false
        },
        responsive: true,
        scales: {
          xAxes: [
            {
              stacked: true
            }
          ],
          yAxes: [
            {
              stacked: true
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

export default StackedBarChart;
