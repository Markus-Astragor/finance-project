import React, { useState } from 'react';
import styles from './main_page.module.css';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import burgerIcon from '../../images/main_page/dollar-coin.png';

function MainPage() {


  const [burger, setBurger] = useState(false);
  return (
    <div className={styles.main_page}>

        <div className={styles.container}>
          <div className={styles.main_page_content}>

              <div className={styles.content_header}>
                <div className={styles.content_header_logo}><Logo/></div>
                <div className={styles.content_header_navbar}>
                  <div className={styles.navbar_item}>About Us</div>
                  <div className={styles.navbar_item}>Our Project</div>
                  <div className={styles.navbar_item}>Money+</div>
                  <div className={styles.navbar_item}>Info</div>
                  <div className={styles.navbar_item}>QA</div>
                </div>

                <div onClick={() =>{setBurger(true)}} className={styles.burger}>
                  <img src={burgerIcon}/>
                </div>

                {/* <div className={burger ? styles.show_burger_navbar: styles.burger_navbar}>
                  some Test
                </div> */}
              </div>

              <div className={styles.main_page_content_info}>
                <div className={styles.content_info_title}>Your finance keeper</div>
                <div className={styles.content_info_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit viverra porta. Cras nec magna erat. Morbi erat leo, malesuada eu feugiat ut.
                </div>
                <div className={styles.content_info_buttons}>
                  <NavLink to='/login' className={styles.content_info_btn}>login</NavLink>
                  <NavLink to='/register' className={styles.content_info_btn}>Register</NavLink>
                </div>
              </div>
          </div>
        </div> 

    </div>
  )
}

export default MainPage