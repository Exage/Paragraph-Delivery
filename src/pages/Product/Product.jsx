import React, { useEffect, useState, useRef } from 'react'
import { useParams, Navigate } from 'react-router-dom'

import { firestore, storage } from '../../firebase'
import { collection, doc, getDoc, setDoc } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref } from 'firebase/storage'

import './Product.scss'

import { Loading } from '../../components/Loading/Loading'
import { Item } from './ProductElems/Item'

export const Product = ({ loading, setLoading, isAuth, setIsAuth, isRegister, setIsRegister, userData, setUserData, uid }) => {
    const params = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const docRef = doc(firestore, 'products', params.productid)
                const docSnap = await getDoc(docRef)

                if (docSnap.exists) {
                    const productData = docSnap.data()
                    console.log(productData)
                    setProduct(prevProduct => ({ ...prevProduct, ...productData }))
                } else {
                    console.log('Документ не найден')
                }
            } catch (error) {
                console.error('Ошибка при получении данных из Firestore:', error.message)
                throw error
            }
        }

        fetchData()
    }, [])

    if (!isAuth) {
        console.log('Not Auth')
        return <Navigate to='/auth' />
    }

    if (!isRegister) {
        console.log('Not Register')
        return <Navigate to='/register' />
    }

    return (
        <div className="container container-nopadding">
            {product ? (
                <div className="product">
                    <div className="product-side">
                        <div className="container container-nopadding">
                            <div className="product-side-inner">
                                <div className="product-side-bg">
                                    <img src={product.body.bgImage} />
                                </div>
                                <div className="product-side-text">
                                    <div className="product-side-text-inner">
                                        <h1 className="product-side-title title">{product.name}</h1>
                                        <div className="product-side-body">
                                            <p className='product-side-body-consist'>
                                                {product.body.consist}
                                            </p>
                                            <p className='product-side-body-description'>
                                                Описание:<br />
                                                {product.body.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-body">
                        <div className="product-body-preview">
                            <img src={product.previewImage} />
                        </div>
                        <div
                            className="product-body-head"
                        // style={{ backgroundImage: `url(${product.previewImage})` }}
                        >
                            <div className="product-body-head-inner">
                                <h1 className='product-body-head-title'>{product.name}</h1>
                                <div className="product-body-head-text">
                                    <p className='product-body-head-text-consist'>
                                        {product.body.consist}
                                    </p>
                                    <p className='product-body-head-text-description'>
                                        Описание: {product.body.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="product-body-products">
                            {product.product.map(item => (
                                <Item
                                    key={item.uuid}
                                    item={item}

                                    userData={userData}
                                    setUserData={setUserData}

                                    uid={uid}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    )
}
