import { Link } from "react-router-dom"

const BuyerDashboard = () => {

    return (
        <div className="row">
            <div className="col-xl-4 col-md-4">
                <div className="card card-animate">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <div className="flex-grow-1 overflow-hidden">
                                <p className="fw-medium text-muted text-truncate mb-0"> You are a Recycler right?</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-end justify-content-between mt-2">
                            <div>
                                <h4 className="fs-18 fw-semibold ff-secondary mb-3">
                                    <span className="text-muted">
                                        You might have requests from consumers!
                                    </span> 
                                </h4>
                                <Link to="/buyer-transactions" className="btn btn-soft-info">Click here to view requests</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-4 col-md-4">
                <div className="card card-animate">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <div className="flex-grow-1 overflow-hidden">
                                <p className="fw-medium text-muted text-truncate mb-0">There could be requests in the open market!</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-end justify-content-between mt-2">
                            <div>
                                <h4 className="fs-18 fw-semibold ff-secondary mb-3">
                                    <span className="text-muted">
                                        You can bid for such requests!
                                    </span> 
                                </h4>
                                <Link to="/open-transactions" className="btn btn-soft-success">Click to access open market</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-4 col-md-4">
                <div className="card card-animate">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <div className="flex-grow-1 overflow-hidden">
                                <p className="fw-medium text-muted text-truncate mb-0">Do you have Recycled products you want to sell?</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-end justify-content-between mt-2">
                            <div>
                                <h4 className="fs-18 fw-semibold ff-secondary mb-3">
                                    <span className="text-muted">
                                        There might be prospective clients!
                                    </span> 
                                </h4>
                                <Link to="/sales" className="btn btn-soft-primary">Click to stock your shop</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyerDashboard