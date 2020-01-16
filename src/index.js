import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'; // Important because our Bootstrap CSS comes from here
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from './store';
import './index.css';
import Loading from './components/Loading';
import { initializeGA, registerPageView } from './api/googleAnalytics';

const basename = process.env.REACT_APP_ROUTER_BASENAME || '';
const history = createBrowserHistory({ basename });
const store = configureStore({}, history);

const rootElement = document.getElementById('root');

initializeGA();

history.listen(location => {
  registerPageView(location.pathname);
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App history={history} />
    </ConnectedRouter>
  </Provider>,
  rootElement
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = lazy(() => <App />);

    ReactDOM.render(
      <Provider store={store}>
        <Suspense fallback={<Loading />}>
          <NextApp history={history} />
        </Suspense>
      </Provider>,
      rootElement
    );
  });
}
