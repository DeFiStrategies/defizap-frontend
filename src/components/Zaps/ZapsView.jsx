import React from 'react';
import isEmpty from 'lodash/isEmpty';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import ZapFullViewV2 from './ZapFullViewV2';
import NavigationBar from '../NavigationBar';

import '../../App.css';
import {
  INDIVIDUAL_ZAP_PAGE,
  GENERATE_ZAP
} from '../../constants/googleAnalytics';
import { registerEvent } from '../../api/googleAnalytics';

const ZapsView = props => {
  const { basketData } = props;

  if (!isEmpty(props.basketData)) {
    return <ZapFullViewV2 {...basketData} />;
  }
  return null;
};

const IndividualZapsPage = props => {
  return (
    <Container>
      <NavigationBar />
      {ZapsView(props)}
      <Button
        variant="outline-info"
        target="_blank"
        size="lg"
        href="https://defizap.typeform.com/to/UZSZg5"
        type="link"
        block
        onClick={() =>
          registerEvent({
            category: GENERATE_ZAP,
            action: INDIVIDUAL_ZAP_PAGE
          })}
      >
        Don&apos;t see your Zap? Submit a request and we will create one!
      </Button>
      <br />
    </Container>
  );
};

export default IndividualZapsPage;
