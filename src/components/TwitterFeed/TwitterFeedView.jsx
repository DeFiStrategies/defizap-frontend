import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Spinner from 'react-bootstrap/Spinner';

import tweetList from './listOfTweets';

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
  autoplaySpeed: 4000,
  centerMode: true
};

const TwitterFeedView = () => (
  <>
    <div className='mb-2 pb-2'>
      <Slider {...settings}>
        {Object.values(tweetList).map(tweet => (
          <div key={tweet} className='mx-2 px-2 mb-3'>
            <TwitterTweetEmbed
              tweetId={tweet}
              options={{
                cards: 'hidden',
                width: 430,
                maxWidth: 430
              }}
              placeholder={<Spinner animation='grow' variant='primary' />}
            />
          </div>
        ))}
      </Slider>
    </div>
  </>
);

export default TwitterFeedView;
