import { lazy } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from '../reducers';
import DevTools from '../components/ReduxDevTools';

const configureStore = (initialState, history) => {
  const middlewares = [thunk, routerMiddleware(history)];
  const storeEnhancers = [];

  const isDev = process.env.NODE_ENV !== 'production';
  if (isDev) {
    // allow devs to use their own plugged in browser redux dev tool instead of the builtin component
    const devTools = DevTools();
    const devToolsEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : devTools.instrument();
    storeEnhancers.push(devToolsEnhancer);
  }

  const middlewareEnhancer = applyMiddleware(...middlewares);
  storeEnhancers.unshift(middlewareEnhancer);

  const store = createStore(
    rootReducer(history),
    initialState,
    compose(...storeEnhancers)
  );

  if (isDev && module.hot && module.hot.accept) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = lazy(() => import('../reducers'));
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
};

export default configureStore;
