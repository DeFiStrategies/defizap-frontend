import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ethereum from '../../assets/FooterIcons/ethereum.svg';
import synthetix from '../../assets/FooterIcons/synthetix.svg';
import bzx from '../../assets/FooterIcons/bzx.svg';
import compound from '../../assets/FooterIcons/compound.svg';
import kyber from '../../assets/FooterIcons/kyber.svg';
import tokensets from '../../assets/FooterIcons/set-logo-color.svg';
import uniswap from '../../assets/FooterIcons/uniswap.svg';

const FooterView = () => (
  <>
    <Row className="justify-content-center px-1 mb-1">
      <h2>Built On</h2>
    </Row>
    <Row className="px-0 mx-0 text-center justify-content-center mb-4">
      <Col sm md lg className="p-1">
        <img src={ethereum} width="250px" alt="ethereum" />
      </Col>
      <Col sm md lg className="p-1">
        <img src={compound} width="200px" alt="compound" />
      </Col>
      <Col sm md lg className="p-1">
        <img src={bzx} width="120px" alt="bzx" />
      </Col>
      <Col sm md lg className="p-1">
        <img src={kyber} width="100px" alt="kyber" />
      </Col>
      <Col sm md lg className="py-2 m-1">
        <img src={synthetix} width="200px" alt="synthetix" />
      </Col>
      <Col sm md lg className="p-1">
        <img src={uniswap} width="60px" alt="uniswap" />
      </Col>{' '}
      <Col sm md lg className="p-1">
        <img src={tokensets} width="100px" alt="tokensets" />
      </Col>
    </Row>
  </>
);

export default FooterView;
