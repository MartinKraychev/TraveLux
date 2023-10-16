import styles from "./team-item.module.css"

export const TeamItem = () => {
    return (
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className={`rounded overflow-hidden ${styles['team-item']}`}>
                <div className="position-relative">
                    <img className="img-fluid" src="img/team-1.jpg" alt="" />
                    <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                    </div>
                </div>
                <div className="text-center p-4 mt-3">
                    <h5 className="fw-bold mb-0">Full Name</h5>
                    <small>Designation</small>
                </div>
            </div>
        </div>
    )
}