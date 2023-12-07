import React, { useEffect, useState, useRef } from 'react'
import { useParams, Navigate } from 'react-router-dom'

import { firestore, storage } from '../../firebase'
import { collection, doc, getDoc } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref } from 'firebase/storage'

import './Products.scss'

import { Loading } from '../../components/Loading/Loading'

import { Items } from './ProductsElems/Items'
import { Sidebar } from './ProductsElems/Sidebar'

export const Products = ({ setLoading, isAuth, isRegister, userData, setUserData, uid }) => {
    const params = useParams()

    const [product, setProduct] = useState(null)
    const [isSideLeft, setSideLeft] = useState(false)

    useEffect(() => {
        console.log('Start Loading')
        setLoading(true)
        const fetchData = async () => {
            console.log('Start Fetch')
            try {
                console.log('Start Try')
                const docRef = doc(firestore, 'products', params.productid)
                console.log('Start Get Doc')
                const docSnap = await getDoc(docRef)
                console.log('End Doc Snap')

                if (docSnap.exists) {
                    const productData = docSnap.data()
                    console.log(productData)

                    setProduct(productData)
                    setSideLeft(productData.isSideLeft)
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

        return (() => {
            fetchData()
        })
    }, [params.productid])

    if (!isAuth) {
        console.log('Not Auth')
        return <Navigate to='/auth' />
    }

    if (!isRegister) {
        console.log('Not Register')
        return <Navigate to='/register' />
    }

    return (
        <>
            {product ? (
                <>
                    <div className="container container-nopadding">
                        <div className={(isSideLeft) ? 'products sideLeft' : 'products'}>
                            <Items
                                isSideLeft={isSideLeft} 
                                product={product}

                                userData={userData}
                                setUserData={setUserData}
                                
                                uid={uid}
                            />
                        </div>
                    </div>

                    <Sidebar
                        product={product}
                        isSideLeft={isSideLeft} 
                    />
                </>
            ) : (
                <div className="container container-nopadding">
                    <div className="products">
                        <Loading />
                    </div>
                </div>
            )}
        </>
    )
}
