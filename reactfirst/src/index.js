import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test from './test';
import Test2 from './test2';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Test />
    <Test2 
   img="logo192.png"
    />
    <Test2 
    img="logo512.png"
    content="this is content"
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
