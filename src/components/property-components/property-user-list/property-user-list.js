import { PropertyListItem } from "../property-list-item/property-list-item"

export const PropertyUserList = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-0 gx-5 align-items-end">
                    <div className="col-lg-6">
                        <div
                            className="text-start mx-auto mb-5 wow slideInLeft"
                            data-wow-delay="0.1s"
                        >
                            <h1 className="mb-3">My properties</h1>
                            <p>
                                Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
                                dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.
                            </p>
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
    )
}