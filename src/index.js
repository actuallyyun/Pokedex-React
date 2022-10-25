import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const TitleComponent = () => {
  return <h1>I am Title!</h1>
}

const Name = () => {
  return <p>My Name is Ttitle</p>
}

const TtitleName = () => {
  return (
    <div>
      <TitleComponent />
      <Name />
    </div>
  )
}

root.render(
  <App />
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
