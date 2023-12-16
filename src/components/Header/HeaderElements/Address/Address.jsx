import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Address.module.scss'

import address from '../../../../images/header/address.png'

export const Address = ({ handleCloseModals }) => {
    return (
        <div className={`header-link-wrapper ${styles.headerAddress}`}>
            <NavLink to='/addresses' onClick={handleCloseModals} className={`header-link ${styles.headerAddressBtn}`}>
                <img className={styles.headerAddressBtnLogo} src={address} />
                <h3 className={styles.headerAddressBtnLabel}>
                    Адреса
                </h3>
            </NavLink>
        </div>
    )
}
