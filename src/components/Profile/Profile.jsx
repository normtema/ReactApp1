import React from 'react';
import classes from'./Profile.module.css';
import Myposts from './Myposts/Myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = () => {

  return (
    <div className={classes.content}>
      <ProfileInfo />
      <Myposts />
    </div>
  )
}



export default Profile;