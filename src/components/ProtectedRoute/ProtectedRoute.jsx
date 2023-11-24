import React from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({
    isAllowed,
    redirectPath = '/',
    children,
}) => {
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace />
    }

    return children ? children : <Outlet />
};
