import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

import { doc, setDoc } from 'firebase/firestore'
import { firestore } from '../../firebase'

import { Loading } from '../../components/Loading/Loading'

export const Register = ({ loading, isAuth, isRegister, setIsRegister, uid, setUserData, auth }) => {
    const [name, setName] = useState('')
    
    const [disableNameInputs, setDisableNameInputs] = useState(false)

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

            console.log("Document written")
            
            // localStorage.setItem('userData', JSON.stringify(data))
            setUserData(data)

            localStorage.setItem('isRegister', true)
            setIsRegister(true)
        } catch (e) {
            console.error("Error adding document: ", e)
        } finally {
            setDisableNameInputs(false)
        }
    }

    const handleNameForm = (Event) => {
        Event.preventDefault()

        setDisableNameInputs(true)
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
        <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <form onSubmit={handleNameForm} style={{ display: 'flex', flexDirection: 'column', width: '30rem', fontSize: '3.2rem' }}>
                <h1>Type Name</h1>
                <input
                    type="text"

                    disabled={disableNameInputs}

                    value={name}
                    onChange={Event => setName(Event.target.value)}

                    style={{ marginBottom: '1rem' }}
                />
                <button type='submit' disabled={disableNameInputs}>Request</button>
            </form>
        </div>
    )
}
