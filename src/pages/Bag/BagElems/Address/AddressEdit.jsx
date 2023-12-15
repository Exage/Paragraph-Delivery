import React, { useRef, useState }from 'react'

import { doc, setDoc } from 'firebase/firestore'
import { firestore } from '../../../../firebase'

import UserAdressesData from '../../../../UserAdresses.json'

export const AddressEdit = ({ setShowEdit, userData, setUserData, uid }) => {

    const [disableAll, setDisableAll] = useState(false)
    const [filteredData, setFilteredData] = useState([])

    const [wordEntered, setWordEntered] = useState('')
    const [house, setHouse] = useState('')
    const [flat, setFlat] = useState('')

    const [isAddressComplete, setIsAddressComplete] = useState(disableAll)

    const handleFilter = (event) => {
        const searchWord = event.target.value
        setWordEntered(searchWord)

        setIsAddressComplete(searchWord.trim() !== '' && house.trim() !== '')

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

        setIsAddressComplete(wordEntered.trim() !== '' && house.trim() !== '')
    }

    const handleHouse = (event) => {
        const houseValue = event.target.value
        setHouse(houseValue)

        setIsAddressComplete(wordEntered.trim() !== '' && house.trim() !== '')
    }

    const handleClose = () => {
        setShowEdit(false)
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
        if (event.target.classList.contains('bag-header-search-edit-overlay') && !disableAll) {
            handleClose()
        }
    }

    return (
        <div className="bag-header-search-edit-overlay" onClick={handleOverlayClick}>
            <div className="container">
                <div className="bag-header-search-edit">
                    <form className="bag-header-search-form">
                        <label
                            className='bag-header-search-form-title'
                            htmlFor="bag-header-search-input-address"
                        >
                            Адреса*:
                        </label>
                        <div className="bag-header-search-inputs bag-header-search-inputs-address">
                            <div className="bag-header-search-inputs">
                                <input
                                    type="text"
                                    placeholder={'Ваш Адрес*'}

                                    id='bag-header-search-input-address'

                                    className='input bag-header-search-input bag-header-search-input-address'

                                    value={wordEntered}
                                    onChange={handleFilter}
                                    disabled={disableAll}
                                />
                                {filteredData.length != 0 && (
                                    <div className="bag-header-search-results">
                                        <div className="bag-header-search-results-items">
                                            {filteredData.slice(0, 15).map((value, key) => {
                                                return (
                                                    <button
                                                        key={key}
                                                        className='bag-header-search-results-item'
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
                        </div>
                        <label className='bag-header-search-form-title' htmlFor="bag-header-search-input-house">
                            Дом*:
                        </label>
                        <div className="bag-header-search-inputs bag-header-search-inputs-house">
                            <div className="bag-header-search-inputs">
                                <input
                                    type="text"
                                    placeholder={'Дом*'}

                                    id='bag-header-search-input-house'

                                    className='input bag-header-search-input bag-header-search-input-house'

                                    value={house}
                                    onChange={handleHouse}
                                    disabled={disableAll}
                                />
                            </div>
                        </div>
                        <label className='bag-header-search-inputs bag-header-search-form-title' htmlFor="bag-header-search-input-flat">
                            Кв.:
                        </label>
                        <div className="bag-header-search-inputs bag-header-search-inputs-flat">
                            <div className="bag-header-search-inputs">
                                <input
                                    type="text"
                                    placeholder={'Кв.'}

                                    id='bag-header-search-input-flat'

                                    className='input bag-header-search-input bag-header-search-input-flat'

                                    value={flat}
                                    onChange={Event => setFlat(Event.target.value)}
                                    disabled={disableAll}
                                />
                            </div>
                        </div>
                        <div className="bag-header-search-form-controls">
                            <button
                                onClick={handleSave}
                                className='btn bag-header-search-form-controls-btn'

                                disabled={!isAddressComplete}>V</button>
                            <button
                                onClick={handleClose}
                                className='btn bag-header-search-form-controls-btn'
                                disabled={disableAll}
                            >X</button>
                        </div>

                    </form>
                    <span className='bag-header-search-edit-span'>* - обязательно для заполнения</span>
                </div>
            </div>
        </div>
    )
}
