import { Link } from 'react-router-dom'

import styles from "./unauthorized.module.css"

export const Unauthorized = () => {

    return (
        <div className={styles['div']}>
            <h2>Unauthorized Access</h2>
            <p>You do not have permission to access this page.</p>
            <Link to={-2}>Go Back</Link>
        </div>
    );
}
