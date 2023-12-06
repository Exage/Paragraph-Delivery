import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { doc, setDoc } from 'firebase/firestore'
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
        const newData = { ...userData, bag: [...userData.bag, { item: item, factor: 1 }] }

        await setDoc(docRef, newData)
        setUserData(newData)

        setDisableBtn(false)
        setInBag(true)
    }

    return (
        <>
            {isInBag ? (
                <Link to='/bag' className='product-body-btn btn' disabled={disableBtn}>
                    <div>
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
                    </div>
                    <span>
                        в корзине
                    </span>
                </Link>
            ) : (
                <button onClick={addToBag} className='product-body-btn btn' disabled={disableBtn}>
                    <div>
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
                    </div>
                </button>
            )}
        </>
    )

}
