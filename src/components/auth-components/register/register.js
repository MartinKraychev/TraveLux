import { Link } from "react-router-dom"
import styles from "./register.module.css"

export const Register = () => {
    return (
        <section className={styles['register-page']}>
            <form className={styles['register']}>
                <div className={styles['container']}>
                    <h1 className={styles['title']}>Register</h1>
                    <label 
                        htmlFor="email" 
                        className={styles['label']}>
                            Email:
                    </label>
                    <input
                        className={styles['input']}
                        type="email"
                        id="email"
                        name="email"
                    />
                    <label 
                        htmlFor="password" 
                        className={styles['label']}>
                            Password:
                    </label>
                    <input 
                        className={styles['input']}
                        type="password" 
                        name="password" 
                        id="password" />
                    <label 
                        htmlFor="confirm-password" 
                        className={styles['label']}>
                            Confirm Password:
                    </label>
                    <input 
                        className={styles['input']}
                        type="password" 
                        name="confirm-password" 
                        id="confirm-password" />
                    <input 
                        className={styles['btn-submit']} 
                        type="submit" 
                        value="Register" 
                    />
                    <p className={styles['field']}>
                        <span>
                            If you already have profile, click <Link to="/login" className={styles['link']}>here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    )
}