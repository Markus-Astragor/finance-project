import React from 'react';
import styles from './MainPage.module.css';
import { NavLink } from 'react-router-dom';

function MainPage() {
  return (
    <div className={styles.MainPage}>
        <div className={styles.Pages}>
            <div><NavLink to='/register'>Register</NavLink></div>
            <div><NavLink to='/login'>Login</NavLink></div>
        </div>
        <div className={styles.ContentMainPage}>
            All content is here
        </div>
    </div>
  )
}

export default MainPage