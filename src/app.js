import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routes/Router'
import configStore from './store/configStore';
import './config.server'
import storage from './firebase/firebase';

const store = configStore();

const jsx = (
  <Provider store={store}>
      <AppRouter/>
  </Provider>
)

render(jsx, document.getElementById('app'))