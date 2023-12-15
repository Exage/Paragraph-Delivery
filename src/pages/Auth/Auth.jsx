import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

import { Loading } from '../../components/Loading/Loading'

import './Auth.scss'

import { Start } from './Start'
import { Request } from './Request'
import { Verify } from './Verify'

import authLogo from '../../images/auth/auth-logo.png'

export const Auth = ({ loading, setLoading, isAuth, isRegister }) => {
    const [phoneNumber, setPhoneNumber] = useState('')

    const [requestForm, setRequestForm] = useState(false)
    const [verifyForm, setVerifyForm] = useState(false)

    const [disable, setDisable] = useState(false)

    const startAuth = () => {
        setRequestForm(true)
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
        <div className='auth'>
            
            {(!requestForm && !verifyForm) && (
                <Start startAuth={startAuth} />
            )}

            {requestForm && (
                <Request 
                    disable={disable} 
                    setDisable={setDisable}

                    phoneNumber={phoneNumber}
                    setPhoneNumber={setPhoneNumber}
                    
                    setRequestForm={setRequestForm} 
                    setVerifyForm={setVerifyForm} 
                    
                    authLogo={authLogo} />
            )}

            {verifyForm && (
                <Verify 
                    disable={disable} 
                    setDisable={setDisable} 
                    
                    setRequestForm={setRequestForm} 
                    setVerifyForm={setVerifyForm}

                    setLoading={setLoading} 
                    authLogo={authLogo} />
            )}
        </div>
    )
}
