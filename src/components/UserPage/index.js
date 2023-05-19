

import React from "react";

import styles from './style.module.css';
import Logo from "../MainPage/Logo";

function UserPage() {
    return(
        <div className={styles.userpage}>
            <div className={styles.userpage_container}>

            <div className={styles.content_header}>

                <div className={styles.content_header_logo}><Logo/></div>
                
                <div className={styles.content_header_navbar}>
                  <div className={styles.navbar_item}>About Us</div>
                  <div className={styles.navbar_item}>Our Project</div>
                  <div className={styles.navbar_item}>Money+</div>
                  <div className={styles.navbar_item}>Info</div>
                  <div className={styles.navbar_item}>QA</div>
                </div>

              </div>

            </div>
        </div>
    )
}


export default UserPage;