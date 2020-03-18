const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    PostData: [
        {id:1, text: "Hello, it's my first post", likeAmount:3},
        {id:2, text: "Hello, it's my second post", likeAmount:12},
        {id:3, text: "Hello, it's my third post", likeAmount:17},
        {id:4, text: "Hello, it's my fourth post", likeAmount:25},
        ],
    newPostText: 'qweewq'
};


const postReducer = (state = initialState, a) => {
  switch (a.type) {
    case ADD_POST: {
        let p = {
            id : state.PostData.length + 1,
            text : state.newPostText,
            likeAmount: 33
        };
        let stateCopy = {...state};
        stateCopy.PostData = [...state.PostData];
        stateCopy.PostData.push(p);
        stateCopy.newPostText = '';
        return stateCopy;
    }

    case UPDATE_NEW_POST_TEXT: {
        let stateCopy = {...state};
        stateCopy.newPostText = a.newText;
        return stateCopy;
    }
    default:
    return state;
  }
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