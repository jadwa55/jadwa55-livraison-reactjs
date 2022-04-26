import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import App from './App';
import allReducers from './reducers/index';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

const persistedReducer = persistReducer({key: 'persist-key', storage}, allReducers);
const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store ={store}>
    <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>,
  document.getElementById('root')
);