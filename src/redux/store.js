import postReducer from './post-reducer';
import peopleReducer from './people-reducer';
import sidebarReducer from './sidebar-reducer';
 

let store = {

    _state : {
    
        people : {
        PeopleData: [
            {id:1, name: 'Vasya'},
            {id:2, name: 'Kolya'},
            {id:3, name: 'Stasik'},
            {id:4, name: 'Bogdan'},
            {id:5, name: 'Ilya'},
            {id:6, name: 'Dima'},
            ],
        MessageData: [
            {id:1, message: 'Hello!'},
            {id:2, message: 'How are you?'},
            {id:3, message: 'I am fine'},
            ],
        newMessageText: 'add message'   
        },
        post : {
            PostData: [
                {id:1, text: "Hello, it's my first post", likeAmount:3},
                {id:2, text: "Hello, it's my second post", likeAmount:12},
                {id:3, text: "Hello, it's my third post", likeAmount:17},
                {id:4, text: "Hello, it's my fourth post", likeAmount:25},
                ],
            newPostText: 'qweewq'
            },
        sidebar: {}
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('changed');
    },

    dispatch(a) {
        this._state.people = peopleReducer(this._state.people, a);
        this._state.post = postReducer(this._state.post, a);
        this._state.sidebar = sidebarReducer(this._state.sidebar, a);
        
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

};

export default store;