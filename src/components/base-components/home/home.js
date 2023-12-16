import { Link } from "react-router-dom"

import styles from "./home.module.css"

export const Home = () => {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className={`position-relative overflow-hidden p-5 pe-0 ${styles['about-img-left']}`}>
                                <img className={`img-fluid w-100 ${styles['img-left']}`} src="img/about.jpg" alt="home-img-1"/>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="mb-4">TraveLux - Your Passport to Premium Travel Experiences</h1>
                            <p className="mb-4">
                                Welcome to TraveLux, where adventure meets comfort.
                                Our platform brings you a curated collection of unique and stunning accommodations around the world.
                                Whether you're seeking a cozy cabin in the woods, a luxurious beachfront villa, or an urban loft with a view, we've got you covered.
                            </p>
                            <p>
                                <i className="fa fa-check text-primary me-3" />
                                <b>Discover Hidden Gems</b>: Find one-of-a-kind accommodations in the most captivating destinations.
                            </p>
                            <p>
                                <i className="fa fa-check text-primary me-3" />
                                <b>Plan Your Perfect Getaway</b>: Tailor your trip to your preferences and budget.
                            </p>
                            <p>
                                <i className="fa fa-check text-primary me-3" />
                                <b>Book with Confidence</b>: Our secure and user-friendly platform ensures worry-free reservations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid header bg-white p-0">
                <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                    <div className="col-md-6 p-5 mt-lg-5">
                        <h1 className="mb-4">
                        Where Agents and Adventurers Meet
                        </h1>
                        <p className="animated fadeIn mb-4 pb-2">
                        Our platform is your one-stop destination for both property agents to showcase their premium accommodations and travelers to discover, 
                        book, and experience their dream getaways.
                        </p>
                        <Link to="/catalog" className={`btn btn-primary py-3 px-5 me-3 animated fadeIn ${styles['colored-btn']}`}>
                            Get Started
                        </Link>
                    </div>
                    <div className="col-md-6 animated fadeIn">
                        <div className="owl-carousel header-carousel">
                            <div className={`position-relative overflow-hidden p-5 pe-0 ${styles['about-img-right']}`}>
                                <img className={`img-fluid about-img-right  ${styles['img-right']}`} src="img/carousel-1.jpg" alt="home-img-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}