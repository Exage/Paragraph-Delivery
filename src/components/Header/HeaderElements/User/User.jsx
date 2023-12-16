import React, { useEffect, useRef, useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../../../firebase'

import styles from './User.module.scss'

import userLogo from '../../../../images/header/user-logo.png'
import { Link, NavLink } from 'react-router-dom'

export const User = ({ isAdmin, setBurgerOpen, userData, handleChangeAddress }) => {
    const [userMenuOpen, setUserMenuOpen] = useState(false)

    const userSignOut = () => {
        setBurgerOpen(false)
        signOut(auth).then(() => {
            console.log('Sign Out Successful')
        }).catch(error => console.log(error))
    }

    const userMenuRef = useRef()

    useEffect(() => {
        const handleClickOutside = (event) => {
            const target = userMenuRef.current
            if (target && !target.contains(event.target)) {
                setUserMenuOpen(false)
            }
        }

        window.addEventListener('mousedown', handleClickOutside)

        return () => {
            window.removeEventListener('mousedown', handleClickOutside)
        }
    }, [userMenuRef])

    return (
        <div onClick={() => setUserMenuOpen(!userMenuOpen)} className={styles.headerUser}>
            <div className={styles.headerUserLogo}>
                <img src={userLogo} />
            </div>
            <h3 className={styles.headerUserName}>
                {userData.name}
            </h3>

            <div ref={userMenuRef} className={(
                userMenuOpen
                    ? `${styles.headerUserMenu} ${styles.headerUserMenuOpen}`
                    : styles.headerUserMenu
            )}
            >
                <button onClick={handleChangeAddress} className={styles.headerUserMenuBtn}>
                    {(userData.address !== '') ? userData.address : 'Адрес не указан'}
                </button>
                {isAdmin && (
                    <NavLink 
                        className={styles.headerUserMenuBtn} 
                        to={'/admin'}
                    
                        onClick={() => setBurgerOpen(false)}
                    >
                        Добавить товар
                    </NavLink>
                )}
                <button onClick={userSignOut} className={`${styles.headerUserMenuBtn} ${styles.headerUserMenuBtnSignOut}`}>
                    Выйти
                    <span className={styles.headerUserMenuBtnName}>
                        , {userData.name}
                    </span>
                </button>
            </div>

        </div>
    )
}
