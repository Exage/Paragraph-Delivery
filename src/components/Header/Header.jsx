import React, { useEffect, useState } from 'react'

import styles from './Header.module.scss'

import logoDesktop from '../../images/logo.png'
import logoMobile from '../../images/logo-mobile.png'

import { Back } from './HeaderElements/Back/Back'
import { User } from './HeaderElements/User/User'
import { Address } from './HeaderElements/Address/Address'
import { Basket } from './HeaderElements/Basket/Basket'
import { Burger } from './HeaderElements/Burger/Burger'

export const Header = ({ isBurgerOpen, setBurgerOpen, toggleBurger, closeBurger }) => {
    const [isTablet, setTablet] = useState(false)

    useEffect(() => {
        function checkWidth() {
            if (window.innerWidth >= 916) {
                setTablet(false)
            } else {
                setTablet(true)
            }
        }

        window.addEventListener('resize', checkWidth)

        return () => {
            checkWidth()
            window.removeEventListener('resize', checkWidth)
        }
    }, [isTablet])

    const handleOverlayClick = (event) => {
        if (event.target.classList.contains(styles.headerMenuOverlay)) {
            closeBurger()
        }
    }

    return (
        <>
            <header className={styles.header}>
                <div className="container">
                    <div className={`${styles.headerInner}`}>
                        <div className={styles.headerInnerLeftSide}>
                            <Back />
                            {!isTablet && <User />}
                        </div>

                        <div className={styles.headerInnerLogo}>
                            <img className={styles.headerInnerLogoDesktop} src={logoDesktop} />
                            <img className={styles.headerInnerLogoMobile} src={logoMobile} />
                        </div>

                        <div className={styles.headerInnerRightSide}>
                            {!isTablet && <Address />}
                            {!isTablet && <Basket />}
                            <Burger
                                isBurgerOpen={isBurgerOpen}
                                toggleBurger={toggleBurger}
                            />
                        </div>
                    </div>
                </div>
            </header>

            {isTablet && (
                <div
                    className={(
                        isBurgerOpen
                            ? `${styles.headerMenuOverlay} ${styles.headerMenuOverlayOpen}`
                            : styles.headerMenuOverlay
                    )}
                    onClick={Event => handleOverlayClick(Event)}
                >
                    <div className={styles.headerMenu}>
                        <div className={styles.headerMenuInner}>
                            <Address />
                            <Basket />
                            <User />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
