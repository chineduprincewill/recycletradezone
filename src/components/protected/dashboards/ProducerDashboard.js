import { Link } from "react-router-dom"

const ProducerDashboard = () => {

    return (
        <div className="row">
                        <div className="col-xl-4 col-md-6">
                            <div className="card card-animate">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1 overflow-hidden">
                                            <p className="fw-medium text-muted text-truncate mb-0"> You can help consumers track your recyclables?</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-end justify-content-between mt-2">
                                        <div>
                                            <h4 className="fs-19 ff-secondary mb-3">
                                                <span className="text-muted">
                                                   Generate QRCode for your recyclables?
                                                </span> 
                                            </h4>
                                            <Link to="/producer-products" className="btn btn-soft-info">Click here to manage your Recyclers</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6">
                            <div className="card card-animate">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1 overflow-hidden">
                                            <p className="fw-medium text-muted text-truncate mb-0"> You can follow up on your recyclables!</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-end justify-content-between mt-2">
                                        <div>
                                            <h4 className="fs-19 ff-secondary mb-3">
                                                <span className="text-muted">
                                                    Consumers could be helping you out
                                                </span> 
                                            </h4>
                                            <Link to="/producer-tracks" className="btn btn-soft-success">Checkout how far your recyclabels are faring</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6">
                            <div className="card card-animate">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1 overflow-hidden">
                                            <p className="fw-medium text-muted text-truncate mb-0"> You can support this quest for sustainable development </p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-end justify-content-between mt-2">
                                        <div>
                                            <h4 className="fs-19 ff-secondary mb-3">
                                                <span className="text-muted">
                                                    Motivate consumers to recycle?
                                                </span> 
                                            </h4>
                                            <Link to="/producer-commissions" className="btn btn-soft-primary">View your consumers earnings</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

export default ProducerDashboard