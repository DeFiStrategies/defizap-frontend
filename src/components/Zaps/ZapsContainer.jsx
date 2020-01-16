import React, { PureComponent } from 'react';
import autobind from 'react-autobind';
import isEmpty from 'lodash/isEmpty';

import ZapsView from './ZapsView';
import Zaps from '../../constants/Zaps';
import ZapStats from '../../api/zapStats';

class ZapsContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      basketData: {}
    };
    autobind(this);
  }

  async componentDidMount() {
    let stats = null;
    try {
      stats = await ZapStats();
    } catch (e) {
      console.error(e);
    }
    const { id } = this.props.match.params;
    this.setState({ id });
    const basketData = Zaps[id];
    if (!isEmpty(basketData)) {
      if (stats) {
        stats.forEach(stat => {
          if (stat.name === basketData.name) basketData.stats = stat;
        });
      }
      this.setState({ basketData });
    }
  }

  render() {
    const { basketData } = this.state;
    return <ZapsView basketData={basketData} />;
  }
}

export default ZapsContainer;
