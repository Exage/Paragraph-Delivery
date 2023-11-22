import React from 'react'

export const Loading = ({ text="Loading..." }) => {
    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5.2rem' }}>{text}</div>
    )
}
