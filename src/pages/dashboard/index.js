import React, { Component } from 'react';

import Card from '../../components/Card';
import '../../App.css';
import { fetchTokensSetsAPI, fetchEtherPriceAPI } from '../../api/fetch';
import DisplayCharts from '../../components/DisplayCharts';
import Loading from '../../components/Loading';

class Dashboard extends Component {
  state = { marketprices: [], marketcaps: [], totalMarketCap: null };

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const ethprice = await fetchEtherPriceAPI();
    const rebalancing_sets = await fetchTokensSetsAPI();
    if (rebalancing_sets !== null) {
      const eth12emacoprice = rebalancing_sets && rebalancing_sets[0].price_usd;
      const eth26emacoprice = rebalancing_sets[1].price_usd;
      const eth20smaco = rebalancing_sets[2].price_usd;
      const eth50smaco = rebalancing_sets[3].price_usd;
      const ethminvol = rebalancing_sets[4].price_usd;
      const ethlovol = rebalancing_sets[6].price_usd;
      const ethhivol = rebalancing_sets[8].price_usd;

      const marketprices = [
        { name: 'ETH', price: ethprice },
        { name: 'ETH12EMA', price: eth12emacoprice },
        { name: 'ETH26EMA', price: eth26emacoprice },
        { name: 'ETH20SMACO', price: eth20smaco },
        { name: 'ETH50MACO', price: eth50smaco },
        { name: 'ETHMINVOL', price: ethminvol },
        { name: 'ETHLOVOL', price: ethlovol },
        { name: 'ETHHIVOL', price: ethhivol }
      ];

      const eth12emacomarket = rebalancing_sets[0].market_cap;
      const eth26emacomarket = rebalancing_sets[1].market_cap;
      const eth20smacomarket = rebalancing_sets[2].market_cap;
      const eth50smacomarket = rebalancing_sets[3].market_cap;
      const ethminvolmarket = rebalancing_sets[4].market_cap;
      const ethlovolmarket = rebalancing_sets[6].market_cap;
      const ethhivolmarket = rebalancing_sets[8].market_cap;

      const marketcaps = [
        {
          name: 'ETH12EMA',
          price: eth12emacomarket,
          color: 'rgb(255, 99, 132)'
        },
        {
          name: 'ETH26EMA',
          price: eth26emacomarket,
          color: 'rgb(99, 99, 132)'
        },
        {
          name: 'ETH20SMACO',
          price: eth20smacomarket,
          color: 'rgb(255, 159, 64)'
        },
        {
          name: 'ETH50MACO',
          price: eth50smacomarket,
          color: 'rgb(153, 102, 255)'
        },
        {
          name: 'ETHMINVOL',
          price: ethminvolmarket,
          color: 'rgb(255, 205, 86)'
        },
        { name: 'ETHLOVOL', price: ethlovolmarket, color: 'rgb(2, 24, 190)' },
        { name: 'ETHHIVOL', price: ethhivolmarket, color: 'rgb(38, 38, 38)' }
      ];

      const totalMarketCap = marketcaps.reduce(
        (accumulator, marketprice) =>
          Math.round((accumulator + parseFloat(marketprice.price)) * 100) / 100,
        0
      );
      this.setState({ marketprices, marketcaps, totalMarketCap });
    }
  }

  formatValue(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  render() {
    const { marketprices, marketcaps, totalMarketCap } = this.state;
    return (
      <div>
        <div className="container-fluid mb-5">
          <div
            style={{
              padding: '1.5rem 0',
              borderBottom: '1px solid #e3ebf6'
            }}
            className="ml-5"
          >
            <div className="row align-items-end">
              <div className="col">
                <h6
                  style={{
                    letterSpacing: '.08em',
                    color: '#95aac9'
                  }}
                >
                  OVERVIEW
                </h6>
                <h2 className="mb-0">Dashboard</h2>
              </div>
              <div className="col-auto mr-5">
                <span className="btn btn-primary" id="dashboardBtn">
                  Connect
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="row">
                {!marketprices.length && <Loading />}
                {marketprices &&
                  marketprices.map(({ name, price }) => (
                    <div key={name} className="col-12 col-xl-3">
                      <Card name={name} price={price} />
                    </div>
                  ))}
              </div>
              <hr className="pb-3" />
              <div className="row justify-content-center mb-5">
                <div className="col-12 col-xl-8">
                  {totalMarketCap && (
                    <Card
                      name="Total Market Cap of ETH based TokenSets"
                      price={this.formatValue(totalMarketCap)}
                    />
                  )}
                </div>
              </div>
              <section className="mt-5">
                {marketcaps.length ? (
                  <DisplayCharts marketcaps={marketcaps} />
                ) : null}
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
