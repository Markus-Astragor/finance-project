import React from 'react'
import styles from './Register.module.css';
import { NavLink } from 'react-router-dom';


function Register() {
    return (
        <div className={styles.registerBlock}>
            <div className={styles.Register}>
                <form>
                    <div className={styles.registerText}>
                        <h2>Sign Up</h2>
                        <p style={{ opacity: '0.5' }}>Welcome. Enter your credentials to create your account</p>
                    </div>
                    <div className={styles.registerForm}>
                        <div className={styles.inputsBlock}>
                            <span className={styles.nameForFields}>Email Address</span>
                            <input type='email' className={styles.inputsForFields} required />
                        </div>
                        <div className={styles.inputsBlock}>
                            <span className={styles.nameForFields}>Password</span>
                            <input type='password' className={styles.inputsForFields} required />
                        </div>
                        <div className={styles.inputsBlock}>
                            <span className={styles.nameForFields}>Repeat Password</span>
                            <input type='password' className={styles.inputsForFields} required />
                        </div>
                        <div className={styles.inputsBlockCheckcbox}>
                            <div className={styles.CheckboxWrapper}>
                                <input type='checkbox' className={styles.Checkbox} />
                            </div>
                            <div>Keep me signed in</div>
                        </div>
                        <div className={styles.Submit}>
                            <div className={styles.buttonWrapper}>
                                <button>Countinue</button>
                            </div>
                        </div>
                        <div className={styles.accountExists}>
                            <p>Have an account? <span style={{ color: '#047857' }}><NavLink to='/login' style={{ textDecoration: 'none', color: '#047857', cursor: 'pointer' }}>Login here</NavLink></span></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register