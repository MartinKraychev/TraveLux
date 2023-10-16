import styles from "./property-details.module.css"

export const PropertyDetails = () => {
    return (
        <div
            className={`wow fadeInUp ${styles['centered-div']}`}
            data-wow-delay="0.1s"
        >
            <div className={`property-item rounded overflow-hidden ${styles['container']}`}>
                <div className="d-block h5 mb-2">
                    Appartment
                </div>
                <div className="position-relative overflow-hidden">
                    <img
                        className={`img-fluid ${styles['img']}`}
                        src="img/property-1.jpg"
                        alt=""
                    />
                </div>
                <div className="p-4 pb-0">
                    <h5 className="text-primary mb-3">$12,345</h5>
                    <p className="d-block h5 mb-2">
                        Golden Urban House For Sell
                    </p>
                    <p>
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        123 Street, New York, USA
                    </p>
                    <p>
                        If you want to book, don't hesitate and call <span className="d-block h6 mb-2">01234565454</span>
                    </p>
                    <p>
                        short summary
                    </p>
                </div>
            </div>
        </div>
    )
}
