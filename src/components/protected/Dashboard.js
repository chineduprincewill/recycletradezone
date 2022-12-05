import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import SellerDashboard from "./dashboards/SellerDashboard";
import BuyerDashboard from "./dashboards/BuyerDashboard"

import { AuthContext } from "../../context/AuthContext";
import ProducerDashboard from "./dashboards/ProducerDashboard";


const Dashboard = () => {

    //const navigate = useNavigate();

    const { user, role } = useContext(AuthContext);

    let rolename;

    if(role === 'seller'){
        rolename = <SellerDashboard />;
    }
    else if(role === 'buyer'){
        rolename = <BuyerDashboard />;
    }
    else if(role === 'producer'){
        rolename = <ProducerDashboard />;
    }
  
       
    return(
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0">Dashboard</h4>

                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><Link to="#">Dashboards</Link></li>
                                        <li className="breadcrumb-item active">Dashboard</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">

                            <div className="h-100">
                                <div className="row mb-3 pb-1">
                                    <div className="col-12">
                                        <div className="d-flex align-items-lg-center flex-lg-row flex-column">
                                            <div className="flex-grow-1">
                                                <h4 className="fs-16 mb-1">Good Day, {user === null ? '' : `${user.fullname}`}!</h4>
                                                <p className="text-muted mb-0">What's happening with you today?</p>
                                            </div>
                                            <div className="mt-3 mt-lg-0">
                                                <form >
                                                    <div className="row g-3 mb-0 align-items-center">
                                                        <div className="col-auto">
                                                            <span className="text-muted">
                                                                Click the button to update your profile.
                                                            </span>
                                                            {role === 'seller' || role === 'buyer' ? <span className="text text-danger mx-1">Very important!</span> : ''}
                                                        </div>
                                                        <div className="col-auto">
                                                            <Link to="/update-profile" className="btn btn-soft-info waves-effect waves-light layout-rightside-btn">
                                                                Update your profile
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {user && user.approval_status == 0 ? (
                        <div className="row p-2">
                            <div className="card">
                                <div className="card-body">
                                    <span className="text text-danger">
                                        Your account is yet to be approved! <span className="text text-muted mx-1">Complete your profile update to facilitate your account approval!</span><Link to="/update-profile" className="text text-decoration-none text-info">
                                                                Click here
                                                            </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ) : ''}

                    {rolename}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;