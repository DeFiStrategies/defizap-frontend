import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Rejected = () => (
  <div className="container loading">
    <div className="row">
      <div className="col-md-12 text-center pt-4">
        <FontAwesomeIcon size="2x" color="red" icon={faTimesCircle} />
      </div>
    </div>
  </div>
);

export default Rejected;
