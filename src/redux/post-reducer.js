const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const postReducer = (state, a) => {
    if ( a.type === ADD_POST) {
        let p = {
            id : state.PostData.length + 1,
            text : state.newPostText,
            likeAmount: 33
        };
        state.PostData.push(p);
        state.newPostText = '';
    }

    else if (a.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = a.newText;
    }
    return state;
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

export default postReducer; 