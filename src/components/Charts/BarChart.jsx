import React from 'react';
import Chart from 'chart.js';

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    this.myChart = new Chart(this.chartRef.current, {
      type: 'bar',
      data: this.props.data,
      options: {
        responsive: true,
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: this.props.title
        }
      }
    });
  }

  render() {
    return <canvas ref={this.chartRef} />;
  }
}

export default BarChart;
