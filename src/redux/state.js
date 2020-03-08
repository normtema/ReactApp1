const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('changed');
    },

    dispatch(a) {
        if ( a.type === ADD_POST) {
            let p = {
                id : this._state.post.PostData.length + 1,
                text : this._state.post.newPostText,
                likeAmount: 33
            };
            this._state.post.PostData.push(p);
            this._state.post.newPostText = '';
            this._callSubscriber(this._state);  
        }

        else if (a.type === UPDATE_NEW_POST_TEXT) {
            this._state.post.newPostText = a.newText;
            this._callSubscriber(this._state);
        }

        else if ( a.type === ADD_MESSAGE) {
            let p = {
                id : this._state.people.MessageData.length + 1,
                message : this._state.people.newMessageText
            };
            this._state.people.MessageData.push(p);
            this._state.people.newMessageText = '';
            this._callSubscriber(this._state);  
        }

        else if (a.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.people.newMessageText = a.newText;
            this._callSubscriber(this._state);
        }
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

};

export const addPostActionCreator = () => {
    return  {
      type: ADD_POST
    };
  };

  export const updateNewPostTextActionCreator = (text) => {
    return {
      type: UPDATE_NEW_POST_TEXT, newText: text
    };
  };

  export const addMessageActionCreator = () => {
    return  {
      type: ADD_MESSAGE
    };
  };

  export const updateNewMessageTextActionCreator = (text) => {
    return {
      type: UPDATE_NEW_MESSAGE_TEXT, newText: text
    };
  };





export default store;