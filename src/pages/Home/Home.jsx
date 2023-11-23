import React, { useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { getDownloadURL, getStorage, ref } from 'firebase/storage'

import { HomeItems } from './HomeItems'

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
            <div className="home-wrapper">
                <div className="home-items">

                    {HomeItems.map((product, productPos) => (
                        <div key={productPos} className="home-item">
                            <Link to={
                                (product.singleProduct
                                    ? `/product/${product.id}`
                                    : `/products/${product.id}`)
                            }
                                className='home-item-link'
                            >
                                <div className="home-item-photo">
                                    <img src={product.url} />
                                </div>
                                <div className="home-item-text">
                                    {product.name}
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
