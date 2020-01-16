import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import ZapFullView from '../Zaps/ZapFullView';
import NavigationBar from '../NavigationBar';
import Zaps from '../../constants/Zaps';
import '../../App.css';
import {
  INDIVIDUAL_ZAP_PAGE,
  GENERATE_ZAP
} from '../../constants/googleAnalytics';
import { registerEvent } from '../../api/googleAnalytics';

const ZapListView = () => {
  return (
    <Container>
      <NavigationBar />
      {Object.values(Zaps).map(zap => (
        <ZapFullView
          key={zap.name}
          name={zap.name}
          components={zap.components}
          isOrderable={zap.isOrderable}
          description={zap.description}
          id={zap.id}
        />
      ))}
      <div className="container">
        <div className="row justify-content-center my-1">
          <div className="col-12 col-md-12 col-lg-12 text-center">
            <Button
              variant="outline-info"
              target="_blank"
              size="lg"
              href="/survey"
              type="link"
            >
              Not sure which to pick? Try Zap Generator
            </Button>
            <hr />
            <Button
              variant="outline-info"
              target="_blank"
              size="lg"
              href="https://defizap.typeform.com/to/UZSZg5"
              type="link"
              onClick={() =>
                registerEvent({
                  category: GENERATE_ZAP,
                  action: INDIVIDUAL_ZAP_PAGE
                })
              }
            >
              Don&apos;t see your Zap? Submit a request and we will create one!
            </Button>
          </div>
        </div>
      </div>
      <br />
      <br />
    </Container>
  );
};

export default ZapListView;
