import React from 'react';
import classes from'./Myposts.module.css';
import Post from './Post/Post';

const Myposts = (props) => {

  let PostArr = props.post.PostData.map( el => <Post text={el.text} likeAmount={el.likeAmount}/>  );

  let newPostEl = React.createRef();

  let onaddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text=newPostEl.current.value;
    props.updateNewPostText(text);
  };

  return (

      <div className={classes.profie__posts}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea ref = {newPostEl} onChange={onPostChange} value={props.post.newPostText} />
          </div>
          <div>
            <button onClick={onaddPost} >Add post</button>
          </div>
        </div>

        <div className={classes.posts}>
        {PostArr}
        </div>
      </div>

  )
}



export default Myposts;