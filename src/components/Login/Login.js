import React, { useRef, useState } from 'react'
import styles from './Login.module.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';



function Login() {

    const email = useRef(null)
    const password = useRef(null);

    const [loader, setLoader] = useState(false);

    const Submit = (e) => {
        e.preventDefault();
        const emailText = email.current.value;
        const passwordText = password.current.value;

        setLoader(true)

        axios.post('http://localhost:8080/login', {
            email: emailText,
            password: passwordText,
        }).then(response => {
            console.log(response);
            
        }).catch(err => {
            console.log(err);
            setLoader(false);
        })
    }

    return (
        <div className={styles.registerBlock}>
            <div className={styles.Register}>
                <form className={styles.login_form}>
                    <div className={styles.registerText}>
                        <h2>Login</h2>
                        <p style={{ opacity: '0.5' }}>Welcome back. Enter your credentials to access your account</p>
                    </div>
                    <div className={styles.registerForm}>
                        <div className={styles.inputsBlock}>
                            <span className={styles.nameForFields}>Email Address</span>
                            <input type='email' className={styles.inputsForFields} required ref={email} />
                        </div>
                        <div className={styles.inputsBlock}>
                            <span className={styles.nameForFields}>Password</span>
                            <input type='password' className={styles.inputsForFields} required ref={password} />
                        </div>
                        {loader ? <div className={styles.loadingiospinnercube6ije4twxt8j}><div className={styles.ldioiqr7w6ud9q}>
                            <div></div><div></div><div></div><div></div>
                        </div></div> : <div className={styles.Submit}>
                            <div className={styles.buttonWrapper}>
                                <button onClick={(e) => { Submit(e) }}>Countinue</button>
                            </div>
                        </div>}
                        <div className={styles.accountExists}>
                            Don`t have an account? <span style={{ color: '#047857' }}><NavLink to='/register' style={{ textDecoration: 'none', color: '#047857', cursor: 'pointer' }}>Sign up here</NavLink></span>
                        </div>
                    </div>
                </form> 
            </div>
        </div>
    )
}

export default Login

