import React from 'react'

import startLogo from '../../images/auth/start-auth-logo.svg'
import sideLeft from '../../images/auth/start-auth-side-1.png'
import sideRight from '../../images/auth/start-auth-side-2.png'

export const Start = ({ startAuth }) => {
    return (
        <div className="auth-item">
            <div className="auth-sides">
                <div className="auth-sides-inner">
                    <div className="auth-sides-item auth-sides-item-left">
                        <img src={sideLeft} alt="" />
                    </div>
                    <div className="auth-sides-item auth-sides-item-right">
                        <img src={sideRight} alt="" />
                    </div>
                </div>
            </div>
            <div className="auth-startlogo">
                <img src={startLogo} alt="Paragraph доставка" />
            </div>
            <div className="auth-wrapper">
                <div className="btn auth-item-btn" onClick={startAuth}>Вход</div>
            </div>
        </div>
    )
}
