import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

import { auth, firestore } from '../../firebase'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'

import { Loading } from '../../components/Loading/Loading'
import { doc, getDoc } from 'firebase/firestore'

export const Auth = ({ loading, setLoading, isAuth, isRegister }) => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [OTP, setOTP] = useState('')

    const [requestForm, setRequestForm] = useState(true)
    const [verifyForm, setVerifyForm] = useState(false)

    const [disableRequestInputs, setDisableRequestInputs] = useState(false)
    const [disableVerifyInputs, setDisableVerifyInputs] = useState(false)

    const [navigateToRegister, setNavigateToRegister] = useState(false)

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
        setDisableRequestInputs(true)
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
            })
            .finally(() => {
                setDisableRequestInputs(false)
            })
    }

    const verifyOTP = (Event) => {
        Event.preventDefault()
        setDisableVerifyInputs(true)

        if (OTP.length === 6) {
            let confirmationResult = window.confirmationResult

            confirmationResult.confirm(OTP)
                .then((result) => {
                    console.log(result)
                    setLoading(true)
                })
                .catch((error) => {
                    console.error('Error During verify OTP', error.message)
                    setDisableVerifyInputs(false)
                })
        }
    }

    if (isAuth && !isRegister) {
        return <Navigate to='/register' />
    }

    if (isAuth && isRegister) {
        return <Navigate to='/' />
    }

    if (loading) {
        return <Loading />
    }

    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {requestForm && (
                <form onSubmit={requestOTP} style={{ display: 'flex', flexDirection: 'column', width: '30rem', fontSize: '3.2rem' }}>
                    <h1>Join Us</h1>
                    <input
                        type="text"

                        disabled={disableRequestInputs}

                        value={phoneNumber}
                        onChange={Event => setPhoneNumber(Event.target.value)}

                        style={{ marginBottom: '1rem' }}
                    />
                    <button type='submit' disabled={disableRequestInputs}>Request</button>
                </form>
            )}
            {verifyForm && (
                <form onSubmit={verifyOTP} style={{ display: 'flex', flexDirection: 'column', width: '30rem', fontSize: '3.2rem' }}>
                    <h1>Type Code</h1>
                    <input
                        type="text"

                        disabled={disableVerifyInputs}

                        value={OTP}
                        onChange={Event => setOTP(Event.target.value)}

                        style={{ marginBottom: '1rem' }}
                    />
                    <button type='submit' disabled={disableVerifyInputs}>Request</button>
                </form>
            )}
        </div>
    )
}
