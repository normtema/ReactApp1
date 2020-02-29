import React from 'react';
import classes from'./Myposts.module.css';
import Post from './Post/Post';


const Myposts = (props) => {

  let PostArr = props.PostData.map( el => <Post text={el.text} likeAmount={el.likeAmount}/> );


  let newPostEl = React.createRef();

  let addPost = () => {
    let text = newPostEl.current.value;
    props.addPost(text);
  };

  return (

      <div className={classes.profie__posts}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea ref = {newPostEl} ></textarea>
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