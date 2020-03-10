const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const peopleReducer = (state, a) => {
    if ( a.type === ADD_MESSAGE) {
        let p = {
            id : state.MessageData.length + 1,
            message : state.newMessageText
        };
        state.MessageData.push(p);
        state.newMessageText = '';  
    }

    else if (a.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = a.newText;
    }
    return state;
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

export default peopleReducer;