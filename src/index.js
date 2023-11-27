import React from 'react';
import { createRoot } from 'react-dom/client';
import store from './components/redux/store';
import { Provider } from 'react-redux';
import App from './components/App';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
