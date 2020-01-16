import React from 'react';
import '../App.css';

import BarChart from './Charts/BarChart';
import LineChart from './Charts/LineChart';
import lineChartData from '../data/tokensets-roi';
import eth20smacoStats from '../data/eth20smaco-stats';
import nineElevelStats from '../data/9-11-stats';
import eightTwentyNineStats from '../data/8-29-stats';
import averageRebalance from '../data/average-rebalance';
import ethTokensetsGainLoss from '../data/eth-tokenset-gainloss';
import ethTokensetsNineEleven from '../data/eth-tokenset-9-11';
import StackedBarChart from './Charts/StackedBarChart';

const DisplayCharts = ({ marketcaps }) => {
  const barChartData = {
    labels: ['Market Cap (USD)'],
    datasets: marketcaps.map(({ name, price, color }) => ({
      label: name,
      borderColor: color,
      backgroundColor: color,
      data: [price]
    }))
  };

  return (
    <div className="container-fluid my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-xl-8">
          <BarChart data={barChartData} title="TokenSets Market Cap (USD)" />
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-xl-8">
          <LineChart
            data={lineChartData}
            title="10 day stats"
            xLabel="Date"
            yLabel="ROI(%)"
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-xl-8">
          <StackedBarChart
            data={ethTokensetsGainLoss}
            title="ETH Based TokenSets Gain/Loss"
          />
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-xl-8">
          <LineChart
            data={eth20smacoStats}
            title="30 day stats"
            xLabel="Date"
            yLabel="ROI(%)"
          />
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-xl-12">
          <LineChart
            data={eightTwentyNineStats}
            title="If invested on 8/29"
            xLabel="Date"
            yLabel="ROI(%)"
          />
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-xl-12">
          <LineChart
            data={nineElevelStats}
            title="If invested on 9/11"
            xLabel="Date"
            yLabel="ROI(%)"
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-xl-8">
          <StackedBarChart
            data={ethTokensetsNineEleven}
            title="ETH Based TokenSets Gain/Loss"
          />
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-xl-8">
          <BarChart data={averageRebalance} title="Average rebalance period" />
        </div>
      </div>
    </div>
  );
};

export default DisplayCharts;
