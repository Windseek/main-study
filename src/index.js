import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import config from './router/config';

const reducer = (state=0, action) => {
  switch(action.type) {
    case 'plus': 
      return ++state;
    case 'minute': 
      return --state;
    default:
      return state;
  }
}
const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {renderRoutes(config)}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
