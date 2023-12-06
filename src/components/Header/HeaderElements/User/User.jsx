import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../../../firebase'

import styles from './User.module.scss'

import userLogo from '../../../../images/header/user-logo.png'

export const User = ({ closeBurger, userData }) => {

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('Sign Out Successful')
        }).catch(error => console.log(error))
    }
    
    return (
        <button onClick={userSignOut} className={styles.headerUser}>
            <h3 className={styles.headerUserLabel}>
                Выйти,&nbsp;
            </h3>
            <div className={styles.headerUserLogo}>
                <img src={userLogo} />
            </div>
            <h3 className={styles.headerUserName}>
                {userData.name ? userData.name : <span className={styles.headerUserNamePlaceholder}></span>}
            </h3>
        </button>
    )
}
