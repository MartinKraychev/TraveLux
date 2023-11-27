import { useState } from "react";

import styles from "./search.module.css"

export const Search = ({ onSearch }) => {
    const initialSearchCriteria = {
        keyword: '',
        propertyType: '',
        location: '',
    };

    const [searchCriteria, setSearchCriteria] = useState(initialSearchCriteria);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchCriteria((prevCriteria) => ({
            ...prevCriteria,
            [name]: value,
        }));
    };

    const resetSearch = () => {
        // Reset the state to the initial search criteria
        setSearchCriteria(initialSearchCriteria);
        // Trigger a search with the initial criteria to display all properties
        onSearch(initialSearchCriteria);
    };

    const handleSearch = () => {
        onSearch(searchCriteria);
    };

    return (
        <div
            className={`container-fluid bg-primary mb-5 wow fadeIn ${styles['container']}`}
            data-wow-delay="0.1s"
        >
            <div className="container">
                <div className="row g-2">
                    <div className={`col-md-10 ${styles['search-box']}`}>
                        <div className="row g-2">
                            <div className="col-md-4">
                                <input
                                    type="text"
                                    className="form-control border-0"
                                    placeholder="Search Keyword"
                                    name="keyword"
                                    value={searchCriteria.keyword}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="col-md-4">
                                <select className="form-select border-0"
                                    name="propertyType"
                                    value={searchCriteria.propertyType}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select property type</option>
                                    <option value="Flat">Flat</option>
                                    <option value="House">House</option>
                                    <option value="Villa">Villa</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <select className="form-select border-0"
                                    name="location"
                                    value={searchCriteria.location}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select location</option>
                                    <option value="Usa">Usa</option>
                                    <option value="Europe">Europe</option>
                                    <option value="Australia">Australia</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-dark border-0 w-100 " onClick={handleSearch}>Search</button>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-danger border-0 w-100" onClick={resetSearch}>
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}