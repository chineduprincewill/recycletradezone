import { useContext, useEffect, useState } from "react";
import axios from "../../../api/axios";
import { AuthContext } from "../../../context/AuthContext";
import Moment from "react-moment";
import { useLocation, Link } from "react-router-dom";
import Spinner from "../../../spinners/Spinner";
import BidInfo from "./BidInfo";

const profileImage = 'https://www.citypng.com/public/uploads/preview/download-black-male-user-profile-icon-png-116371332534k5baafcll.png';

const ViewBids = () => {

    const trans_location = useLocation();
    const transObj = trans_location.state?.transObject;

    const { token, user } = useContext(AuthContext);

    const [bids, setBids] = useState(null);
    const [cancelbid, setCancelbid] = useState();

    const fetchBids = async () => {

        const data = {
            id : transObj.id
        }

        const response = await axios.post('transaction-bids',
            data,
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );

        setBids(response.data.biddings);
        console.log(response.data.biddings);
    }


    useEffect(() => {

        fetchBids()
    }, [cancelbid]);

    return (
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0">Open request bids</h4>

                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><Link to="/dashboard">Dashboards</Link></li>
                                        <li className="breadcrumb-item active">Open request bids</li>
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
                                                        <div className="col-sm-auto">
                                                            <div className="input-group">
                                                                
                                                                <div className="input-group-text bg-soft-primary border-soft-primary text-white">
                                                                    {
                                                                        user.usertype === 'buyer' ? 
                                                                            <Link to='/open-transactions'>
                                                                                <i className="ri-search-eye-line align-middle me-2"></i> Open requests
                                                                            </Link> : 
                                                                            <Link to='/seller-transactions'>
                                                                                <i className="ri-search-eye-line align-middle me-2"></i> Transactions
                                                                            </Link>
                                                                    } 
                                                                </div>
                                                            </div>
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

                    <div className="row">
                        <div className="card">
                            <div className="card-body bg-marketplace d-flex">
                                <img className="img-circle p-10" src={transObj.seller_img !== '' && transObj.seller_img !== null ? transObj.seller_img : profileImage} alt="User pix" style={{height: 70, marginRight: 20 }} />
                                <div className="flex-grow-1">
                                    <Link to={transObj.seller !== null ? `/profile-detail/${transObj.seller}` : `#`}>
                                        <h5><span className="lh-base mb-0 text-info">{transObj.seller_name}</span></h5>
                                        <p class="mb-0 pt-1 text-muted">
                                            <strong>Weight</strong> - {transObj.weight !== null ? transObj.weight : 'not weighed yet'}
                                        </p>
                                        <p class="mb-0 pt-1 text-muted">
                                            <strong>Amount</strong> - {`NGN ${transObj.amount}`}
                                        </p>
                                        <p class="mb-0 pt-1 text-muted">
                                            <strong>Date</strong> - <Moment format='MMMM Do YYYY'>{transObj.created_at}</Moment>
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                            <div className="card-header">
                                <h5 className="card-title mb-0">List of bids for the above open request</h5>
                            </div>
                            {bids === null ? <Spinner /> : (bids === undefined ? <span className="bg-warning text-white p-2 my-3">Oops! it's like your session has expired. Sign out and Sign in again.</span> :
                                (bids.length > 0 ? bids.map(bd => {
                                    return (<div key={bd.id} className="col-xl-4">

                                        {<BidInfo bid={bd} setCancelbid={setCancelbid} />}
                                    </div>)
                                }) : <span className="text text-danger px-3 my-3">Sorry! No bid has been placed on this request.</span>)
                            )}
                        
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default ViewBids