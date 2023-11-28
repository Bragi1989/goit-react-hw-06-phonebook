import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from './components/redux/store';
import App from './components/App';
import { PersistGate } from 'redux-persist/integration/react';

const root = document.getElementById('root');

const app = (
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
  </React.StrictMode>
);

ReactDOM.createRoot(root).render(app);