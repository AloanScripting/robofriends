import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App'
import reportWebVitals from './reportWebVitals';
import 'tachyons';
// import { hydrateRoot } from 'react-dom/client';


ReactDOM.createRoot(document.getElementById('root')).render(<App />);
// The above was from ZTM. below is how I fixed it initially
// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render (
//     <App />
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
