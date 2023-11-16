import React from 'react'

import styles from './Address.module.scss'

import address from '../../../../images/header/address.png'

export const Address = () => {
    return (
        <div className={styles.headerAddress}>
            <button className={styles.headerAddressBtn}>
                <img className={styles.headerAddressBtnLogo} src={address} />
                <h3 className={styles.headerAddressBtnLabel}>
                    Адреса
                </h3>
            </button>
        </div>
    )
}
