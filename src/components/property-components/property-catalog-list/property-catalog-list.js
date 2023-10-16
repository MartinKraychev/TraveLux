import { PropertyListItem } from "../property-list-item/property-list-item"
import { Search } from "../../base-components/search/search";

import styles from "./property-catalog-list.module.css"

export const PropertyCatalogList = () => {
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
                        <Search />
                    </div>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                <PropertyListItem />
                                <PropertyListItem />
                                <PropertyListItem />
                                <PropertyListItem />
                                <PropertyListItem />
                                <PropertyListItem />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}