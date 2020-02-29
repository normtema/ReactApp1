import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "styled-components/macro";

import {addPost} from './redux/state';







export let reRenderTree = (state) => {

    ReactDOM.render(
        <App state={state} addPost={addPost} />,
    document.querySelector('.app')
    );

}