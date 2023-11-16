import React from 'react'

import styles from './User.module.scss'

import userLogo from '../../../../images/header/user-logo.png'

export const User = () => {
    return (
        <button className={styles.headerUser}>
            <h3 className={styles.headerUserLabel}>
                Выйти,&nbsp;
            </h3>
            <div className={styles.headerUserLogo}>
                <img src={userLogo} />
            </div>
            <h3 className={styles.headerUserName}>
                User Name
            </h3>
        </button>
    )
}
