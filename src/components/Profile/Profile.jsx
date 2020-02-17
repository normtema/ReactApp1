import React from 'react';
import classes from'./Profile.module.css';
import Myposts from './Myposts/Myposts';


const Profile = () => {

  return (
    <div className={classes.content}>
      <div className='profile__img'>
        <img src="https://www.ef.com/sitecore/__~/media/efcom/2018/ils/destinations/United-states/Miami/Miami-Stage-Destop.jpg" />
      </div>
      <div>
        ava+description
      </div>
      <Myposts />
    </div>
  )
}



export default Profile;