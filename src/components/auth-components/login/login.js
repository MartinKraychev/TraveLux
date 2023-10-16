import { Link } from "react-router-dom"
import styles from "./login.module.css"

export const Login = () => {
    return (
        <section className={styles['login-page']}>
            <form className={styles['login']}>
                <div className={styles['container']}>
                    <h1 className={styles['title']}>Login</h1>
                    <label 
                        className={styles['label']} 
                        htmlFor="email">Email:
                    </label>
                    <input
                        className={styles['input']}
                        type="email"
                        id="email"
                        name="email"
                    />
                    <label 
                        className={styles['label']} 
                        htmlFor="password">Password:
                    </label>
                    <input 
                        className={styles['input']}
                        type="password" 
                        id="password" 
                        name="password" 
                    />
                    <input 
                        type="submit" 
                        className={styles['btn-submit']} 
                        value="Login" 
                    />
                    <p className={styles['field']}>
                        <span>
                            If you are not yet registered, click <Link to="/register" className={styles['link']}>here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    )
}