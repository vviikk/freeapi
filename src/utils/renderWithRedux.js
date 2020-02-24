import React from 'react';
import thunk from 'redux-thunk';
import { render } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducer from '~scenes/rootReducer';

export default (
    component,
    { initialState, store = createStore(reducer, initialState, applyMiddleware(thunk)) } = {},
) => ({
    ...render(<Provider store={store}>{component}</Provider>),
    ...store,
});
