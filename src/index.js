import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  <MoralisProvider appId="ftKwO5PdDCXev88p3LOlx2N8n5ufkPZBTW4KSoVj" serverUrl="https://lba57i6jok6q.usemoralis.com:2053/server">
    <App />
  </MoralisProvider>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
