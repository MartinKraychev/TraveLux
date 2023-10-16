import { Link } from "react-router-dom"
import styles from "./nav-bar.module.css"

export const NavBar = () => {
    return (
        <div className={`container-fluid bg-transparent ${styles['nav-bar']}`}>
            <nav className={`navbar-expand-lg bg-white navbar-light py-0 px-4 ${styles['navbar']}`}>
                <Link className="navbar-brand d-flex align-items-center text-center" to="/">
                    <div className={`p-2 me-2  ${styles['icon']}`}>
                        <img
                            className="img-fluid"
                            src="img/icon-deal.png"
                            alt="Icon"
                            style={{ width: 30, height: 30 }}
                        />
                    </div>
                    <h1 className="m-0 text-primary">TraveLux</h1>
                </Link>
                <button
                    type="button"
                    className="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className={`ms-auto ${styles['navbar-nav']}`}>
                        <Link to="/login" className={`nav-item ${styles['nav-link']}`}>
                            Login
                        </Link>
                        <Link to="/register" className={`nav-item ${styles['nav-link']}`}>
                            Register
                        </Link>
                        <Link to="/logout" className={`nav-item ${styles['nav-link']}`}>
                            Loout
                        </Link>
                        <Link to="/my-properties" className={`nav-item ${styles['nav-link']}`}>
                            My properties
                        </Link>
                        <Link to="/catalog" className={`nav-item ${styles['nav-link']}`}>
                            Catalog
                        </Link>
                        <Link to="/team" className={`nav-item ${styles['nav-link']}`}>
                            Meet the team
                        </Link>
                        {/* <Link to="/testimonial" className="nav-item nav-link">
                            Testimonial
                        </Link> */}
                        <Link to="/contact" className={`nav-item ${styles['nav-link']}`}>
                            Contact
                        </Link>
                    </div>
                    <Link to="/add-property" className={`btn btn-primary px-3 d-none d-lg-flex ${styles['add-btn']}`}>
                        Add Property
                    </Link>
                </div>
            </nav>
        </div>


    )
}