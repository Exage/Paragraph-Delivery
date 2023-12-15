import React, { useState } from 'react'

import { AddressEdit } from './AddressEdit'

export const Address = ({ addressTitle, userData, setUserData, uid, showEdit, setShowEdit }) => {

    return (
        <div className="bag-header-search">
            <h1
                onClick={() => setShowEdit(true)}
                className="bag-header-title bag-header-title-clickable"
            >
                <span
                    className='bag-header-title bag-header-title-underline'
                >
                    Ваш адрес:
                </span>

                <span className='bag-header-address'>
                    {(addressTitle !== '') ? (
                        addressTitle
                    ) : (
                        'Не Указан'
                    )}
                </span>
            </h1>
            {showEdit && (
                <AddressEdit
                    setShowEdit={setShowEdit}

                    userData={userData}
                    setUserData={setUserData}

                    uid={uid}
                />
            )}
        </div>
    )
}
