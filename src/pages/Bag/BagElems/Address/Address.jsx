import React from 'react'

export const Address = ({ addressTitle, setAddressEdit }) => {

    return (
        <div className="bag-header-search">
            <h1
                onClick={() => setAddressEdit(true)}
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
        </div>
    )
}
