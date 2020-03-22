/* eslint-disable default-case */
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [],
};

const usersReducer = (state = initialState, a) => { 
  switch (a.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map( u=> {
          if (u.id === a.userId) {
            return {...u, followed:true};
          }
          return u;
        })
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map( u=> {
          if (u.id === a.userId) {
            return {...u, followed:false};
          }
          return u;
        })
      };
    }
    case SET_USERS: {
      return { 
        ...state,
        users: [...state.users, ...a.users]
      };
    }
    default:
      return state;
  }
};

export const followAC = (userId) => {
    return  {type: FOLLOW, userId};
  };

export const unfollowAC = (userId) => {
    return  { type: UNFOLLOW, userId};
  };


  export const setUsersAC = (users) => {
    return {type: SET_USERS, users };
  };
export default usersReducer;