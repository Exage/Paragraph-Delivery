import React, { useEffect, useState } from 'react'

import './Header.scss'

import logoDesktop from '../../images/logo.svg'
import logoMobile from '../../images/logo-mobile.svg'

import { Back } from './HeaderElements/Back/Back'
import { User } from './HeaderElements/User/User'
import { Address } from './HeaderElements/Address/Address'
import { Bag } from './HeaderElements/Bag/Bag'
import { Burger } from './HeaderElements/Burger/Burger'

export const Header = ({ isAdmin, isBurgerOpen, setBurgerOpen, toggleBurger, closeBurger, userData, loading, setLoading }) => {
    const [isTablet, setTablet] = useState(false)

    useEffect(() => {
        function checkWidth() {
            if (window.innerWidth >= 916) {
                setTablet(false)
            } else {
                setTablet(true)
            }
        }

        checkWidth()

        window.addEventListener('resize', checkWidth)

        return () => {
            window.removeEventListener('resize', checkWidth)
        }
    }, [])

    const handleOverlayClick = (event) => {
        if (event.target.classList.contains('header-menu-overlay')) {
            closeBurger()
        }
    }

    if (loading) {
        return (
            <header className='header'>
                <div className="container">
                    <div className='header-inner-loading'>

                        <div className='header-inner-logo-loading'>
                            <img className='header-inner-logo-desktop' src={logoDesktop} />
                            <img className='header-inner-logo-mobile' src={logoMobile} />
                        </div>

                    </div>
                </div>
            </header>
        )
    }

    console.log(isTablet)

    if (isTablet) {
        return (
            <>
                <header className='header'>
                    <div className="container">
                        <div className='header-inner'>
                            <div className='header-inner-left-side'>
                                <Back
                                    isBurgerOpen={isBurgerOpen}
                                    setBurgerOpen={setBurgerOpen}
                                />
                            </div>

                            <div className='header-inner-logo'>
                                <img className='header-inner-logo-desktop' src={logoDesktop} />
                                <img className='header-inner-logo-mobile' src={logoMobile} />
                            </div>

                            <div className='header-inner-right-side'>
                                <Burger
                                    isBurgerOpen={isBurgerOpen}
                                    toggleBurger={toggleBurger}
                                />
                            </div>
                        </div>
                    </div>
                </header>

                <div
                    className={(
                        isBurgerOpen
                            ? 'header-menu-overlay header-menu-overlay-open'
                            : 'header-menu-overlay'
                    )}
                    onClick={Event => handleOverlayClick(Event)}
                >
                    <div className='header-menu'>
                        <div className='header-menu-inner'>
                            <Address
                                isBurgerOpen={isBurgerOpen}
                                setBurgerOpen={setBurgerOpen}
                            />
                            <Bag
                                isBurgerOpen={isBurgerOpen}
                                setBurgerOpen={setBurgerOpen}
                            />
                            <User
                                isAdmin={isAdmin}

                                isBurgerOpen={isBurgerOpen}
                                setBurgerOpen={setBurgerOpen}

                                userData={userData}
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <header className='header'>
            <div className="container">
                <div className='header-inner'>
                    <div className='header-inner-left-side'>
                        <Back
                            isBurgerOpen={isBurgerOpen}
                            setBurgerOpen={setBurgerOpen}
                        />
                        <User
                            isAdmin={isAdmin}

                            isBurgerOpen={isBurgerOpen}
                            setBurgerOpen={setBurgerOpen}

                            userData={userData}
                        />
                    </div>

                    <div className='header-inner-logo'>
                        <img className='header-inner-logo-desktop' src={logoDesktop} />
                        <img className='header-inner-logo-mobile' src={logoMobile} />
                    </div>

                    <div className='header-inner-right-side'>
                        <Address
                            isBurgerOpen={isBurgerOpen}
                            setBurgerOpen={setBurgerOpen}
                        />
                        <Bag
                            isBurgerOpen={isBurgerOpen}
                            setBurgerOpen={setBurgerOpen}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}
