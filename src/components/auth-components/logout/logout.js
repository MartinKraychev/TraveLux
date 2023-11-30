import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import { logout } from '../../../api/data';
import { AuthContext } from '../../../contexts/AuthContext.js';

export const Logout = () => {
    const { userLogoutHandler } = useContext(AuthContext)
    const navigate = useNavigate()

    logout()
        .then(() => {
            userLogoutHandler();
            navigate('/');
    });
}