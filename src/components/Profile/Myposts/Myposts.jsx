import React from 'react';
import classes from'./Myposts.module.css';
import Post from './Post/Post';


const Myposts = () => {

  let PostData = [
    {id:1, text: "Hello, it's my first post", likeAmount:3},
    {id:2, text: "Hello, it's my second post", likeAmount:12},
    {id:3, text: "Hello, it's my third post", likeAmount:17},
    {id:4, text: "Hello, it's my fourth post", likeAmount:25},

  ];

  let PostArr = PostData.map( el => <Post text={el.text} likeAmount={el.likeAmount}/> );

  return (

      <div className='profie__posts'>
        My posts
        {PostArr}

      </div>

  )
}



export default Myposts;