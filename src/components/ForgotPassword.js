import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "../api/axios";
import Banner from "./Banner";

const FORGOT_PASSWORD_URL = 'forgot-password';

const ForgotPassword = () => {

    const [email, setEmail] = useState('');
    const [logging, setLogging] = useState(false);
    const [success, setSuccess] = useState('');
    const [errmsg, setErrmsg] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        setLogging(true);

        try{
            const body = {
                email
            }

            const response = await axios.post(FORGOT_PASSWORD_URL,
                body,
                {
                    headers: { 'Accept' : 'application/json' }
                }
            );
            
            console.log(response);
            setSuccess(response.data.status);

        } catch (err) {
            if (!err?.response) {
                console.log('No Server Response');
            } else {
                setErrmsg(err.response.data.error);
            }
        }

        setLogging(false);

    } 

    return(
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
                                                <p className="text-muted">Enter your email to reset your password to Recycle Trade Zone.</p>
                                            </div>
                                            <div className="mt-4">
                                                <form onSubmit={handleSubmit}>
                                                    {errmsg !== '' && <h6 className="text text-danger p-5">{errmsg}</h6>}
                                                    {success !== '' && <h6 className="text text-success p-5">{success}</h6>}
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

                                                    <div className="mt-4">
                                                        <button className="btn btn-success w-100" type="submit">
                                                            { logging ? 'Submitting...' : 'Submit' } 
                                                        </button>
                                                    </div>
                                                    <div class="mt-4 text-center">
                                                        <p class="mb-0">Already have an account ? <Link to="/login" className="fw-semibold text-primary text-decoration-none"> Sign in</Link> </p>
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

export default ForgotPassword