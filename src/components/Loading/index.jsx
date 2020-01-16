import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loading = () => (
  <div className="container loading">
    <div className="row">
      <div className="col-md-12 text-center pt-4">
        <FontAwesomeIcon size="2x" color="blue" icon={faSpinner} spin />
      </div>
    </div>
  </div>
);

export default Loading;
