import React from 'react'

import styles from './Back.module.scss'

export const Back = () => {
    return (
        <div className={styles.headerBack}>
            <button className={styles.headerBackBtn}>
                Back
            </button>
        </div>
    )
}
