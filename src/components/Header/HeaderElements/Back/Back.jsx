import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Back.module.scss'

export const Back = ({ handleCloseModals }) => {
    return (
        <div className={`header-link-wrapper ${styles.headerBack}`}>
            <NavLink to='/' onClick={handleCloseModals} className={`header-link ${styles.headerBackBtn}`}>
                Back
            </NavLink>
        </div>
    )
}
