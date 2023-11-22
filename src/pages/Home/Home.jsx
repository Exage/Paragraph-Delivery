import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'

import './Home.scss'

import { Loading } from '../../components/Loading/Loading'

export const Home = ({ loading, setLoading, isAuth, setIsAuth, isRegister, setIsRegister, userData }) => {
    if (loading) {
        return <Loading text='Load Home' />
    }

    if (!isAuth) {
        console.log('Not Auth')
        return <Navigate to='/auth' />
    }

    if (!isRegister) {
        console.log('Not Register')
        return <Navigate to='/register' />
    }
    return (
        <div className='home'>
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Link to='/product/coffee' className='home-link'>
                        Coffee
                    </Link>
                    <Link to='/products/desserts' className='home-link'>
                        Desserts
                    </Link>
                    <Link to='/products/beverages' className='home-link'>
                        Beverages
                    </Link>
                    <Link to='/products/food' className='home-link'>
                        Food
                    </Link>
                </div>
            </div>
        </div>
    )
}
