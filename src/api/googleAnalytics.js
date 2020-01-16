import ReactGA from 'react-ga';

import { GOOGLE_ANALYTICS_TRACKING_ID } from '../constants/valueConstants';

export const initializeGA = () => {
  ReactGA.initialize(GOOGLE_ANALYTICS_TRACKING_ID);
};

export const registerPageView = location => {
  ReactGA.pageview(location.pathname);
};

export const registerEvent = ({
  category = '',
  action = '',
  label = '',
  value = 1
}) => ReactGA.event({ category, action, label, value });
