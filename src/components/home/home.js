export const Home = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="about-img position-relative overflow-hidden p-5 pe-0">
                            <img className="img-fluid w-100" src="img/about.jpg" />
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
    )
}