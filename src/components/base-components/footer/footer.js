import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <div
            className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn"
            data-wow-delay="0.1s"
        >
            <div className="container py-5">
                <div className="footer-row">
                    <div className="col-lg-3 col-md-6 items-centered" >
                        <h5 className="text-white mb-4">Get In Touch</h5>
                        <p className="mb-2">
                            <i className="fa fa-map-marker-alt me-3" />
                            123 Street, Dummy Address, USA
                        </p>
                        <p className="mb-2">
                            <i className="fa fa-phone-alt me-3" />
                            +012 345 67890
                        </p>
                        <p className="mb-2">
                            <i className="fa fa-envelope me-3" />
                            martinkraychev987@gmail.com
                        </p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href="https://twitter.com">
                                <i className="fab fa-twitter" />
                            </a>
                            <a className="btn btn-outline-light btn-social" href="https://facebook.com">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a className="btn btn-outline-light btn-social" href="https://youtube.com">
                                <i className="fab fa-youtube" />
                            </a>
                            <a className="btn btn-outline-light btn-social" href="https://linkedin.com">
                                <i className="fab fa-linkedin-in" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 items-centered">
                        <h5 className="text-white mb-4">Quick Links</h5>
                        <a className="btn btn-link text-white-50" href="">
                            About Us
                        </a>
                        <a className="btn btn-link text-white-50" href="">
                            Contact Us
                        </a>
                        <a className="btn btn-link text-white-50" href="">
                            Our Services
                        </a>
                        <a className="btn btn-link text-white-50" href="">
                            Privacy Policy
                        </a>
                        <a className="btn btn-link text-white-50" href="">
                            Terms &amp; Condition
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Photo Gallery</h5>
                        <div className="row g-2 pt-2">
                            <div className="col-4">
                                <img
                                    className="img-fluid rounded bg-light p-1"
                                    src="img/property-1.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="col-4">
                                <img
                                    className="img-fluid rounded bg-light p-1"
                                    src="img/property-2.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="col-4">
                                <img
                                    className="img-fluid rounded bg-light p-1"
                                    src="img/property-3.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="col-4">
                                <img
                                    className="img-fluid rounded bg-light p-1"
                                    src="img/property-4.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="col-4">
                                <img
                                    className="img-fluid rounded bg-light p-1"
                                    src="img/property-5.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="col-4">
                                <img
                                    className="img-fluid rounded bg-light p-1"
                                    src="img/property-6.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="footer-end">
                            TraveLux
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}