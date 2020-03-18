import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "styled-components/macro";
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';


    ReactDOM.render(
        <BrowserRouter>
        <Provider store={store}>
        <App/> 
        </Provider>
        </BrowserRouter> ,
    document.querySelector('.app')
    );


serviceWorker.unregister();





