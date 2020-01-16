import React from 'react';
import isEmpty from 'lodash/isEmpty';
import Card from 'react-bootstrap/Card';

import '../../App.css';
import Donut from '../PercentageDoughnut';

const ZapCardsView = props => {
  const {
    basketData: { id }
  } = props;

  if (!isEmpty(props.basketData)) {
    if(props.basketData.name.length >= 13 && window.innerWidth < 768) props.basketData.name = props.basketData.text
    return (
      <Card className="text-center justify-content-center">
        <Card.Body>
          <div className="mb-2 row justify-content-center flex flex-wrap">
            <Donut data={props.basketData} />
          </div>
          <div className="text-center justify-content-center">
            <a href={`/zaps/${id}`}>Learn More</a>
          </div>
        </Card.Body>
      </Card>
    );
  }
  return null;
};

export default ZapCardsView;
