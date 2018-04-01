import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routes/Router'

const jsx = (
    <Provider >
      <AppRouter/>
    </Provider>
  )

render(jsx, document.getElementById('app'))