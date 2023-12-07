import React, { useEffect, useState } from 'react'

import { Item } from './Item'
import { ItemPlaceholder } from './ItemPlaceholder'

export const Items = ({ userData, setUserData, globalCost, setGlobalCost, uid }) => {
    const getWindowSize = () => [window.innerWidth, window.innerHeight]
    const [windowSize, setWindowSize] = useState(getWindowSize())

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize())
        }

        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    const renderItems = () => {
        let itemsPerRow = 3
        let bagLength = userData.bag.length
        let lastRowItemCount = bagLength % itemsPerRow
        let placeholderCount = lastRowItemCount === 0 ? 0 : itemsPerRow - lastRowItemCount
   
        if (windowSize[0] <= 1310) {
            itemsPerRow = 2
            lastRowItemCount = bagLength % itemsPerRow
            placeholderCount = lastRowItemCount === 0 ? 0 : itemsPerRow - lastRowItemCount 
        }

        if (windowSize[0] <= 910) {
            itemsPerRow = 0
            lastRowItemCount = bagLength % itemsPerRow
            placeholderCount = lastRowItemCount === 0 ? 0 : itemsPerRow - lastRowItemCount 
        }

        const items = userData.bag.map((bagItem, bagItemPos) =>
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
        )

        for (let i = 0; i < placeholderCount; i++) {
            items.push(<ItemPlaceholder />)
        }

        return items
    }

    return (
        <div className='bag-items'>

            {renderItems()}

        </div>
    )
}
