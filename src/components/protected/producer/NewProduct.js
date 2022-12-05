import React, { useState, useContext, Fragment, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "../../../api/axios";

import { AuthContext } from "../../../context/AuthContext";

const ADD_PRODUCT_API = 'add-product';

const NewProduct = () => {

    const navigate = useNavigate();

    const { token, isLoggedin, user } = useContext(AuthContext);

    const [category,  setCategory] = useState('');
    const [item, setItem] = useState('');
    const [volume,  setVolume] = useState('');
    const [weight, setWeight] = useState('');
    const [submitText, setSubmitText] = useState('Submit');


    const handleSubmit = async (e) => {
        e.preventDefault();

        setSubmitText('Submitting...')

        const data = {
            category,
            item,
            volume,
            weight
        }

        const response = await axios.post(ADD_PRODUCT_API,
            data,
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );

        alert(response.data.message);
        navigate('/producer-products');

    }


    useEffect(() => {
        if(!isLoggedin){
            navigate('/login');
        } 
    }, [isLoggedin, navigate])

    return (
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0">New Product</h4>

                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><Link to="/dashboard">Dashboards</Link></li>
                                        <li className="breadcrumb-item active">New Product</li>
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
                                                            <Link to='/producer-products' className="btn btn-soft-success"><i className="ri-add-circle-line align-middle me-1"></i> Products</Link>
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
                            <div class="card-header">
                                <h5 class="card-title mb-0">Add new product</h5>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-sm-2"></div>
                                        <div className="col-sm-4">
                                            <div className="mb-3">
                                                <label htmlFor="category" className="form-label">Category</label>
                                                <select 
                                                    required="required" 
                                                    className="form-control"
                                                    id="category"
                                                    value={category}
                                                    onChange={(e) => setCategory(e.target.value)}
                                                >
                                                        <option></option>
                                                        <option value="Plastics">Plastics</option>
                                                        <option value="Metals">Metals</option>
                                                        <option value="Glass">Glass</option>
                                                        <option value="Paper/Cardboard">Paper/Cardboard</option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="item" className="form-label">Product name</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    id="item"
                                                    required="required" 
                                                    value={item}
                                                    onChange={(e) => setItem(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="mb-3">
                                                <label htmlFor="volume" className="form-label">Volume</label>
                                                <input 
                                                    type="number" 
                                                    className="form-control" 
                                                    id="volume"
                                                    required="required" 
                                                    value={volume}
                                                    onChange={(e) => setVolume(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="weight" className="form-label">Weight</label>
                                                <input 
                                                    type="number" 
                                                    className="form-control" 
                                                    id="weight"
                                                    required="required" 
                                                    value={weight}
                                                    onChange={(e) => setWeight(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-2"></div>
                                    </div>  
                                    <div className="row p-20">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8">
                                            <button className="btn btn-soft-primary w-100 mt-3">
                                                {submitText}
                                            </button>
                                        </div>
                                        <div className="col-md-2"></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewProduct;