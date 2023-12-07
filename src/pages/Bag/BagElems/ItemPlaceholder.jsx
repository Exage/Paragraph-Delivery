import React from 'react'

export const ItemPlaceholder = () => {
    return (
        <div className="bag-item">
            <div className="bag-item-photo bag-item-photo-placeholder">
                
            </div>
            <div className="bag-item-body">
                <div className="bag-title-price bag-item-body-controls">
                    <button
                        className='bag-item-body-controls-btn bag-item-body-controls-btn-increment'
                    >
                        +
                    </button>

                    <div className="bag-item-body-controls-factor">0</div>

                    <button
                        className='bag-item-body-controls-btn bag-item-body-controls-btn-decrement'
                    >
                        -
                    </button>
                </div>
                <div className="bag-title bag-item-body-price">
                    Цена:&nbsp;<span className='bag-title-price'>0</span>&nbsp;руб.&nbsp;<span className='bag-title-price'>00</span>&nbsp;коп.
                </div>
            </div>
        </div>
    )
}
