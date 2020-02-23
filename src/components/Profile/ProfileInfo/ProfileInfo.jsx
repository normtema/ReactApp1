import React from 'react';
import classes from'./ProfileInfo.module.css';



const ProfileInfo = () => {

  return (
    <div>
      <div className={classes.profile__img}>
        <img src="https://www.ef.com/sitecore/__~/media/efcom/2018/ils/destinations/United-states/Miami/Miami-Stage-Destop.jpg" />
      </div>
      <div>
        ava+description
      </div>
    </div>
  )
}



export default ProfileInfo;