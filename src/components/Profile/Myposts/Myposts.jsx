import React from 'react';
import classes from'./Myposts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/post-reducer';

const Myposts = (props) => {

  let PostArr = props.PostData.map( el => <Post text={el.text} likeAmount={el.likeAmount}/>  );


  let newPostEl = React.createRef();


  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text=newPostEl.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (

      <div className={classes.profie__posts}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea ref = {newPostEl} onChange={onPostChange} value={props.newPostText} />
          </div>
          <div>
            <button onClick={addPost} >Add post</button>
          </div>
        </div>

        <div className={classes.posts}>
        {PostArr}
        </div>
      </div>

  )
}



export default Myposts;