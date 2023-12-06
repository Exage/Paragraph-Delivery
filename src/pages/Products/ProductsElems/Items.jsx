import React from 'react'

import { Item } from './Item'

export const Items = ({ product, userData, setUserData, uid }) => {
    return (
        <div className="products-items">
            <div className="products-items-head">
                <h1 className="products-items-head-title title">{product.name}</h1>
            </div>
            <div className="products-items-body">
                {product.product.map((item) => (
                    <Item
                        key={item.uuid}
                        item={item}

                        userData={userData}
                        setUserData={setUserData}

                        uid={uid} 
                    />
                ))}
            </div>
        </div>
    )
}
