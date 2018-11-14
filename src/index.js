import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store from './store'
import persistor from './store/persistor'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { PersistGate } from 'redux-persist/integration/react'
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <Router history={history}>
      <App />
    </Router>
    </PersistGate>
  </Provider>, document.getElementById('root'));

serviceWorker.unregister();