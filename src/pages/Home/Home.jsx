import React, { useState, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { firestore } from '../../firebase'
import { collection, getDocs, query } from 'firebase/firestore'

// import { HomeItems } from './HomeItems'

import './Home.scss'

import { Loading } from '../../components/Loading/Loading'

export const Home = ({ loading, setLoading, isAuth, isRegister }) => {

	const [homeItems, setHomeItems] = useState([])

    useEffect(() => {
        setLoading(true)
        setHomeItems(null)
        const fetchData = async () => {
            try {
                const q = query(collection(firestore, 'products'))
                const querySnapshot = await getDocs(q)

                const itemsArr = []
                
                querySnapshot.forEach((doc) => {
                    const item = doc.data()
                    itemsArr.push({
                        name: item.name,
                        id: doc.id,
                        isSingleProduct: item.isSingleProduct,
                        previewImage: item.previewImage
                    })
                })

                setHomeItems(itemsArr)
            } catch (error) {
                console.error('Ошибка при получении данных из Firestore:', error.message)
                throw error
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

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

                    {homeItems.map((product, productPos) => (
                        <div key={productPos} className="home-item">
                            <Link to={
                                (product.isSingleProduct
                                    ? `/product/${product.id}`
                                    : `/products/${product.id}`)
                            }
                                className='home-item-link'
                            >
                                <div className="home-item-photo">
                                    <img src={product.previewImage} />
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
