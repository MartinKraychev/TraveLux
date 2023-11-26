import { Link } from 'react-router-dom'

import styles from "./not-found.module.css"

export const NotFound = () => {
    return (
        <div className={styles['div']}>
            <h2>404 Not Found</h2>
            <p>The requested page could not be found.</p>
            <Link to={"/"}>Home</Link>
        </div>
    );
}