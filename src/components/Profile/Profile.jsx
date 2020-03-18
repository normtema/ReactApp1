import React from 'react';
import classes from'./Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MypostsContainer from './Myposts/MypostsContainer';


const Profile = (props) => {

  return (
    <div className={classes.content}>
      <ProfileInfo />
      <MypostsContainer  />
    </div>
  )
}



export default Profile;