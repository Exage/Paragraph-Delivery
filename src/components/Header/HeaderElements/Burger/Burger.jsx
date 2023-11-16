import React from 'react'

import styles from './Burger.module.scss'

export const Burger = ({ isBurgerOpen, toggleBurger }) => {
    console.log(isBurgerOpen)
    return (
        <div className={styles.headerBurger}>
            <button
                className={(
                    isBurgerOpen
                        ? `${styles.headerBurgerBtn} ${styles.headerBurgerBtnOpen}`
                        : styles.headerBurgerBtn
                )}
                onClick={toggleBurger}
            >
                <span className={styles.headerBurgerSpan}></span>
            </button>
        </div>
    )
}
