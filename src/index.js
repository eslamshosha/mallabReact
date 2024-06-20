import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';
import '../src/style/main.css';
import '../src/style/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// import 'js/flatpickr.min.js'
// import 'js/jquery-3.4.1.min.js'
// import './js/popper.min.js'
// import './js/sal.js'
// import './js/script.js'
// import './js/select2.min.js'
// import './js/swiper-bundle.min.js'

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
