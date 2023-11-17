import React from 'react'
import { useParams } from 'react-router-dom'

export const Product = () => {
    const params = useParams()
    return (
        <div className="container">
            <div style={{ fontSize: '2.6rem' }}>{params.productid}</div>
        </div>
    )
}
