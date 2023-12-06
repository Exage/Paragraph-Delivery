import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

import './Bag.scss'

import { Loading } from '../../components/Loading/Loading'
import { Items } from './BagElems/Items'
import { Address } from './BagElems/Address/Address.jsx'

import BagIcon from '../../images/header/basket.png'

export const Bag = ({ loading, userData, setUserData, isAuth, isRegister, uid }) => {
    const [globalCost, setGlobalCost] = useState('0.00')
    const [address, setAddress] = useState(userData.address)

    if (!isAuth) {
        console.log('Not Auth')
        return <Navigate to='/auth' />
    }

    if (!isRegister) {
        console.log('Not Register')
        return <Navigate to='/register' />
    }

    if (loading) {
        return <Loading />
    }

    return (
        <div className='bag'>
            <div className="container bag-container">
                <div className="bag-header">
                    <h1 className='bag-header-title'>
                        <img src={BagIcon} className='bag-header-title-icon' />
                        <span className='bag-header-title bag-header-title-underline'>Моя корзина</span>
                    </h1>
                    <Address addressTitle={address} setUserData={setUserData} userData={userData} uid={uid} />
                </div>
                <div className="bag-body">

                    <Items 
                        userData={userData}
                        setUserData={setUserData}

                        globalCost={globalCost}
                        setGlobalCost={setGlobalCost} 
                        
                        uid={uid}
                    />

                </div>
            </div>
        </div>
    )
}
