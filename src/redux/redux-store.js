import { createStore, combineReducers } from "redux";
import peopleReducer from "./people-reducer";
import postReducer from "./post-reducer";
import sidebarReducer from "./sidebar-reducer";


let reducers = combineReducers({
    people: peopleReducer,
    post: postReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);




export default store;