/* eslint-disable import/no-extraneous-dependencies */
import thunkMiddleware from 'redux-thunk';
import {
    createStore,
    applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import withReduxEnhancer from 'addon-redux/enhancer';

import { createLogger } from 'redux-logger';

import rootReducer from './rootReducer';

const createMiddlewareEnhancer = ({isAddLogger = true}) => {
    const middleware = [];
    middleware.push(thunkMiddleware);
    if (process.env.NODE_ENV !== 'production' && isAddLogger) {
        middleware.push(createLogger());
    }

    return applyMiddleware(...middleware);
};

const createEnhancer = (options) => {
    const enhancers = [];
    enhancers.push(createMiddlewareEnhancer(options));
    if (process.env.NODE_ENV !== 'production') {
        enhancers.push(withReduxEnhancer);
    }

    return composeWithDevTools(...enhancers);
};

/** This function only wraps the store so that we can have hot module replacement during development */
const configureStore = (preLoadedState, options = {}) => {
    const store = createStore(rootReducer, preLoadedState, createEnhancer(options));
    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./rootReducer', () => (console.log('hot') || true) && store.replaceReducer(rootReducer));
    }

    return store;
};

export default (initialState = {}, options = {}) => configureStore(initialState, options);;
