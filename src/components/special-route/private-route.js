import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'

import { AuthContext } from '../../contexts/AuthContext' 

export const PrivateRoute = () => {
    const {isAuthenticated} = useContext(AuthContext)

    if (!isAuthenticated) {
        return <Navigate to="/login" replace/>
    }

    return <Outlet />
}