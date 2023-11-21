import { createContext } from "react";
import { UseLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext()

export const AuthProvider = ({
    children
}) => {
    const [auth, setAuth] = UseLocalStorage('accessToken', '')
    const userLoginHandler = (data) => {
        setAuth(data)
    }

    const userLogoutHandler = () => {
        setAuth('')
    }

    return (
    <AuthContext.Provider value={{
        auth, 
        userLoginHandler, 
        userLogoutHandler,
        isAuthenticated: auth !== ''}}>
        {children}
    </AuthContext.Provider>)
}