import React from 'react'
import styles from './Login.module.css';
import { NavLink } from 'react-router-dom';

function Login() {
  return (
    <div className={styles.registerBlock}>
    <div className={styles.Register}>
        <form>
        <div className={styles.registerText}>
            <h2>Login</h2>
            <p style={{opacity: '0.5'}}>Welcome back. Enter your credentials to access your account</p>
        </div>
        <div className={styles.registerForm}>
            <div className={styles.inputsBlock}>
                <span className={styles.nameForFields}>Email Address</span>
                <input type='email' className={styles.inputsForFields} required/>
            </div>
            <div className={styles.inputsBlock}>
                <span className={styles.nameForFields}>Password</span>
                <input type='password' className={styles.inputsForFields} required/>    
            </div>
            <div className={styles.Submit}>
                <div className={styles.buttonWrapper}>
                    <button>Countinue</button>
                </div>
            </div>
            <div className={styles.accountExists}>
              Don`t have an account? <span style={{color: '#047857'}}><NavLink to='/register' style={{textDecoration: 'none', color: '#047857', cursor:'pointer'}}>Sign up here</NavLink></span>
            </div>
        </div>
        </form>
    </div>
</div>
  )
}

export default Login