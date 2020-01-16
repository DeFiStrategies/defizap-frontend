import React from 'react';
import Container from 'react-bootstrap/Container';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';

const HowItWorks = () => (
  <Container className="pt-2 pb-4">
    <ResponsiveEmbed aspectRatio="21by9" frameBorder="0">
      <iframe
        title="How DeFiZap works tutorial"
        src="https://www.youtube.com/embed/6kgaF3G8EVw"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </ResponsiveEmbed>
  </Container>
);

export default HowItWorks;
