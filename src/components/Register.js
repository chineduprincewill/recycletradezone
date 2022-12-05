import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import axios from "../api/axios";
import Banner from "./Banner";
const REGISTER_URL = 'register';

//import { registerUser } from "../auth-actions/AuthActions";

const Register = () => {

    const navigate = useNavigate();

    const [usertype, setUsertype] = useState(''); 
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); 
    const [isRegistering, setIsRegistering] = useState(false);
    const [errmsg, setErrmsg] = useState('');
    //const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsRegistering(true);

        try{
            const body = {
                usertype,
                username,
                email,
                password,
                password_confirmation : confirmPassword
            }

            const response = await axios.post(REGISTER_URL,
                body,
                {
                    headers: { 'Accept' : 'application/json' }
                }
            );

            alert('Sign up Successful!!!');
            
            navigate("/login");

        } catch (err) {
            if (!err?.response) {
                console.log('No Server Response');
            } else {
                console.log(err.response.data);
                setErrmsg(err.response.data);
            }
        }

        setIsRegistering(false);
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
                                        <div class="p-lg-5 p-4">
                                            <div>
                                                <h5 class="text-primary">Register Account</h5>
                                                <p class="text-muted">Get your Free Recycle Trade Zone account now.</p>
                                            </div>
                                            <div className="mt-4">
                                                <form className="md-float-material" onSubmit={handleSubmit}>
                                                    <h6 className="text text-danger">{errmsg}</h6>
                                                    <div class="mb-3">
                                                        <label htmlFor="usertype" class="form-label">User type <span class="text-danger">*</span></label>
                                                        <select 
                                                            required="required" 
                                                            className="form-control"
                                                            id="usertype"
                                                            value={usertype}
                                                            onChange={(e) => setUsertype(e.target.value)}
                                                        >
                                                                <option>{usertype}</option>
                                                                <option value="producer">Producer</option>
                                                                <option value="buyer">Recycler</option>
                                                                <option value="seller">Consumer</option>
                                                        </select>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="username" class="form-label">Username <span class="text-danger">*</span></label>
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            id = "username"
                                                            required="required" 
                                                            value={username}
                                                            onChange={(e) => setUsername(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="email" class="form-label">Email Address <span class="text-danger">*</span></label>
                                                        <input 
                                                            type="email" 
                                                            className="form-control" 
                                                            id = "email"
                                                            required="required" 
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="password" class="form-label">Password <span class="text-danger">*</span></label>
                                                        <input 
                                                            type="password" 
                                                            className="form-control" 
                                                            id = "password"
                                                            required="required" 
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="password-confirm" class="form-label">Confirm Password <span class="text-danger">*</span></label>
                                                        <input 
                                                            type="password" 
                                                            className="form-control" 
                                                            id="password-confirm"
                                                            required="required"
                                                            value={confirmPassword}
                                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                                        />
                                                    </div>
                                                    <div class="mt-4">
                                                        <button className="btn btn-success w-100" type="submit">
                                                            {isRegistering ? 'Signing up ...' : 'Sign up'}
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

export default Register