import React from 'react'

import basket from '../../../../images/header/basket.png'

import styles from './Basket.module.scss'

export const Basket = () => {
    return (
        <div className={styles.headerBasket}>
            <button className={styles.headerBasketBtn}>
                <img className={styles.headerBasketBtnLogo} src={basket} />
                <h3 className={styles.headerBasketBtnLabel}>
                    Корзина
                </h3>
            </button>
        </div>
    )
}
