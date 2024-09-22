import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FirstApp from './FirstApp';
import {GifExpertApp} from './GifExpertApp'
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <FirstApp value={0} />
    <GifExpertApp/>
  </React.StrictMode>
);

reportWebVitals();
