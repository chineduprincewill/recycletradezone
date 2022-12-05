import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import Banner from "./Banner";

const TRACK_PRODUCT_URL = 'track';
const UID_PRODUCT_API = 'uid-product';

//import { registerUser } from "../auth-actions/AuthActions";

const TrackProduct = () => {

    const url = window.location.href;
    let res = url.split('#');

    const [pname, setPname] = useState('');
    const [quantity, setQuantity] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isTracking, setIsTracking] = useState(false);
    const [errmsg, setErrmsg] = useState('');
    const [success, setSuccess] = useState('');
    //const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsTracking(true);

        try{
            const body = {
                uid : res[1],
                quantity,
                email,
                password
            }

            const response = await axios.post(TRACK_PRODUCT_URL,
                body,
                {
                    headers: { 'Accept' : 'application/json' }
                }
            );

            setSuccess(response.data.success);
            console.log(response.data.success);
            setErrmsg('');

        } catch (err) {
            if (!err?.response) {
                console.log('No Server Response');
            } else {
                console.log(err.response.data);
                setErrmsg(err.response.data.error);
            }
            
            setSuccess('');
        }

        setIsTracking(false);
        setQuantity('');
        setEmail('');
        setPassword('');
    }


    const getProductName = async () => {

        try{
            const body = {
                uid : res[1]
            }

            const response = await axios.post(UID_PRODUCT_API,
                body,
                {
                    headers: { 'Accept' : 'application/json' }
                }
            );

            setPname(`${response.data.product.category} - ${response.data.product.item} ( ${response.data.product.volume}cl )`);

        } catch (err) {
            if (!err?.response) {
                console.log('No Server Response');
            } else {
                console.log(err.response.data);
                setErrmsg(err.response.data);
            }
        }
    }


    useEffect(() => {

        getProductName();
    }, []);

    return (
        <div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
            <div className="bg-overlay"></div>
            <div className="auth-page-content overflow-hidden pt-lg-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card overflow-hidden">
                                <div className="row g-0">
                                    <Banner />

                                    <div className="col-sm-6">
                                        <div className="p-lg-5 p-4">
                                            <div>
                                                <h5 className="text-primary">Welcome Back !</h5>
                                                <p className="text-muted">Fill in the detail below to track {pname}.</p>
                                            </div>
                                            <div className="mt-4">
                                                <form onSubmit={handleSubmit}>
                                                    
                                                    <h6 className="text-info text-center">{pname}</h6>
                                                    {errmsg !== '' && <h6 className="text text-danger p-5">{errmsg}</h6>}
                                                    {success !== '' && <h6 className="text text-success p-5">{success}</h6>}
                                                    <div className="mb-3">
                                                        <label htmlFor="quantity" className="form-label">Quantity</label>
                                                        <input 
                                                            type="number" 
                                                            className="form-control" 
                                                            required="required" 
                                                            id="quantity"
                                                            value={quantity}
                                                            onChange={(e) => setQuantity(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="email" className="form-label">Email</label>
                                                        <input 
                                                            type="email" 
                                                            className="form-control" 
                                                            required="required" 
                                                            id="email"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="password" className="form-label">Password</label>
                                                        <input 
                                                            type="password" 
                                                            className="form-control" 
                                                            required="required" 
                                                            id="password"
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                        />
                                                    </div>

                                                    <div className="mt-4">
                                                        <button className="btn btn-success w-100" type="submit">
                                                            {isTracking ? 'Tracking Item...' : 'Track Item'}
                                                        </button>
                                                    </div>
                                                    <div class="mt-4 text-center">
                                                        <p class="mb-0">Are you done ? <Link to="/login" className="fw-semibold text-primary text-decoration-none"> Sign in here</Link> </p>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
				</div>
			</div>
	    </div>
    )
}

export default TrackProduct