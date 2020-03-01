import * as serviceWorker from './serviceWorker';
import state from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "styled-components/macro";

import {addPost, updateNewPostText, subscribe} from './redux/state';


let reRenderTree = (state) => {

    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
    document.querySelector('.app')
    );

}

reRenderTree(state);

subscribe(reRenderTree);

serviceWorker.unregister();







