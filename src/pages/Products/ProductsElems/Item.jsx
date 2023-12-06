import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { arrayUnion, doc, setDoc, updateDoc } from 'firebase/firestore'
import { firestore } from '../../../firebase'

export const Item = ({ item, userData, setUserData, uid }) => {
    const [disableBtn, setDisableBtn] = useState(false)
    const [isInBag, setInBag] = useState(false)

    useEffect(() => {
        const checkInBag = () => {
            userData.bag.map(bagItem => {
                if (bagItem.item.uuid === item.uuid) {
                    setInBag(true)
                }
            })
        }

        return (() => {
            checkInBag()
        })
    }, [])

    const addToBag = async () => {
        setDisableBtn(true)

        const docRef = doc(firestore, 'users', uid)
        const newData = { ...userData, bag: [...userData.bag, { item: item, factor: 1}] }

        await setDoc(docRef, newData)
        setUserData(newData)

        setDisableBtn(false)
        setInBag(true)
    }

    return (
        <div className='products-item'>

            <div className="products-item-body">

                <div className="products-item-side">
                    <div className="products-item-photo">
                        {item.imageUrl && (
                            <img
                                src={item.imageUrl}
                                alt={item.name}
                            />
                        )}
                    </div>
                    {isInBag ? (
                        <Link
                            to='/bag'
                            className='btn products-item-btn'
                            disabled={disableBtn}
                        >
                            к корзине
                        </Link>
                    ) : (
                        <button
                            onClick={addToBag}
                            className='btn products-item-btn'
                            disabled={disableBtn}
                        >
                            в корзину
                        </button>
                    )}

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

                            {/* {!!item.price[0] && (
                                <span>{item.price[0]} руб.</span>
                            )}

                            &nbsp;

                            {item.price[1] < 10
                                ? (<span>0{item.price[1]} коп.</span>)
                                : (<span>{item.price[1]} коп.</span>)
                            } */}

                            {item.price[0] && (
                                <span>{item.price[0]} руб.</span>
                            )}
                            &nbsp;
                            {item.price[1] && (
                                <span>{item.price[1]} коп.</span>
                            )}

                        </span>
                    </div>
                    <div className='products-item-description'>

                        {item.body.description && (
                            <p>Описание: {item.body.description}</p>
                        )}

                        {item.body.consist && (
                            <p>Состав: {item.body.consist}</p>
                        )}

                        {item.body.mfp && (
                            <p>КБЖУ (в 100 гр.): {item.body.mfp}</p>
                        )}

                    </div>
                    <div className="products-item-bottom">
                        {isInBag ? (
                            <Link
                                to='/bag'
                                className='btn products-item-btn'
                                disabled={disableBtn}
                            >
                                к корзине
                            </Link>
                        ) : (
                            <button
                                onClick={addToBag}
                                className='btn products-item-btn'
                                disabled={disableBtn}
                            >
                                в корзину
                            </button>
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}
