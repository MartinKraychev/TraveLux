import { useParams } from "react-router-dom"
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom'

import { PropertyContext } from "../../../contexts/PropertyContext";
import { AuthContext } from "../../../contexts/AuthContext";
import { getPropertyById, canRate, rateProperty } from "../../../api/data";
import { StarRating } from "../property-star/property-star";

import styles from "./property-details.module.css"

export const PropertyDetails = () => {
    const { propertyId } = useParams()
    const [property, setProperty] = useState({})
    const [rateAvailability, setRateAvailability] = useState(false)
    const { deleteHandler, refreshDetails } = useContext(PropertyContext)
    const [showConfirmation, setShowConfirmation] = useState(false);
    const { isAuthenticated, auth } = useContext(AuthContext)
    const [selectedRating, setSelectedRating] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    let isOwner = false

    if (isAuthenticated) {
        isOwner = auth.user_id === property.owner_id
    }

    useEffect(() => {
        getPropertyById(propertyId)
            .then((property) => {
                if (!property.id) {
                    navigate('/not-found');
                    return;
                }
                setProperty(property)
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [propertyId])

    useEffect(() => {
        if (isAuthenticated) {
            canRate({ property_id: propertyId })
                .then(canRateBool => setRateAvailability(canRateBool))
        }

    }, [propertyId, isAuthenticated])

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
        deleteHandler(Number(propertyId))
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (!selectedRating) {
            setErrorMessage('Pick a rating before submitting');
            return;
        }

        rateProperty(propertyId, { vote: selectedRating })
            .then(() => {
                setRateAvailability(false);
                getPropertyById(propertyId)
                    .then(property => setProperty(property));
                refreshDetails()
            });
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
                <div className={styles['inner-container']}>
                    <div className={`p-4 pb-0 ${styles['left-container']}`}>
                        <h3 className="text-primary mb-3">
                            {property.title}
                        </h3>
                        <p className={styles['p-black']}>Price per night: ${property.price_per_night}</p>

                        <div>
                            <i className={`fa fa-map-marker-alt me-2 ${styles['p-black']}`} />
                            <p className={styles['p-black']}>{property.address}, {property.location}</p>
                        </div>
                        <p className={styles['p-black']}>
                            If you want to book, don't hesitate and call <span className="d-block h6 mb-2">{property.owner_number}</span>
                        </p>
                        <p className={styles['p-black']}>
                            {property.summary}
                        </p>
                    </div>
                    <div className={styles['right-container']}>
                        <div className={styles['rating-container']}>
                            <div className={styles['rating-display']}>
                                {property.average_rating > 0 ? <StarRating rating={property.average_rating} />
                                    : "Not rated yet"}
                            </div>
                            {isAuthenticated && rateAvailability &&
                                <form onSubmit={onSubmit}>
                                    {errorMessage && <p className={styles['error-message']}>{errorMessage}</p>}
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
            </div>
            {/* Delete confirmation overlay */}
            {showConfirmation && (
                <div className={styles['overlay']}>
                    <div className={styles['confirmation-dialog']}>
                        <p>Are you sure you want to delete this property?</p>
                        <div className={styles['confirmation-buttons']}>
                            <button className={styles['delete-button']} onClick={confirmDelete}>Yes, delete</button>
                            <button className={styles['cancel-button']} onClick={cancelDelete}>Cancel</button>
                        </div>
                    </div>
                </div>)}
        </div>
    )
}
