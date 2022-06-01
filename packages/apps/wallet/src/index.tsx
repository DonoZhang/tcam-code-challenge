import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"

import reducer from "./store/reducer"
import App from './App';

const store: Store & {
  dispatch:any
} = createStore(reducer)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
