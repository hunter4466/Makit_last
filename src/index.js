import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/configureStore';
import './styles/_fonts.scss';
import './styles/_store.scss';
import './styles/_main.scss';
import './styles/_cart.scss';
import './styles/_home.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
