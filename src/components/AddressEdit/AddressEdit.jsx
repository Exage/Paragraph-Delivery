import React, { useRef, useState } from 'react'

import { doc, setDoc } from 'firebase/firestore'
import { firestore } from '../../firebase'

import UserAdressesData from '../../UserAdresses.json'

import './AddressEdit.scss'

export const AddressEdit = ({ setAddressEdit, userData, setUserData, uid }) => {
    const [disableAll, setDisableAll] = useState(false)
    const [filteredData, setFilteredData] = useState([])

    const [wordEntered, setWordEntered] = useState('')
    const [house, setHouse] = useState('')
    const [flat, setFlat] = useState('')

    const [isAddressComplete, setIsAddressComplete] = useState(disableAll)

    const handleFilter = (event) => {
        const searchWord = event.target.value
        setWordEntered(searchWord)

        const addressComplete = (searchWord.trim() !== '' && house.trim() !== '')

        setIsAddressComplete(addressComplete)

        const newFilter = UserAdressesData.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase())
        })

        if (searchWord === "") {
            setFilteredData([])
        } else {
            setFilteredData(newFilter)
        }
    }

    const handleClickBtn = (name) => {
        setWordEntered(name)
        setFilteredData([])

        const addressComplete = (wordEntered.trim() !== '' && house.trim() !== '')
        setIsAddressComplete(addressComplete)
    }

    const handleHouse = (event) => {
        const houseValue = event.target.value
        setHouse(houseValue)

        const addressComplete = (wordEntered.trim() !== '' && houseValue.trim() !== '')
        setIsAddressComplete(addressComplete)
    }

    const handleClose = () => {
        setAddressEdit(false)
        setIsAddressComplete(false)
        setDisableAll(false)
        setFilteredData([])

        setWordEntered('')
        setHouse('')
        setFlat('')
    }

    const handleSave = async () => {
        setDisableAll(true)
        setIsAddressComplete(false)
        const docRef = doc(firestore, 'users', uid)

        const address = flat ? `${wordEntered} ${house}, кв.${flat}` : `${wordEntered} ${house}`
        const newData = { ...userData, address: address }

        setUserData(newData)

        await setDoc(docRef, newData)
        handleClose()
    }

    const handleOverlayClick = (event) => {
        if (event.target.classList.contains('address-edit-overlay') && !disableAll) {
            handleClose()
        }
    }

    return (
        <div className="address-edit-overlay" onClick={handleOverlayClick}>
            <div className="container">
                <div className="address-edit">
                    <form className="address-edit-form">
                        <label
                            className='address-edit-form-label'
                            htmlFor="address-edit-input-addresses"
                        >
                            Адреса*:
                        </label>
                        <div className="address-edit-inputs address-edit-inputs-addresses">
                            <input
                                type="text"
                                placeholder={'Ваш Адрес*'}

                                id='address-edit-input-addresses'

                                className='input address-edit-input address-edit-input-addresses'

                                value={wordEntered}
                                onChange={handleFilter}
                                disabled={disableAll}
                            />
                            {filteredData.length != 0 && (
                                <div className="address-edit-results">
                                    <div className="address-edit-results-items">
                                        {filteredData.slice(0, 15).map((value, key) => {
                                            return (
                                                <button
                                                    key={key}
                                                    className='address-edit-results-item'
                                                    onClick={() => handleClickBtn(value.name)}
                                                >
                                                    {value.name}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                        <label className='address-edit-form-label' htmlFor="address-edit-input-house">
                            Дом*:
                        </label>
                        <div className="address-edit-inputs address-edit-inputs-house">
                            <input
                                type="text"
                                placeholder={'Дом*'}

                                id='address-edit-input-house'

                                className='input address-edit-input address-edit-input-house'

                                value={house}
                                onChange={handleHouse}
                                disabled={disableAll}
                            />
                        </div>
                        <label className='address-edit-form-label' htmlFor="address-edit-input-flat">
                            Кв.:
                        </label>
                        <div className="address-edit-inputs address-edit-inputs-flat">
                            <input
                                type="text"
                                placeholder={'Кв.'}

                                id='address-edit-input-flat'

                                className='input address-edit-input address-edit-input-flat'

                                value={flat}
                                onChange={Event => setFlat(Event.target.value)}
                                disabled={disableAll}
                            />
                        </div>
                        <div className="address-edit-controls">
                            <button
                                onClick={handleSave}
                                className='btn address-edit-controls-btn'

                                disabled={!isAddressComplete}>V</button>
                            <button
                                onClick={handleClose}
                                className='btn address-edit-controls-btn'
                                disabled={disableAll}
                            >X</button>
                        </div>

                    </form>
                    <span className='address-edit-span'>* - обязательно для заполнения</span>
                </div>
            </div>
        </div>
    )
}
