import { useContext, useState } from 'react'
import { login } from '../../../api/data';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext.js';

import styles from "./login.module.css"

export const Login = () => {
    const navigate = useNavigate();
    const { userLoginHandler } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = formData;

        if (!email || !password) {
            setErrorMessage('All fields are required!');
            return;
        }

        try {
            const data = await login(email, password);

            if (data && data.message) {
                setErrorMessage(data.message);
            } else {
                userLoginHandler(data.access_token);
                navigate('/catalog');
            }
        } catch (error) {
            setErrorMessage(error.message || 'An unexpected error occurred.');
        }
    };

    return (
        <section className={styles['login-page']}>
            <form className={styles['login']} onSubmit={onSubmit}>
                <div className={styles['container']}>
                    <h1 className={styles['title']}>Login</h1>
                    {errorMessage && <p className={styles['error-message']}>{errorMessage}</p>}
                    <label className={styles['label']} htmlFor="email">
                        Email:
                    </label>
                    <input
                        className={styles['input']}
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <label className={styles['label']} htmlFor="password">
                        Password:
                    </label>
                    <input
                        className={styles['input']}
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <input
                        type="submit"
                        className={styles['btn-submit']}
                        value="Login"
                    />
                    <p className={styles['field']}>
                        <span>
                            If you are not yet registered, click{' '}
                            <Link to="/register" className={styles['link']}>
                                here
                            </Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}