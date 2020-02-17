import React from 'react';
import classes from'./Myposts.module.css';
import Post from './Post/Post';


const Myposts = () => {

  return (

      <div className='profie__posts'>
        My posts
        <Post text="Hello, it's my first post" likeAmount='3'/>
        <Post text="Hello, it's my second post" likeAmount='12'/>
        <Post text="Hello, it's my third post" likeAmount='17'/>
        <Post text="Hello, it's my fourth post" likeAmount='24'/>
      </div>

  )
}



export default Myposts;