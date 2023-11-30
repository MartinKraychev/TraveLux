import { useContext, useState, useEffect } from 'react'

import { PropertyListItem } from "../property-list-item/property-list-item"
import { Search } from "../../base-components/search/search";
import { PropertyContext } from "../../../contexts/PropertyContext";

import styles from "./property-catalog-list.module.css"

export const PropertyCatalogList = () => {
    const { properties } = useContext(PropertyContext)
    const [filteredProperties, setFilteredProperties] = useState(properties);

    useEffect(() => {
        setFilteredProperties(properties);
    }, [properties]);

    const handleSearch = ({ keyword, propertyType, location }) => {
        let filteredResults = properties;

        // Stage 1: Filter by Location
        if (location) {
            filteredResults = filteredResults.filter(property => property.location === location);
        }

        // Stage 2: Filter by Property Type
        if (propertyType) {
            filteredResults = filteredResults.filter(property => property.type === propertyType);
        }

        // Stage 3: Filter by Keyword
        if (keyword) {
            const lowercasedKeyword = keyword.toLowerCase();
            filteredResults = filteredResults.filter(property =>
                property.title.toLowerCase().includes(lowercasedKeyword)
            );
        }

        setFilteredProperties(filteredResults);
    };

    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-0 gx-5 align-items-end">
                        <div className={`col-lg-6" ${styles['container']}`}>
                            <div
                                className="mx-auto mb-5 wow slideInLeft"
                                data-wow-delay="0.1s"
                            >
                                <h1 className="mb-3">Property Listing</h1>
                                <p>
                                    Take a Look at Our Properties. Discover the perfect stay for your next adventure.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 text-start text-lg-end wow slideInRight"
                            data-wow-delay="0.1s"
                        >
                        </div>
                        <Search onSearch={handleSearch} />
                    </div>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                    {filteredProperties.map(property => <PropertyListItem key={property.id} property={property} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}