import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

import './Loading.scss'

export const Loading = () => {
    return (
        <div className='loading'>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#fff"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName="loading-loader"
                visible={true}
            />
        </div>
    )
}
