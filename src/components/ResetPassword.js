import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "../api/axios";
import Banner from "./Banner";

const RESET_PASSWORD_URL = 'reset-password';

//import { registerUser } from "../auth-actions/AuthActions";

const ResetPassword = () => {

    const navigate = useNavigate();

    const url = window.location.href;
    let res = url.split('#');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); 
    const [isResetting, setIsResetting] = useState(false);
    const [errmsg, setErrmsg] = useState('');
    //const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsResetting(true);

        try{
            const body = {
                token : res[1],
                email,
                password,
                password_confirmation : confirmPassword
            }

            const response = await axios.post(RESET_PASSWORD_URL,
                body,
                {
                    headers: { 'Accept' : 'application/json' }
                }
            );

            alert('Password Reset Successful!!!');
            
            navigate("/login");

        } catch (err) {
            if (!err?.response) {
                console.log('No Server Response');
            } else {
                console.log(err.response.data);
                setErrmsg(err.response.data);
            }
        }

        setIsResetting(false);
    }

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
                                                <p className="text-muted">You can now reset your password to Recycle Trade Zone.</p>
                                            </div>
                                            <div className="mt-4">
                                                <form onSubmit={handleSubmit}>
                                                    
                                                    <h6 className="text text-danger">{errmsg}</h6>
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
                                                    <div className="mb-3">
                                                        <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                                                        <input 
                                                            type="password" 
                                                            className="form-control" 
                                                            required="required"
                                                            id="confirm-password"
                                                            value={confirmPassword}
                                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="mt-4">
                                                        <button className="btn btn-success w-100" type="submit">
                                                            {isResetting ? 'Resetting...' : 'Reset'}
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

export default ResetPassword