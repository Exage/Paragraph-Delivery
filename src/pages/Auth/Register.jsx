import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

import { doc, setDoc } from 'firebase/firestore'
import { firestore } from '../../firebase'

import { Loading } from '../../components/Loading/Loading'

import './Auth.scss'

import authLogo from '../../images/auth/auth-logo.png'

import sideLeft from '../../images/auth/register-side-1.png'
import sideRight from '../../images/auth/register-side-2.svg'

export const Register = ({ loading, isAuth, isRegister, setIsRegister, uid, setUserData, auth }) => {
    const [name, setName] = useState('')

    const [disable, setDisable] = useState(false)

    const addUser = async () => {
        try {
            const data = {
                uid: uid,
                name: name,
                isAdmin: false,
                bag: [],
                phoneNumber: auth.currentUser.phoneNumber,
                address: ''
            }

            await setDoc(doc(firestore, 'users', uid), data)

            setUserData(data)

            localStorage.setItem('isRegister', true)
            setIsRegister(true)
        } catch (e) {
            console.error("Error adding document: ", e)
        } finally {
            setDisable(false)
        }
    }

    const handleNameForm = (Event) => {
        Event.preventDefault()

        setDisable(true)
        addUser(uid)
    }

    if (loading) {
        return <Loading text="Load Register" />
    }

    if (!isAuth && !isRegister) {
        return <Navigate to='/auth' />
    }

    if (isAuth && isRegister) {
        return <Navigate to='/' />
    }

    return (
        <div className="auth-item">
            <div className="auth-sides">
                <div className="auth-sides-inner">
                    <div className="auth-sides-item auth-sides-item-left">
                        <img src={sideLeft} alt="" />
                    </div>
                    <div className="auth-sides-item auth-sides-item-right auth-sides-item-fixed">
                        <img src={sideRight} alt="" />
                    </div>
                </div>
            </div>
            <div className="auth-wrapper">
                <div className="auth-item-form">
                    <div className="auth-startlogo">
                        <img src={authLogo} alt="Paragraph доставка" />
                    </div>
                    <form onSubmit={handleNameForm} className='auth-item-form'>
                        <input
                            type="text"

                            disabled={disable}

                            value={name}
                            onChange={Event => setName(Event.target.value)}

                            className='input'
                            placeholder='Имя'
                        />
                        <button type='submit' disabled={disable} className='auth-item-link'>Далее</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
