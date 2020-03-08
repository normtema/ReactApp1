import * as serviceWorker from './serviceWorker';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "styled-components/macro";




let reRenderTree = (state) => {

    ReactDOM.render(
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} />,
    document.querySelector('.app')
    );

}

reRenderTree(store.getState());

store.subscribe(reRenderTree);

serviceWorker.unregister();







