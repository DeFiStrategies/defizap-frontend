import React from 'react';
import '../App.css';

const Card = ({ price, name }) => (
  <div className="card">
    <div className="card-body">
      <div className="card-body text-center">
        <div className="text-center my-2 font30" id="dashAssets">
          ${price}
        </div>
        <p className="text-center text-muted">{name}</p>
      </div>
    </div>
  </div>
);

export default Card;
