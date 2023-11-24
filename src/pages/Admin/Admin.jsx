import React, { useEffect, useState } from 'react'
import { arrayUnion, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { uploadBytes, getDownloadURL, ref } from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid'
import { firestore, storage } from '../../firebase'

import TextareaAutosize from 'react-textarea-autosize'

import './Admin.scss'

import { HomeItems } from '../Home/HomeItems'

export const Admin = () => {
    const [disableInputs, setDisableInputs] = useState(false)
    const [productSelectedOption, setProductSelectedOption] = useState('')

    const [singleProduct, setSingleProduct] = useState(false)

    const [name, setName] = useState('')
    const [bodyDescription, setBodyDescription] = useState('')
    const [bodyConsist, setBodyConsist] = useState('')
    const [bodyMfp, setBodyMfp] = useState('')

    const [bodyPriceRubles, setBodyPriceRubles] = useState('')
    const [bodyPriceKopecks, setBodyPriceKopecks] = useState('')

    const [weight, setWeight] = useState('')
    const [weightSelectedOption, setWeightSelectedOption] = useState('гр.')

    const [selectedImage, setSelectedImage] = useState(null)

    useEffect(() => {
        const checkItems = () => {
            HomeItems.map(item => {
                if (item.id === productSelectedOption) {
                    if (item.singleProduct) {
                        setSingleProduct(true)
                    } else {
                        setSingleProduct(false)
                    }
                }
            })
        }

        checkItems()

        return (() => {
        })
    }, [productSelectedOption])

    const sendData = async () => {
        try {
            const docRef = doc(firestore, 'products', productSelectedOption)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                const newProduct = {
                    name: name.trim(),
                    body: {
                        description: bodyDescription.trim(),
                        consist: bodyConsist.trim(),
                        mfp: bodyMfp.trim(),
                    },
                    uuid: uuidv4(),
                    price: [+bodyPriceRubles, +bodyPriceKopecks],
                    weight: {
                        number: +weight,
                        measure: weightSelectedOption,
                    },
                }

                if (selectedImage) {
                    const imageRef = ref(storage, `${productSelectedOption}/${productSelectedOption}-item-${uuidv4()}`)
                    await uploadBytes(imageRef, selectedImage)

                    const imageUrl = await getDownloadURL(imageRef)
                    newProduct.imageUrl = imageUrl
                }

                await updateDoc(docRef, {
                    product: arrayUnion(newProduct),
                })

                console.log('Данные успешно добавлены в Firestore')
                alert('Данные успешно добавлены в Firestore')
            } else {
                console.log('Документ не существует!')
                alert('Документ не существует!')
            }
        } catch (error) {
            console.error('Ошибка при добавлении данных в Firestore', error)
            alert('а при добавлении данных в Firestore')
        } finally {
            setDisableInputs(false)
        }
    }

    const handleSubmit = (Event) => {
        Event.preventDefault()
        setDisableInputs(true)
        sendData()
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0]
        setSelectedImage(file)
    }

    const handelProductSelected = (Event) => {
        setProductSelectedOption(Event.target.value)
    }

    return (
        <div className='admin'>
            <div className="container">

                <form onSubmit={handleSubmit}>
                    <h1 className='admin-title'>
                        Добавить товары
                    </h1>

                    <div className="admin-select-wrapper">
                        <label htmlFor="menu" className='admin-select-label'>Выбрать категорию: </label>

                        <select disabled={disableInputs} id='menu' className='admin-select' value={productSelectedOption} onChange={handelProductSelected}>
                            <option value="" disabled>ПРОДУКТЫ</option>
                            {HomeItems.map((item, key) => {
                                return <option key={key} value={item.id}>{item.name}</option>
                            })}
                        </select>
                    </div>
                    <hr />

                    {/* Inputs */}
                    {(!singleProduct) ? (
                        <>
                            <div className="admin-inputs">

                                <h2 style={{ fontSize: '3.6rem' }}>
                                    products/{productSelectedOption}
                                </h2>
                                <div className="admin-input">
                                    <h1>Название</h1>
                                    <input
                                        type="text"
                                        className='input'

                                        disabled={disableInputs}

                                        value={name}
                                        onChange={Event => setName(Event.target.value)}
                                    />
                                </div>
                                <div className="admin-input">
                                    <h1>Информация</h1>

                                    <div className="admin-input">
                                        <h1>Описание</h1>
                                        <TextareaAutosize
                                            className='input'
                                            minRows={5}

                                            disabled={disableInputs}

                                            value={bodyDescription}
                                            onChange={Event => setBodyDescription(Event.target.value)}
                                        />
                                    </div>
                                    <div className="admin-input">
                                        <h1>Состав</h1>
                                        <TextareaAutosize
                                            className='input'
                                            minRows={5}

                                            disabled={disableInputs}

                                            value={bodyConsist}
                                            onChange={Event => setBodyConsist(Event.target.value)}
                                        />
                                    </div>
                                    <div className="admin-input">
                                        <h1>КБЖУ</h1>
                                        <TextareaAutosize
                                            className='input'
                                            minRows={5}

                                            disabled={disableInputs}

                                            value={bodyMfp}
                                            onChange={Event => setBodyMfp(Event.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="admin-inputs">
                                <h1>Цена</h1>

                                <div className="admin-input">
                                    <h1>руб.</h1>
                                    <input
                                        type="text"
                                        className='input'

                                        disabled={disableInputs}

                                        value={bodyPriceRubles}
                                        onChange={Event => setBodyPriceRubles(Event.target.value)}
                                    />
                                </div>
                                <div className="admin-input">
                                    <h1>коп.</h1>
                                    <input
                                        type="text"
                                        className='input'

                                        disabled={disableInputs}

                                        value={bodyPriceKopecks}
                                        onChange={Event => setBodyPriceKopecks(Event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="admin-inputs">
                                <h1>Вес</h1>

                                <div className="admin-input">
                                    <h1>Число</h1>
                                    <input
                                        type="text"
                                        className='input'

                                        disabled={disableInputs}

                                        value={weight}
                                        onChange={Event => setWeight(Event.target.value)}
                                    />
                                </div>
                                <div className="admin-input">
                                    <select disabled={disableInputs} id='menu' className='admin-select' value={weightSelectedOption} onChange={(Event) => setWeightSelectedOption(Event.target.value)}>
                                        <option value={'гр.'}>гр.</option>
                                        <option value={'л.'}>л.</option>
                                    </select>
                                </div>
                            </div>
                            <div className="admin-input">
                                <h1>Изображение</h1>
                                <input
                                    disabled={disableInputs}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="admin-inputs">
                                <div className="admin-input">
                                    <h1>ИМЯ</h1>
                                    <TextareaAutosize
                                        className='input'
                                        minRows={5}

                                        disabled={disableInputs}

                                        value={bodyMfp}
                                        onChange={Event => setBodyMfp(Event.target.value)}
                                    />
                                </div>
                            </div>
                        </>
                    )}
                    {/* Inputs */}

                    <button disabled={disableInputs} className="btn admin-btn">Отправить</button>
                </form>

            </div>
        </div>
    )
}
