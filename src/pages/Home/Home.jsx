import React from 'react'
import { Link } from 'react-router-dom'

import './Home.scss'

export const Home = () => {
    return (
        <div className='home'>
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Link to='/product/coffee' className='home-link'>
                        Coffee
                    </Link>
                    <Link to='/products/desserts' className='home-link'>
                        Desserts
                    </Link>
                    <Link to='/products/beverages' className='home-link'>
                        Beverages
                    </Link>
                    <Link to='/products/food' className='home-link'>
                        Food
                    </Link>
                </div>
            </div>
        </div>
    )
}
