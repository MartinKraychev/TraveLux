import { Link } from "react-router-dom"

import { StarRating } from "../property-star/property-star"

import styles from "./property-list-item.module.css"

export const PropertyListItem = ({ property }) => {
    return (
        <div
            className="col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="0.1s"
        >   <Link to={`/catalog/${property.id}`}>
                <div className={`rounded overflow-hidden ${styles['property-item']}`}>
                    <div className={`position-relative overflow-hidden ${styles['img-container']}`}>
                        <img
                            className={`img-fluid ${styles['img']}`}
                            src={property.image_url}
                            alt=""
                        />
                        <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                            {property.type}
                        </div>
                    </div>
                    <div className={styles['container']}>
                        <div className={styles['rating-display']}>
                            {property.average_rating > 0 ? <StarRating rating={property.average_rating} />
                                : <div className={styles['container-div']}>
                                    <p className={styles['container-p']}>This property is</p>
                                    <p className={styles['container-p']}>not yet rated</p>
                                </div>
                            }
                        </div>
                        <div className={`p-4 pb-0 ${styles['centered']}`}>
                            <h3 className="text-primary mb-3">
                                {property.title}
                            </h3>
                            <p className={styles['p-black']}>Price per night: ${property.price_per_night}</p>

                            <div>
                                <i className={`fa fa-map-marker-alt me-2 ${styles['p-black']}`} />
                                <p className={styles['p-black']}>{property.address}</p>
                                <p className={styles['p-black']}>{property.location}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}