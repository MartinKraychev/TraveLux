import { useContext, useState } from 'react'
import { register } from '../../../api/data';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext.js';

import styles from "./register.module.css";

export const Register = () => {
    const navigate = useNavigate();
    const { userLoginHandler } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
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

        const { email, phoneNumber, password, confirmPassword } = formData;

        if (!email || !phoneNumber || !password || !confirmPassword) {
            setErrorMessage('All fields are required!');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Password must match!');
            return;
        }

        try {
            const data = await register(email, password, phoneNumber);

            if (data && data.message) {
                setErrorMessage(data.message);
            } else {
                userLoginHandler({access_token: data.access_token, user_id: data.id});
                navigate('/catalog');
            }
        } catch (error) {
            setErrorMessage(error.message || 'An unexpected error occurred.');
        }
    };

    return (
        <section className={styles['register-page']}>
            <form className={styles['register']} onSubmit={onSubmit}>
                <div className={styles['container']}>
                    <h1 className={styles['title']}>Register</h1>
                    {errorMessage && <p className={styles['error-message']}>{errorMessage}</p>}
                    <label htmlFor="email" className={styles['label']}>
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
                    <label htmlFor="phoneNumber" className={styles['label']}>
                        Phone Number:
                    </label>
                    <input
                        className={styles['input']}
                        type="phoneNumber"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="password" className={styles['label']}>
                        Password:
                    </label>
                    <input
                        className={styles['input']}
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="confirm-password" className={styles['label']}>
                        Confirm Password:
                    </label>
                    <input
                        className={styles['input']}
                        type="password"
                        name="confirmPassword"
                        id="confirm-password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                    />
                    <input className={styles['btn-submit']} type="submit" value="Register" />
                    <p className={styles['field']}>
                        <span>
                            If you already have a profile, click{' '}
                            <Link to="/login" className={styles['link']}>
                                here
                            </Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
};