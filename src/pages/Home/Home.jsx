import React from 'react'
import { Link, Navigate } from 'react-router-dom'

import { HomeItems } from './HomeItems'

import './Home.scss'

import { Loading } from '../../components/Loading/Loading'

export const Home = ({ loading, isAuth, isRegister }) => {

    if (loading) {
        return <Loading text='Load Home' />
    }

    if (!isAuth) {
        return <Navigate to='/auth' />
    }

    if (!isRegister) {
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
