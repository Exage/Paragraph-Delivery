import React, { useEffect, useState, useRef } from 'react'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { firestore } from '../../../firebase'

export const Item = ({ userData, setUserData, bagItem, bagItemPos, setGlobalCost, uid }) => {
    const { name, imageUrl, price } = bagItem.item
    let [factor, setFactor] = useState(bagItem.factor)

    const [disableBtn, setDisableBtn] = useState(false)

    const [priceArr, setPriceArr] = useState([price[0], price[1]])

    const isMounted = useRef(true)

    useEffect(() => {
        if (isMounted.current) {
            console.log('Component mounted')
            calculatePrice(factor)
            calcGlobalPrice(factor)
        }

        return () => {
            console.log('Component unmounted')
            isMounted.current = false
        }
    }, [])

    const calcGlobalPrice = (factor) => {
        const priceFloat = ((+price[0] + (+price[1] * 0.01)) * factor).toFixed(2)
        setGlobalCost(prevCost => (+prevCost + +priceFloat).toFixed(2))
    }

    const calculatePrice = () => {
        const priceCalc = ((+price[0] + (+price[1] * 0.01)) * factor).toFixed(2)

        const priceStr = priceCalc.toString()
        const priceArr = priceStr.split('.')

        if (!priceArr[1]) {
            priceArr[1] = '00'
        }

        if (priceArr[1].length < 2) {
            priceArr[1] = `${priceArr[1]}0`
        }

        setPriceArr(priceArr)
    }

    const addFactor = async () => {
        setDisableBtn(true)
        factor += 1
        console.log(factor)

        const docRef = doc(firestore, 'users', uid)
        userData.bag[bagItemPos].factor = factor

        setUserData(userData)

        await setDoc(docRef, userData)

        setFactor(factor)

        calculatePrice()

        calcGlobalPrice(1)
        setDisableBtn(false)
    }

    const subFactor = async () => {
        setDisableBtn(true)
        factor -= 1

        if (factor <= 0) {
            deleteItem(bagItem.item.uuid)
        } else {
            const docRef = doc(firestore, 'users', uid)
            userData.bag[bagItemPos].factor = factor

            setUserData(userData)

            await setDoc(docRef, userData)

            setFactor(factor)

            calculatePrice()

            calcGlobalPrice(-1)
        }
        setDisableBtn(false)
    }

    const deleteItem = async (uuid) => {
        console.log(factor)
        const docRef = doc(firestore, 'users', uid)
        const newBag = userData.bag.filter(item => item.item.uuid !== uuid)
        const newData = { ...userData, bag: newBag }

        calcGlobalPrice(-1)

        setUserData(newData)
        await setDoc(docRef, newData)
    }

    return (
        // <div className='bag-item'>
        //     <div className="bag-item-photo">
        //         <img src={imageUrl} />
        //     </div>
        //     <div className="bag-item-body">
        //         <h1 className='bag-item-price'>
        //             {priceArr[0] && (
        //                 <span>{priceArr[0]} руб.</span>
        //             )}

        //             &nbsp;

        //             {priceArr[1] && (
        //                 <span>{priceArr[1]} коп.</span>
        //             )}
        //         </h1>

        //         <div className="bag-item-btns">
        //             <button onClick={addFactor} className="btn bag-item-btn bag-item-btn-increment" disabled={disableBtn}>+</button>
        //             <button onClick={subFactor} className="btn bag-item-btn bag-item-btn-decrement" disabled={disableBtn}>-</button>
        //         </div>

        //     </div>
        // </div>
        <div className="bag-item">
            <div className="bag-item-photo">
                <img src={imageUrl} />
            </div>
            <div className="bag-item-body">
                <h1 className='bag-item-body-title'>
                    {name}
                </h1>
                <div className="bag-item-body-controls">
                    <button
                        className='bag-item-body-controls-btn bag-item-body-controls-btn-increment'
                        onClick={addFactor}
                    >
                        +
                    </button>

                    <div className="bag-item-body-controls-factor">{factor}</div>

                    <button
                        className='bag-item-body-controls-btn bag-item-body-controls-btn-decrement'
                        onClick={subFactor}
                    >
                        -
                    </button>
                </div>
                <div className="bag-item-body-price">
                    Цена: 

                    &nbsp;

                    {priceArr[0] && (
                        <span>{priceArr[0]} руб.</span>
                    )}

                    &nbsp;

                    {priceArr[1] && (
                        <span>{priceArr[1]} коп.</span>
                    )}
                </div>
            </div>
        </div>
    )
}
