import React from 'react';
import classes from'./Post.module.css';



const Post = (props) => {

  return (
    <div className={classes.post}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTRJxncjV2A5ciZwN4vVYyS-kX0PF88PtAH2dppQVnU-nx9O7B'/>
      {props.text}
      <button>Like</button>
      <span>Likes: {props.likeAmount}</span>
    </div>
  )
}



export default Post;