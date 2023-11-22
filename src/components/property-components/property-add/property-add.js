import { useState } from 'react';
import { createProperty } from '../../../api/data';
import { useNavigate } from 'react-router-dom';

import styles from "./property-add.module.css"

export const PropertyAdd = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        type: '',
        img: '',
        price: '',
        address: '',
        location: '',
        summary: '',
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const { title, type, img, price, location, address, summary } = formData;

        if (!title || !img || !price || !address || !summary || !type || !location) {
            setErrorMessage('All fields are required!');
            return;
        }
        createProperty({title, type, image_url:img, price_per_night:price, location, address, summary})
            .then(() => {
                navigate('/catalog')
            })
            .catch((error) => {
                setErrorMessage(error.message || 'An unexpected error occurred.');
            });
    };

    return (
        <div className={styles['add-property']}>
            <div className={styles['create-content']}>
                <h1 className={styles['title']}>
                    Unlock New Opportunities as a{' '}
                    <span className={styles['colored-text']}>TraveLux</span> Agent!
                </h1>
                <p>
                    Our 'Add Property' page empowers you to showcase your accommodations to a global audience.
                    Tailor your listing, share captivating images, and set your own rules - it's all at your
                    fingertips.
                </p>
            </div>
            <form id="create" onSubmit={onSubmit}>
                {errorMessage && <p className={styles['error-message']}>{errorMessage}</p>}
                <div className={styles['container']}>
                    <label htmlFor="title" className={styles['label']}>
                        Title:
                    </label>
                    <input
                        className={styles['input']}
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter ad title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                    <label htmlFor="type" className={styles['label']}>
                        Type:
                    </label>
                    <select
                        className={styles['input']}
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                    >   <option value="">Select property type</option>
                        <option value="Flat">Flat</option>
                        <option value="House">House</option>
                        <option value="Villa">Villa</option>
                    </select>
                    <label htmlFor="img" className={styles['label']}>
                        Image:
                    </label>
                    <input
                        className={styles['input']}
                        type="text"
                        id="img"
                        name="img"
                        placeholder="Upload a photo..."
                        value={formData.img}
                        onChange={handleChange}
                    />
                    <label htmlFor="price" className={styles['label']}>
                        Price per night:
                    </label>
                    <input
                        className={styles['input']}
                        type="number"
                        id="price"
                        name="price"
                        placeholder="Enter price per night"
                        value={formData.price}
                        onChange={handleChange}
                    />
                    <label htmlFor="location" className={styles['label']}>
                        Location:
                    </label>
                    <select
                        className={styles['input']}
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                    >   <option value="">Select location</option>
                        <option value="Usa">Usa</option>
                        <option value="Europe">Europe</option>
                        <option value="Australia">Australia</option>
                    </select>
                    <label htmlFor="address" className={styles['label']}>
                        Address:
                    </label>
                    <input
                        className={styles['input']}
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Property Address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                    <label htmlFor="summary" className={styles['label']}>
                        Summary:
                    </label>
                    <textarea
                        name="summary"
                        id="summary"
                        value={formData.summary}
                        onChange={handleChange}
                        className={styles['textarea']}
                    />
                    <input className={styles['btn-submit']} type="submit" value="Add the property" />
                </div>
            </form>
        </div>
    );
};