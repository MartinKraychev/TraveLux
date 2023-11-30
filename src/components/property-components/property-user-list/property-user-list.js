import { useState, useEffect} from "react";

import { getMyProperties } from "../../../api/data"
import { PropertyListItem } from "../property-list-item/property-list-item"

import styles from "./propety-user-list.module.css"

export const PropertyUserList = () => {
    const [properties, setProperties] = useState([])

    useEffect(() => {
        getMyProperties()
            .then(props => setProperties(props))
    }, [])

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-0 gx-5 align-items-end">
                    <div className={`${styles['container']}`}>
                        <div
                            className="mx-auto mb-5 wow slideInLeft"
                            data-wow-delay="0.1s"
                        >
                            <h1 className="mb-3">My properties</h1>
                        </div>
                    </div>
                    <div
                        className="col-lg-6 text-start text-lg-end wow slideInRight"
                        data-wow-delay="0.1s"
                    >
                    </div>
                </div>
                <div className="tab-content">
                    <div id="tab-1" className="tab-pane fade show p-0 active">
                        <div className="row g-4">
                            {properties.map(property => <PropertyListItem key={property.id} property={property} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}