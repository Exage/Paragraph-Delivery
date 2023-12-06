import React from 'react'

import { Item } from './Item'

export const Items = ({ userData, setUserData, globalCost, setGlobalCost, uid }) => {
    return (
        <div className='bag-items'>

            {userData.bag.map((bagItem, bagItemPos) => 
                <Item
                    userData={userData}
                    setUserData={setUserData}

                    key={bagItem.item.uuid}
                    
                    bagItem={bagItem}
                    bagItemPos={bagItemPos}
                    
                    globalCost={globalCost}
                    setGlobalCost={setGlobalCost}

                    uid={uid}
                />
            )}

        </div>
    )
}
