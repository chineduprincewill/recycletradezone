import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "../../../api/axios";
import { AuthContext } from "../../../context/AuthContext";

const SellerDashboard = () => {

    const navigate = useNavigate();

    const { token } = useContext(AuthContext);

    const [create, setCreate] = useState('Click to create an open request');

    const createOpenRequest = async () => {

        if(window.confirm('Are you sure you want to open up a request for bids?')){

            setCreate('Creating request...');

            console.log(token);

            try{    
                const response = await axios.get('create-open',
                    {
                        headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
                    }
                );
    
                alert(response.data.message);
                navigate('/seller-transactions');
                //setErrmsg('');
    
            } catch (err) {
                if (!err?.response) {
                    console.log('No Server Response');
                } else {
                    //console.log(err.response.data);
                    alert(err.response.data.message);
                }
    
                //setSuccess('');
            }

            setCreate('Click to create an open request');

        }
    }

    return (
        <div className="row">
                        <div className="col-xl-4 col-md-6">
                            <div className="card card-animate">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1 overflow-hidden">
                                            <p className="fw-medium text-muted text-truncate mb-0"> Do you have recyclable wastes?</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-end justify-content-between mt-2">
                                        <div>
                                            <h4 className="fs-18 fw-semibold ff-secondary mb-3">
                                                <span className="text-muted">
                                                    And you want to trade it for cash?
                                                </span> 
                                            </h4>
                                            <Link to="/recyclers" className="btn btn-soft-info">Click here to find Recyclers</Link>
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
                                            <p className="fw-medium text-muted text-truncate mb-0"> You can also earn from producers!</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-end justify-content-between mt-2">
                                        <div>
                                            <h4 className="fs-18 fw-semibold ff-secondary mb-3">
                                                <span className="text-muted">
                                                    Just scan the QRcode on the recyclable
                                                </span> 
                                            </h4>
                                            <Link to="/seller-tracks" className="btn btn-soft-success">view your tracked company recyclables</Link>
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
                                            <p className="fw-medium text-muted text-truncate mb-0"> You have recyclables you want to recycle </p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-end justify-content-between mt-2">
                                        <div>
                                            <h4 className="fs-18 fw-semibold ff-secondary mb-3">
                                                <span className="text-muted">
                                                    And you need bids to choose from?
                                                </span> 
                                            </h4>
                                            <button 
                                                className="btn btn-soft-primary"
                                                onClick={(e) => createOpenRequest()}
                                            >
                                                {create}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

export default SellerDashboard