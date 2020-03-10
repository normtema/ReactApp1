import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "styled-components/macro";
import { BrowserRouter } from 'react-router-dom';




let reRenderTree = (state) => {

    ReactDOM.render(
        <BrowserRouter>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} /> 
        </BrowserRouter> ,
    document.querySelector('.app')
    );

}

reRenderTree(store.getState());

store.subscribe(reRenderTree);

serviceWorker.unregister();







