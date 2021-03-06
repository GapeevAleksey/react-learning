import './index.css';
import reportWebVitals from './reportWebVitals';
import { store } from './Components/Redux/redux-store';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
window.store = store;

const rerenderDOM = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerenderDOM();
store.subscribe(rerenderDOM);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
