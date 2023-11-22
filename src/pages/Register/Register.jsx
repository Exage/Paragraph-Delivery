import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

import { doc, setDoc } from 'firebase/firestore'
import { firestore } from '../../firebase'

import { Loading } from '../../components/Loading/Loading'

export const Register = ({ loading, setLoading, isAuth, isRegister, setIsRegister, uid }) => {
    const [nameForm, setNameForm] = useState(false)

    const [name, setName] = useState('')

    const [disableNameInputs, setDisableNameInputs] = useState(false)

    const addUser = async () => {
        try {
            await setDoc(doc(firestore, 'users', uid), {
                uid: uid,
                name: name
            })

            console.log("Document written")
            setIsRegister(true)
            setLoading(true)
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

    if (!isAuth && !isRegister) {
        return <Navigate to='/auth' />
    }

    if (isAuth && isRegister) {
        return <Navigate to='/' />
    }

    if (loading) {
        return <Loading text="Load Register" />
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
