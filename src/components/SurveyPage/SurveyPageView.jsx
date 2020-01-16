import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Stepper from '@material-ui/core/Stepper';
import Spinner from 'react-bootstrap/Spinner';
import Step from '@material-ui/core/Step';
import Row from 'react-bootstrap/Row';
import isEmpty from 'lodash/isEmpty';

import { StepLabel, StepContent, Collapse } from '@material-ui/core';
import NavigationBar from '../NavigationBar';
import { Zap } from '../ZapList/ZapListViewV2';
import zaps from '../../constants/Zaps';
import { registerEvent } from '../../api/googleAnalytics';
import { GENERATE_ZAP, SURVEY_PAGE } from '../../constants/googleAnalytics';

const SurveyPageView = props => {
  const {
    onAnswer,
    surveyList,
    reDoSurvey,
    isLoading,
    surveyComplete,
    submitResults,
    recommendedZaps,
    activeStep,
    moveToStep,
    answers,
    isResultsDisabled,
    stats
  } = props;

  const getZap = () => {
    return (
      <>
        <br /> <br />
        <h4>
          You might find these Zaps useful: <br />
        </h4>
        <Row className="justify-content-center">
          {recommendedZaps.map(zap => {
            if (stats)
              stats.forEach(stat => {
                if (zaps[zap].name === stat.name) zaps[zap].stats = stat;
              });
            return <Zap key={zaps[zap].name} {...zaps[zap]} />;
          })}
        </Row>
        <br />
        <Row className="justify-content-center pb-3">
          <Button
            variant="info"
            target="_blank"
            size="lg"
            href="https://defizap.typeform.com/to/UZSZg5"
            type="link"
            className="m-3"
            block
            onClick={() =>
              registerEvent({
                category: GENERATE_ZAP,
                action: SURVEY_PAGE
              })
            }
          >
            Don&apos;t see your Zap? Submit a request and we will create one!
          </Button>
        </Row>
        <Row>
          <h5 style={{ fontSize: 15 }} className="mx-3">
            DISCLOSURE:
            <p>
              Please note that DeFiZap is an experimental project. DeFiZap is
              not providing any investment advisory or recommendation service.
              By using DeFiZap or its services, you agree that you are using the
              Services at your own risk and that you will not and do not hold
              DeFiZap or its team members liable should the services not perform
              as per your expectation.
            </p>
            <p>
              DeFiZap is not a licensed financial advisor under any law. Please
              consult your own independent investment advisor before making any
              investment decisions.
            </p>
          </h5>
        </Row>
      </>
    );
  };

  const generateResult = () => {
    return (
      <>
        <Button
          variant="outline-primary"
          onClick={reDoSurvey}
          className="mx-1 my-3 px-1"
          size="lg"
        >
          Start Over
        </Button>
        <Button
          disabled={isResultsDisabled}
          variant="primary"
          onClick={submitResults}
          className="mx-3 my-3 px-3"
          size="lg"
        >
          Get Results
        </Button>
        {isLoading ? (
          <>
            <Spinner animation="grow" />
            <Spinner animation="grow" />
          </>
        ) : null}
      </>
    );
  };

  const surveySteps = () => {
    return (
      <Collapse in={!surveyComplete}>
        <Stepper
          activeStep={activeStep}
          nonLinear
          orientation="vertical"
          style={{ backgroundColor: 'inherit' }}
        >
          {surveyList.map(question => {
            return (
              <Step
                key={question.questionNumber}
                completed={!isEmpty(answers[question.questionNumber])}
              >
                <StepLabel onClick={() => moveToStep(question.questionNumber)}>
                  <h5>{question.question}</h5>
                  <p className="text-monospace text-uppercase">
                    {answers[question.questionNumber]}
                  </p>
                </StepLabel>
                <StepContent>
                  {question.options.map(option => {
                    return (
                      <Button
                        key={option.value}
                        variant="outline-primary"
                        size="auto"
                        onClick={() => onAnswer(option.key)}
                        className="shadow"
                        block
                      >
                        {option.value}
                      </Button>
                    );
                  })}
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
      </Collapse>
    );
  };

  return (
    <Container>
      <NavigationBar />
      <h4>
        Answer a few multiple choice questions to see which Zap might fit your
        needs
      </h4>
      {surveySteps()}
      {activeStep === 4 ? generateResult() : null}
      {surveyComplete ? getZap() : null}
    </Container>
  );
};

export default SurveyPageView;
