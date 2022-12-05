import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "../api/axios";

import { AuthContext } from "../context/AuthContext";
import Banner from "./Banner";

const LOGIN_URL = 'login';
const Login = () => {

    const navigate = useNavigate();

    const { isLoggedin, authenticate, setAuthenticatedUser } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [logging, setLogging] = useState(false);
    const [errmsg, setErrmsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLogging(true);

        try{
            const body = {
                email,
                password
            }

            const response = await axios.post(LOGIN_URL,
                body,
                {
                    headers: { 'Accept' : 'application/json' }
                }
            );
            
            console.log(response);
            console.log(response.data.token);
            authenticate(response.data.token, response.data.usertype);
            setAuthenticatedUser(response.data.profile);
            navigate("/dashboard");
            window.location.reload();

        } catch (err) {
            if (!err?.response) {
                console.log('No Server Response');
            } else {
                console.log(err.response.data.error);
                setErrmsg(err.response.data.error);
            }
        }

        setLogging(false);

    } 


    
    useEffect(() => {
        if(isLoggedin){
            navigate("/dashboard");
        }
    }, []);

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
                                                <p className="text-muted">Sign in to continue to Recycle Trade Zone.</p>
                                            </div>
                                            <h6 className="text text-danger">{errmsg}</h6>
                                            <div className="mt-4">
                                                <form onSubmit={handleSubmit}>
                                                    <div className="mb-3">
                                                        <label htmlFor="email" className="form-label">Email</label>
                                                        <input 
                                                            type="email" 
                                                            id="username"
                                                            className="form-control" 
                                                            placeholder="Enter email"
                                                            required="required"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                    </div>

                                                    <div className="mb-3">
                                                        <div className="float-end">
                                                            <Link to="/forgot-password"  className="text-muted">Forgot password?</Link>
                                                        </div>
                                                        <label className="form-label" htmlFor="password-input">Password</label>
                                                        <div className="position-relative auth-pass-inputgroup mb-3">
                                                            <input 
                                                                type="password" 
                                                                className="form-control pe-5" 
                                                                placeholder="Enter password" 
                                                                id="password-input"
                                                                required="required"
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="mt-4">
                                                        <button className="btn btn-success w-100" type="submit">
                                                            { logging ? 'LOGGING IN ...' : 'LOGIN' }
                                                        </button>
                                                    </div>
                                                    
                                                    <div className="mt-4 text-center">
                                                        <p className="mb-0">Don't have an account ? <Link to="/" className="fw-semibold text-primary text-decoration-none"> Sign up</Link> </p>
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

export default Login