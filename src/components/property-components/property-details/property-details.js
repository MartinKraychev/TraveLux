export const PropertyDetails = () => {
    return (
        <div
            className="col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="0.1s"
        >
            <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                    <img
                        className="img-fluid"
                        src="img/property-1.jpg"
                        alt=""
                    />
                    <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                        Appartment
                    </div>
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
                </div>
            </div>
        </div>
    )
}
