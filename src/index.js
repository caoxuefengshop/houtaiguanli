import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import store from '../src/store/store'
import * as serviceWorker from './serviceWorker';

// import {BrowserRouter,Route } from "react-router-dom";  

ReactDOM.render(
 
  <React.StrictMode>
    {/* 下面这个是想用react-redux */}
  {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
  // ReactDOM.render(
  //   <BrowserRouter>
  //   <Route path="/" component={App} />


  //   </BrowserRouter>,
  //   document.getElementById('root')
  // )




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
