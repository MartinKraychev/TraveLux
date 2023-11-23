import { useState, useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import { getPropertyById } from '../../../api/data';
import { useContext } from 'react'
import { PropertyContext } from "../../../contexts/PropertyContext";

import styles from "./property-edit.module.css"

export const PropertyEdit = () => {
    const { editHandler } = useContext(PropertyContext)
    const { propertyId } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        type: '',
        img: '',
        price: 0,
        location: '',
        address: '',
        summary: '',
    });

    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        getPropertyById(propertyId)
            .then((property) => {
                setFormData({
                    title: property.title,
                    type: property.type,
                    img: property.image_url,
                    price: property.price_per_night,
                    location: property.location,
                    address: property.address,
                    summary: property.summary,
                });
            })
    }, [])

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
        editHandler(propertyId, {title, type, image_url:img, price_per_night:price, location, address, summary})

    };
    return (
        <div className={styles['add-property']}>
            <div className={styles['create-content']}>
                <h1 className={styles['title']}>Edit your property</h1>
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
                    <input className={styles['btn-submit']} type="submit" value="Edit the property" />
                </div>
            </form>
        </div>
    )
}