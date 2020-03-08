import React from 'react';
import classes from'./Profile.module.css';
import Myposts from './Myposts/Myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

  return (
    <div className={classes.content}>
      <ProfileInfo />
      <Myposts PostData={props.profileState.PostData} newPostText={props.profileState.newPostText} dispatch={props.dispatch} />
    </div>
  )
}



export default Profile;