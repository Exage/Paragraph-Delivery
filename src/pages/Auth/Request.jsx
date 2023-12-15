import React, { useState } from 'react'

import { auth } from '../../firebase'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'

import sideLeft from '../../images/auth/request-side-1.svg'
import sideRight from '../../images/auth/request-side-2.png'

export const Request = ({ disable, setDisable, phoneNumber, setPhoneNumber, setRequestForm, setVerifyForm, authLogo }) => {
    const generateRecaptcha = () => {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
                'size': 'invisible'
            })
        }

        window.recaptchaVerifier.render()
    }

    const requestOTP = (Event) => {
        Event.preventDefault()
        setDisable(true)
        generateRecaptcha()

        const appVerifier = window.recaptchaVerifier

        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then(confirmationResult => {
                setRequestForm(false)
                setVerifyForm(true)
                window.confirmationResult = confirmationResult
            })
            .catch(error => {
                console.error("Error during sign-in with phone number:", error.code, error.message)
                setDisable(false)
            })
            .finally(() => {
                setDisable(false)
            })
    }


    return (
        <div className="auth-item">
            <div className="auth-sides">
                <div className="auth-sides-inner">
                    <div className="auth-sides-item auth-sides-item-left auth-sides-item-fixed">
                        <img src={sideLeft} alt="" />
                    </div>
                    <div className="auth-sides-item auth-sides-item-right">
                        <img src={sideRight} alt="" />
                    </div>
                </div>
            </div>
            <div className="auth-wrapper">
                <div className="auth-item-form">
                    <div className="auth-startlogo">
                        <img src={authLogo} alt="Paragraph доставка" />
                    </div>
                    <form onSubmit={requestOTP} className='auth-item-form'>
                        <input
                            type="text"

                            disabled={disable}

                            value={phoneNumber}
                            onChange={Event => setPhoneNumber(Event.target.value)}

                            className='input'
                            placeholder='Номер телефона'
                        />
                        <button type='submit' disabled={disable} className='auth-item-link'>Далее</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
