import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';




const Navbar = () => {
    return (
        <nav className={classes.nav}>
          <div className={classes.nav__item}> <NavLink to='/Profile' activeClassName={classes.active}>Profile</NavLink></div>
          <div className={classes.nav__item}> <NavLink to='/Dialogs' activeClassName={classes.active}>Messages</NavLink></div>
          <div className={classes.nav__item}> <a href='#' >News</a></div>
          <div className={classes.nav__item}> <a>Music</a></div>
          <div className={classes.nav__item}> <a>Settings</a></div>
      </nav>
    )
}

export default Navbar;