import React, { useEffect, useState } from 'react'

import sideLeft from '../../images/auth/verify-side-1.svg'
import sideRight from '../../images/auth/verify-side-2.png'

export const Verify = ({ setLoading, disable, setRequestForm, setVerifyForm, setDisable, authLogo }) => {
    const [OTP, setOTP] = useState('')

    const verifyOTP = () => {
        if (OTP.length === 6) {
            setDisable(true)
            let confirmationResult = window.confirmationResult

            confirmationResult.confirm(OTP)
                .then((result) => {
                    console.log(result)
                    setLoading(true)
                })
                .catch((error) => {
                    console.error('Error During verify OTP', error.message)
                    setDisable(false)
                })
        }
    }

    const handleBack = () => {
        setRequestForm(true)
        setVerifyForm(false)
    }
    
    useEffect(() => {
        verifyOTP()
    }, [OTP])

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
                    <form className='auth-item-form'>
                        <input
                            type="text"

                            disabled={disable}

                            maxLength={6}
                            value={OTP}
                            onChange={Event => setOTP(Event.target.value)}

                            className='input'
                            placeholder='Код'
                        />
                        <button type='button' onClick={handleBack} disabled={disable} className='auth-item-link'>Назад</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
