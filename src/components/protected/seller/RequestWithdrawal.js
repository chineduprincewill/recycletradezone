import { Fragment, useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "../../../api/axios";

import { AuthContext } from "../../../context/AuthContext";

const REQUEST_WITHDRAWAL_API = 'request-withdrawal';

const RequestWithdrawal = () => {
    
    const { token, user } = useContext(AuthContext);

    const navigate = useNavigate();

    

    const location  = useLocation();
    const locSearch = new URLSearchParams(location.search);

    if(locSearch.get('weight') === locSearch.get('recycled')){
        alert('You have no earnings and cannot successfully withdraw');
    } 

    const balance = locSearch.get('earned') - locSearch.get('withdrawn');

    const id = locSearch.get('id');
    const item = locSearch.get('item');

    const [amount, setAmount] = useState(balance);
    const [submitText, setSubmitText] = useState('Submit');
    const [success, setSuccess] = useState('');
    const [errmsg, setErrmsg] = useState('');

    const handleSubmit = async (e) => {

        e.preventDefault();

        setSubmitText('Submitting...');

        try{
            const data = {
                id,
                amount
            }

            const response = await axios.post(REQUEST_WITHDRAWAL_API,
                data,
                {
                    headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
                }
            );

            setSuccess(response.data.message);
            setErrmsg('');

        } catch (err) {
            if (!err?.response) {
                setErrmsg('No Server Response');
            } else {
                //console.log(err.response.data);
                setErrmsg(err.response.data);
            }

            setSuccess('');
        }

        setSubmitText('Submit');

    }

    return(
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0">Request withdrawal</h4>

                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><Link to="/dashboard">Dashboards</Link></li>
                                        <li className="breadcrumb-item active">Request withdrawal</li>
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
                                                            <Link to='/seller-commissions' className="btn btn-soft-success">Earnings</Link>
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
                            <div className="card-body">
                                <div className="col-sm-4">
                                    {success != '' && <h6 className="text text-success p-10">{success}</h6>}
                                    {errmsg != '' && <h6 className="text text-danger p-10">{errmsg}</h6>}
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <h5 className="text text-info">{item}</h5>
                                            <div className="mt-3">
                                                <label htmlFor="amount" className="form-label">Amount</label>
                                                <input 
                                                    type="number" 
                                                    className="form-control" 
                                                    id="amount"
                                                    required="required" 
                                                    value={amount}
                                                    onChange={(e) => setAmount(e.target.value)}
                                                />
                                            </div>
                                        </div>  
                                        <div className="row p-20">
                                            <div className="col-sm-12">
                                                <button className="btn btn-soft-success w-100">
                                                    {submitText}
                                                </button>
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
    )

}

export default RequestWithdrawal