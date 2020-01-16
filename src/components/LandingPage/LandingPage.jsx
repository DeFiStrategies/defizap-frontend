import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import styles from './LandingPage.module.css';
import NavigationBar from '../NavigationBar';
import WhyUseDeFiZap from './WhyUseDeFiZap';
import AvailableZaps from './AvailableZapsView';
import ExploreZapsButton from './ExploreZapsButton';
import Hero from './Hero';
import Footer from '../Footer';
import TwitterFeed from '../TwitterFeed';

const LandingPage = () => (
  <>
    <Navbar bg="primary" variant="dark" className={styles.bannerTop}>
      <Navbar.Brand className={styles.anchorTag}>
        🏆
        <a
          href="https://blog.kyber.network/kyberdefi-hackathon-meet-the-winners-bea5bc9ec983"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white', textDecoration: 'underline' }}
          id="anchorTag"
          className="h6"
        >
          DeFiZap wins #KyberDeFi Hackathon
        </a>
        🏆
      </Navbar.Brand>
    </Navbar>
    <Container>
      <NavigationBar isLandingPage />
      <Hero />
      <WhyUseDeFiZap />
      <AvailableZaps />
      <ExploreZapsButton />
      <Footer />
      <Container>
        <h2 className="pt-1 pb-1 text-center">Fan Love</h2>
      </Container>
      <TwitterFeed />
      <div className="text-center py-1 mb-2">
        <h4 className="pt-1">DeFiZap</h4>
        <div className="text-muted">
          <p>
            Please note that DeFiZap is an experimental project. DeFiZap is not
            providing any investment advisory or recommendation service. By
            using DeFiZap or its services, you agree that you are using the
            Services at your own risk and that you will not and do not hold
            DeFiZap or its team members liable should the services not perform
            as per your expectation.
          </p>
          <p>
            DeFiZap is not a licensed financial advisor under any law. Please
            consult your own independent investment advisor before making any
            investment decisions.
          </p>
        </div>
      </div>
    </Container>
  </>
);

export default LandingPage;
