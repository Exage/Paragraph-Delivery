import React from 'react'

import styles from './NotFound.module.scss'

export const NotFound = (isAuth, isRegister) => {
    if (!isAuth) {
        console.log('Not Auth')
        return <Navigate to='/auth' />
    }

    if (!isRegister) {
        console.log('Not Register')
        return <Navigate to='/register' />
    }
    
    return (
        <div className={styles.notFound}>
            404 :(
        </div>
    )
}
