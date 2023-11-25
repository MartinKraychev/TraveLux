import { useParams } from "react-router-dom"
import { useState, useEffect, useContext, useRef } from "react";
import { Link } from 'react-router-dom'

import { PropertyContext } from "../../../contexts/PropertyContext";
import { AuthContext } from "../../../contexts/AuthContext";
import { getPropertyById } from "../../../api/data";

import styles from "./property-details.module.css"

export const PropertyDetails = () => {
    const { propertyId } = useParams()
    const overlayRef = useRef(null);
    const [property, setProperty] = useState({})

    useEffect(() => {
        getPropertyById(propertyId)
            .then(property => setProperty(property))
    }, [propertyId])

    const { myProperties, deleteHandler } = useContext(PropertyContext)
    const { IsAuthenticated } = useContext(AuthContext)
    const [selectedRating, setSelectedRating] = useState('');
    const isOwner = myProperties.some(prop => prop.id === property.id);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleRatingChange = (event) => {
        setSelectedRating(event.target.value);
    };

    const handleDelete = async () => {
        // Show the confirmation overlay
        setShowConfirmation(true);
    };

    const cancelDelete = () => {
        // Hide the confirmation overlay
        setShowConfirmation(false);
    };

    const confirmDelete = async () => {
        deleteHandler(propertyId)
    }

    const onSubmit = (event) => {
        event.preventDefault();

    }

    return (
        <div
            className={`wow fadeInUp ${styles['centered-div']}`}
            data-wow-delay="0.1s"
        >
            <div className={`property-item rounded overflow-hidden ${styles['container']}`}>
                <div className="d-block h5 mb-2">
                    {property.type}
                </div>
                <div className="position-relative overflow-hidden">
                    <img
                        className={`img-fluid ${styles['img']}`}
                        src={property.image_url}
                        alt="img"
                    />
                </div>
                <div className={`p-4 pb-0 ${styles['info']}`}>
                    <h5 className="text-primary mb-3">${property.price_per_night}</h5>
                    <p className="d-block h5 mb-2">
                        {property.title}
                    </p>
                    <div>
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        <p>{property.address}</p>
                        <p>{property.location}</p>
                    </div>
                    <p>
                        If you want to book, don't hesitate and call <span className="d-block h6 mb-2">{property.owner_number}</span>
                    </p>
                    <p>
                        {property.summary}
                    </p>
                </div>
                <div className={styles['right-container']}>
                    <div className={styles['rating-container']}>
                        <div className={styles['rating-display']}>
                            {property.average_rating > 0 ? `Rating: ${property.average_rating}` : "Not rated yet"}
                        </div>
                        {IsAuthenticated &&
                            <form onSubmit={onSubmit}>
                                <select
                                    id="rate"
                                    name="rate"
                                    className={styles['rating-select']}
                                    onChange={handleRatingChange}
                                    value={selectedRating}
                                >
                                    <option value="">Select a rating</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <button type="submit" className={styles['rate-button']}>
                                    Rate this property
                                </button>
                            </form>}

                    </div>
                    {isOwner &&
                        (<div className={styles['buttons-container']}>
                            <Link to={`/catalog/${propertyId}/edit`} className={styles['edit-button']}>Edit</Link>
                            <button className={styles['delete-button']} onClick={handleDelete}>
                                Delete
                            </button>
                        </div>)
                    }
                </div>
            </div>
            {/* Delete confirmation overlay */}
            {showConfirmation && (
                <div className={styles['overlay']}>
                    <div className={styles['confirmation-dialog']}>
                        <p>Are you sure you want to delete this property?</p>
                        <div className={styles['confirmation-buttons']}>
                            <button onClick={confirmDelete}>Yes, delete</button>
                            <button onClick={cancelDelete}>Cancel</button>
                        </div>
                    </div>
                </div>)}
        </div>
    )
}
