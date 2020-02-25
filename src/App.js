import React from 'react';
import './App.css';
import '~lang';

import { createStore, Provider } from 'redux-peasy';
import CardsList from 'views/CardsList/CardsList';
import rootReducer from './rootReducer';

function App() {
  return (
    <Provider store={createStore(rootReducer)}>
      <div className="App">
        <CardsList/>
      </div>
    </Provider>
  );
}

export default App;
