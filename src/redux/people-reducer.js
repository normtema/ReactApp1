const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const peopleReducer = (state = initialState, a) => {
  switch (a.type) {
    case ADD_MESSAGE: {
        let p = {
            id : state.MessageData.length + 1,
            message : state.newMessageText
        };
        let stateCopy = {...state};
        stateCopy.MessageData = [...state.MessageData];
        stateCopy.MessageData.push(p);
        stateCopy.newMessageText = '';  
        return stateCopy;
    }

     case UPDATE_NEW_MESSAGE_TEXT: {
        let stateCopy = {...state};
        stateCopy.newMessageText = {...state.newMessageText};
        stateCopy.newMessageText = a.newText;
        return stateCopy;
    }
    default: 
    return state;
  }
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