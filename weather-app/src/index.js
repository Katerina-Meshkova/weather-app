import React from 'react';
import './styles/styles.css';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';
import { getWeather } from './actions/weatherAction';
import App from './components/App';

store.dispatch(getWeather('Новосибирск'));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
