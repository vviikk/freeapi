import React from 'react';
import './App.css';
import '~lang';
import {Provider} from 'react-redux';
import createStore from './store';
import CardsList from 'views/CardsList/CardsList';

function App() {
  return (
    <Provider store={createStore()}>
      <div className="App">
        <CardsList/>
      </div>
    </Provider>
  );
}

export default App;
