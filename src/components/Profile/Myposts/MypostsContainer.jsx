import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/post-reducer';
import Myposts from './Myposts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { 
      post: state.post
  };
};

const mapDispatchToProps = (dispatch) => {
  return { 
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
          dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  };
};

const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);


export default MypostsContainer;