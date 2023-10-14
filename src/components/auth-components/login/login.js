import { Link } from "react-router-dom"

export const Login = () => {
    return (
        <section id="login-page">
            <form id="login">
                <div className="container">
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                    />
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                    />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>
                            If you are not yet registered, click <Link to="/register">here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    )
}