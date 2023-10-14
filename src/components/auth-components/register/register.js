import { Link } from "react-router-dom"

export const Register = () => {
    return (
        <section id="register-page">
            <form id="register">
                <div className="container">
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                    />
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" />
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" />
                    <input className="btn submit" type="submit" value="Register" />
                    <p className="field">
                        <span>
                            If you already have profile, click <Link to="/login">here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    )
}