import React from 'react'
import { NavLink } from 'react-router-dom'

import bag from '../../../../images/header/basket.png'

import styles from './Bag.module.scss'

export const Bag = ({ setBurgerOpen }) => {
    return (
        <div className={`header-link-wrapper ${styles.headerBag}`}>
            <NavLink to='/bag' onClick={() => setBurgerOpen(false)} className={`header-link ${styles.headerBagBtn}`}>
                <img className={styles.headerBagBtnLogo} src={bag} />
                <h3 className={styles.headerBagBtnLabel}>
                    Корзина
                </h3>
            </NavLink>
        </div>
    )
}
