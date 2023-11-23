import styles from "./property-list-item.module.css"
import { Link } from "react-router-dom"

export const PropertyListItem = ({property}) => {
    return (
        <div
            className="col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="0.1s"
        >   <Link to={`/catalog/${property.id}`}>
                <div className={`rounded overflow-hidden ${styles['property-item']}`}>
                    <div className="position-relative overflow-hidden">
                        <img
                            className={`img-fluid ${styles['img']}`}
                            src={property.image_url}
                            alt=""
                        />
                        <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                            {property.type}
                        </div>
                    </div>
                    <div className="p-4 pb-0">
                        <h5 className="text-primary mb-3">${property.price_per_night}</h5>
                        <p className="d-block h5 mb-2">
                            {property.title}
                        </p>
                        <p>
                            <i className="fa fa-map-marker-alt text-primary me-2" />
                            {property.address}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}