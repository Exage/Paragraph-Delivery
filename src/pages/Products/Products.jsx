import React, { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'

import { firestore } from '../../firebase'
import { doc, getDoc } from 'firebase/firestore'

import './Products.scss'

import { Loading } from '../../components/Loading/Loading'

import { Items } from './ProductsElems/Items'
import { Sidebar } from './ProductsElems/Sidebar'

export const Products = ({ setLoading, isAuth, isRegister, userData, setUserData, uid }) => {
    const params = useParams()

    const [product, setProduct] = useState(null)
    const [isSideLeft, setSideLeft] = useState(false)

    useEffect(() => {
        setLoading(true)
        setProduct(null)
        const fetchData = async () => {
            try {
                const docRef = doc(firestore, 'products', params.productid)
                const docSnap = await getDoc(docRef)

                if (docSnap.exists) {
                    const productData = docSnap.data()
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

        fetchData()
    }, [params.productid])

    if (!isAuth) {
        console.log('Not Auth')
        return <Navigate to='/auth' />
    }

    if (!isRegister) {
        console.log('Not Register')
        return <Navigate to='/register' />
    }

    // if (true) {
    //     return <Loading />
    // }

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
                    <Loading />
                </div>
            )}
        </>
    )
}
