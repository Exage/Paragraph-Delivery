import React, { useState, useEffect, useRef } from 'react'

import side from '../../../images/products/sides/desserts-side.jpg'

export const Sidebar = ({ product, isSideLeft }) => {
    const sideRef = useRef()
    const [parallax, setParallax] = useState(0)

    const handleScroll = () => {
        const scrollPosition = window.scrollY
        const contentScroll = document.documentElement.scrollHeight - window.innerHeight
        const sideScroll = sideRef.current.clientHeight - window.innerHeight

        const translateY = (scrollPosition * sideScroll) / contentScroll

        setParallax(translateY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return (() => {
            window.removeEventListener('scroll', handleScroll)
        })
    }, [])

    return (
        <div className="products-sidebar">
            <div className="container container-nopadding">
                <div className={isSideLeft ? 'products-sidebar-photo sideLeft' : 'products-sidebar-photo'}>
                    <div className="products-sidebar-photo-wrapper">
                        <img
                            ref={sideRef}
                            src={product.sideImg}
                            style={{ transform: `translateY(-${parallax}px)` }}
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
