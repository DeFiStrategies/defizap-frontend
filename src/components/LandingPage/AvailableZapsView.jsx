import React from 'react';
import Container from 'react-bootstrap/Container';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Zaps from '../../constants/Zaps';
import ZapCardsView from '../ZapCards/ZapCardsView';

const calculateNumberOfSlides = () => {
  if (window.innerWidth < 800) return 1;
  if (window.innerWidth < 1025) return 2;
  return 3;
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: calculateNumberOfSlides(),
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true
};

const AvailableZapsView = () => (
  <Container className="my-2 py-4">
    <h2 className="pt-1 pb-1 text-center">Available Zaps</h2>
    <Slider {...settings}>
      {Object.values(Zaps)
        .filter(zap => zap.isOrderable === true)
        .map(zap => (
          <div key={zap.id} className="mx-2 px-2">
            <ZapCardsView basketData={zap} />
          </div>
        ))}
    </Slider>
  </Container>
);

export default AvailableZapsView;
