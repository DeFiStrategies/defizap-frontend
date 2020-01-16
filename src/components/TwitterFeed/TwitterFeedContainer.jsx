import React, { PureComponent } from 'react';
import autobind from 'react-autobind';

import TwitterFeedView from './TwitterFeedView';

class TwitterFeedContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    autobind(this);
  }

  render() {
    return <TwitterFeedView />;
  }
}

export default TwitterFeedContainer;
