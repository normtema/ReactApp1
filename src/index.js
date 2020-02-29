import './index.css';
import * as serviceWorker from './serviceWorker';
import "styled-components/macro";
import state from './redux/state';
import {reRenderTree} from './render';

reRenderTree(state);




serviceWorker.unregister();







