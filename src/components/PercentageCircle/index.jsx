import React from 'react';

import '../../App.css';

const DEFAULT_VALUE = 0;
const DEFAULT_COLOR = '#5540BF';
const DEFAULT_MAX_VALUE = 100;

export default props => {
  const percentage = props.percentage || DEFAULT_VALUE;
  const color = props.color || DEFAULT_COLOR;
  const maxValue = props.maxValue || DEFAULT_MAX_VALUE;

  const radius = 90;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - dashArray * (percentage / maxValue);

  return (
    <div className="circleContainer mx-3">
      <svg viewBox="0 0 200 200">
        <circle
          className="circleBackground"
          cx="100"
          cy="100"
          r={radius}
          strokeWidth="10px"
        />
        <circle
          className="circleProgress"
          cx="100"
          cy="100"
          r={radius}
          strokeWidth="15px"
          transform="rotate(-90 100 100)"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
            stroke: color
          }}
        />
        <foreignObject x="20%" y="25%" width="150" height="100">
          <p
            xmlns="http://www.w3.org/1999/xhtml"
            className="circleText d-flex"
            style={{ color: 'black' }}
          >
            {percentage}
            <span className="percentageText mt-4">%</span>
          </p>
        </foreignObject>
      </svg>
    </div>
  );
};
