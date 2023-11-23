import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'

import { firestore, storage } from '../../firebase'
import { collection, doc, getDoc } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref } from 'firebase/storage'

import './Products.scss'

import { Loading } from '../../components/Loading/Loading'

import side from '../../images/products/sides/desserts-side.jpg'

export const Products = ({ loading, setLoading, isAuth, setIsAuth, isRegister, setIsRegister, userData }) => {
    const params = useParams()
    const sideRef = useRef()

    const [parallax, setParallax] = useState(0)
    const [topPosition, setTopPosition] = useState(0)

    const [products, setProducts] = useState([])
    const [isImagesOnRightSide, setImagesOnRightSide] = useState(true)
    const [name, setName] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const docRef = doc(firestore, 'products', params.productid)
                const docSnap = await getDoc(docRef)

                if (docSnap.exists) {
                    const productData = docSnap.data()

                    setImagesOnRightSide(productData.isImagesOnRightSide)
                    setName(productData.name)

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

                    setProducts(newData)
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


    const handleScroll = () => {
        const scrollPosition = window.scrollY
        const contentScroll = document.documentElement.scrollHeight - window.innerHeight
        const sideScroll = sideRef.current.clientHeight - window.innerHeight

        const translateY = (scrollPosition * sideScroll) / contentScroll

        setParallax(translateY)
        setTopPosition(scrollPosition)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return (() => {
            window.removeEventListener('scroll', handleScroll)
        })
    })

    if (loading) {
        return <Loading />
    }

    return (
        <div className="container">
            <div className="products">
                <div className="products-items">
                    <div className="products-items-head">
                        <h1 className="products-items-head-title">{name}</h1>
                    </div>
                    <div className="products-items-body">
                        {products.map(item => (
                            <div key={item.uuid} className='products-item'>
                                <div className="products-item-side">
                                    <div className="products-item-photo">

                                        {item.imageUrl && (
                                            <img
                                                src={item.imageUrl}
                                                alt={item.name}
                                            />

                                        )}
                                    </div>

                                    <button className='btn products-item-btn'>
                                        в корзину
                                    </button>
                                </div>
                                <div className="products-item-info">
                                    <h1 className="products-item-title">{item.name}</h1>
                                    <div className='products-item-sub'>
                                        <span className='products-item-weight'>
                                            {item.weight.number}
                                            &nbsp;
                                            {item.weight.measure}
                                        </span>
                                        &nbsp;
                                        /
                                        &nbsp;
                                        <span className='products-item-price'>
                                            {!!item.price[0] && (<span>{item.price[0]} руб.</span>)}
                                            &nbsp;
                                            {item.price[1] < 10
                                                ? (<span>0{item.price[1]} коп.</span>)
                                                : (<span>{item.price[1]} коп.</span>)
                                            }
                                        </span>
                                    </div>
                                    <div className='products-item-description'>
                                        {item.body.description && (<p>Описание: {item.body.description}</p>)}
                                        {item.body.consist && (<p>Состав: {item.body.consist}</p>)}
                                        {item.body.mfp && (<p>КБЖУ (в 100 гр.): {item.body.mfp}</p>)}
                                    </div>
                                </div>
                                <div className="products-item-bottom">
                                    <button className='btn products-item-btn products-item-btn-response'>
                                        в корзину
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="products-sidebar">
                    <div className='products-sidebar-photo' style={{ top: `${topPosition}px` }}>
                        <img ref={sideRef} src={side} style={{ transform: `translateY(-${parallax}px)` }} />
                    </div>
                </div>
            </div>
        </div>
    )

    // return (
    //     <div className="container">
    //         <div style={{ textAlign: isImagesOnRightSide ? 'left' : 'right' }}>
    // {data.map(item => (
    //     <div style={{ paddingBottom: '2rem' }} key={item.uuid}>
    //         {item.imageUrl && (
    //             <img
    //                 src={item.imageUrl}
    //                 alt={item.name}

    //                 style={{ width: '319px' }}
    //             />
    //         )}
    //         <h1 style={{ fontSize: '2.4rem' }}>{item.name}</h1>
    //         <div style={{ display: 'flex', fontSize: '1.8rem' }}>
    //             <div>
    //                 {item.weight.number}
    //                 &nbsp;
    //                 {item.weight.measure}
    //             </div>
    //             &nbsp;
    //             /
    //             &nbsp;
    //             <div>
    //                 {!!item.price[0] && (<span>{item.price[0]} руб.</span>)}
    //                 &nbsp;
    //                 {item.price[1] < 10 
    //                     ? (<span>0{item.price[1]} коп.</span>) 
    //                     : (<span>{item.price[1]} коп.</span>)
    //                 }
    //             </div>
    //         </div>
    //         <div style={{ fontSize: '1.8rem' }}>
    //             {item.body.description && (<p>Описание: {item.body.description}</p>)}
    //             {item.body.consist && (<p>Состав: {item.body.consist}</p>)}
    //             {item.body.mfp && (<p>КБЖУ (в 100 гр.): {item.body.mfp}</p>)}
    //         </div>
    //     </div>
    // ))}
    //         </div>
    //     </div>
    // )
}
