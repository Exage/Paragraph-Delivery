import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'

import { firestore, storage } from '../../firebase'
import { collection, doc, getDoc } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref } from 'firebase/storage'

import './Product.scss'

import { Loading } from '../../components/Loading/Loading'

import side from '../../images/products/sides/desserts-side.jpg'

export const Product = ({ loading, setLoading, isAuth, setIsAuth, isRegister, setIsRegister, userData }) => {
    const params = useParams()

    const [product, setProduct] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)

                const docRef = doc(firestore, 'products', params.productid)
                const docSnap = await getDoc(docRef)

                if (docSnap.exists) {
                    const productData = docSnap.data()
                    setProduct(productData)
                } else {
                    console.log('Документ не найден')
                }
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
        return <Loading />
    }

    return (
        <div className="container container-nopadding">
            <div className="product">

                <div className="product-side">
                    <div className="container container-nopadding">
                        <div className="product-side-inner">
                            <div className="product-side-bg">
                                <img src={product.body.bgImage} />
                            </div>
                            <div className="product-side-text">
                                <h1 className="product-side-title title">{product.name}</h1>
                                <div className="product-side-body">
                                    <p className='product-side-body-consist'>{product.body.consist}</p>
                                    <p className='product-side-body-description'>
                                        Описание:<br />
                                        {product.body.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-body">
                    <div className="product-body-preview">
                        <img src={product.previewImage} />
                    </div>
                    <div className="product-body-products">
                        {product.product.map(item => (
                            <button key={item.uuid} className='product-body-btn btn'>
                                <span>
                                    {item.weight.number}
                                    &nbsp;
                                    {item.weight.measure}
                                </span>
                                &nbsp;
                                /
                                &nbsp;
                                <span>
                                    {!!item.price[0] && item.price[0]}
                                    {!!item.price[1] && item.price[1]}
                                    &nbsp;
                                    руб.
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
