import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { firestore, storage } from '../../firebase'
import { collection, doc, getDoc } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref } from 'firebase/storage'

export const Products = () => {
    const params = useParams()

    const [data, setData] = useState([])
    const [isImagesOnRightSide, setImagesOnRightSide] = useState(true)

    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const docRef = doc(firestore, 'products', params.productid)
                const docSnap = await getDoc(docRef)

                if (docSnap.exists) {
                    const productData = docSnap.data()
                    setImagesOnRightSide(productData.isImagesOnRightSide)

                    const newData = await Promise.all(
                        productData.product.map(async (item) => {
                            if (item.imageUrl) {
                                try {
                                    const imageUrl = await getDownloadURL(ref(getStorage(), `${params.productid}/${item.imageUrl}`))
                                    return { ...item, imageUrl }
                                } catch (imageError) {
                                    console.error(`Ошибка при получении URL изображения: ${item.imageUrl}`, imageError)
                                    return item
                                }
                            }
                            return item
                        })
                    )

                    setData(newData)
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

    if (isLoading) {
        return (
            <div className="container">
                <h1 style={{ fontSize: '3.2rem' }}>Load</h1>
            </div>
        )
    }

    return (
        <div className="container">
            <div style={{ textAlign: isImagesOnRightSide ? 'left' : 'right' }}>
                {data.map(item => (
                    <div style={{ paddingBottom: '2rem' }} key={item.uuid}>
                        {item.imageUrl && (
                            <img
                                src={item.imageUrl}
                                alt={item.name}

                                style={{ width: '319px' }}
                            />
                        )}
                        <h1 style={{ fontSize: '2.4rem' }}>{item.name}</h1>
                        <div style={{ display: 'flex', fontSize: '1.8rem' }}>
                            <div>
                                {item.weight.number}
                                &nbsp;
                                {item.weight.measure}
                            </div>
                            &nbsp;
                            /
                            &nbsp;
                            <div>
                                {!!item.price[0] && (<span>{item.price[0]} руб.</span>)}
                                &nbsp;
                                {item.price[1] < 10 
                                    ? (<span>0{item.price[1]} коп.</span>) 
                                    : (<span>{item.price[1]} коп.</span>)
                                }
                            </div>
                        </div>
                        <div style={{ fontSize: '1.8rem' }}>
                            {item.body.description && (<p>Описание: {item.body.description}</p>)}
                            {item.body.consist && (<p>Состав: {item.body.consist}</p>)}
                            {item.body.mfp && (<p>КБЖУ (в 100 гр.): {item.body.mfp}</p>)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
