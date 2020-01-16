/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Confirmed = props => (
  <div className="container loading">
    <div className="row">
      <div className="col-md-12 text-center pt-4">
        <FontAwesomeIcon size="2x" color="green" icon={faCheckCircle} />
        {props.txId ? (
          <>
            <Row className="justify-content-center">
              <a
                href={`https://etherscan.io/tx/${props.txId}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                View Transaction on Etherscan
              </a>
            </Row>
            <Row className="justify-content-center">
              <a
                href="https://twitter.com/intent/tweet?text=I%20just%20got%20instant%20access%20to&hashtags=defi&via=DeFi_Zap"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tweet it out{' '}
                <FontAwesomeIcon size="lg" color="#1DA1F2" icon={faTwitter} />
              </a>
            </Row>
          </>
        ) : null}
      </div>
    </div>
  </div>
);

export default Confirmed;
