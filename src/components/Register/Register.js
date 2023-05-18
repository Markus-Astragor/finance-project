import React, { useState } from 'react'
import styles from './Register.module.css';
import { NavLink } from 'react-router-dom';
import { Axios } from 'axios';
import { useRef } from 'react';





function Register() {
    //creating variables for inputsFields
    const email = useRef(null)
    const password = useRef(null);
    const repeatPassword = useRef(null);

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordEror] = useState(false);
    const [repeatPasswordError, setRepeatPasswordError] = useState(false);
    const [errorText, setErrorText] = useState('');

   

    const checkUser = (email, password, repeatPassword) => {
        setEmailError(false);
        setPasswordEror(false);
        setRepeatPasswordError(false);
        setErrorText('');


        const regexp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(!email.match(regexp))
        {
            setEmailError(true)
            setErrorText('Неправильний email');
            return 1;
        }

        if(password.length < 8)
        {
            setPasswordEror(true);
            setErrorText('Пароль повинен містити більше ніж 8 символів');
            return 1;
        }

        if(password != repeatPassword)
        {
            setRepeatPasswordError(true);
            setErrorText('Пароль і повторний пароль повинні збігатися');
            return 1;
        }
    }



   

    const Submit = (e) => {

        e.preventDefault(); 

        let emailSubmit = email.current.value;
        let passwordSubmit = password.current.value;
        let repeatPasswordSubmit = repeatPassword.current.value;

        const resultCheckUser = checkUser(emailSubmit, passwordSubmit, repeatPasswordSubmit);

        if (resultCheckUser === 1) {
            return;
        }

        


        console.log(emailSubmit, passwordSubmit, repeatPasswordSubmit);
    }


    

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
                            <input type='email' className={styles.inputsForFields} required ref={email} />
                            <p className={emailError ? styles.errorParagrpah : styles.errorParagrpahInvisible }>{errorText}</p>
                        </div>
                        <div className={styles.inputsBlock}>
                            <span className={styles.nameForFields}>Password</span>
                            <input type='password' className={styles.inputsForFields} required ref={password} />
                            <p className={passwordError ? styles.errorParagrpah : styles.errorParagrpahInvisible }>{errorText}</p>
                        </div>
                        <div className={styles.inputsBlock}>
                            <span className={styles.nameForFields}>Repeat Password</span>
                            <input type='password' className={styles.inputsForFields} required ref={repeatPassword} />
                            <p className={repeatPasswordError ? styles.errorParagrpah : styles.errorParagrpahInvisible }>{errorText}</p>
                        </div>
                        <div className={styles.inputsBlockCheckcbox}>
                            <div className={styles.CheckboxWrapper}>
                                <input type='checkbox' className={styles.Checkbox} />
                            </div>
                            <div>Keep me signed in</div>
                        </div>
                        <div className={styles.Submit}>
                            <div className={styles.buttonWrapper}>
                                <button onClick={(e) => { Submit(e) }}>Countinue</button>
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