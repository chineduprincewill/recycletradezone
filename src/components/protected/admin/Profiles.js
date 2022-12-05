import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../../api/axios";

import { AuthContext } from "../../../context/AuthContext";

import ProfilesList from "./ProfilesList";

const ALL_PROFILES_API = 'all-profiles';

const Profiles = () => {

    const navigate = useNavigate();

    const { token, isLoggedin, user } = useContext(AuthContext);

    const [profiles, setProfiles] = useState(null);
    const [result, setResult] = useState('');

    const fetchProfiles = async () => {

        const response = await axios.get(ALL_PROFILES_API,
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );

        setProfiles(response.data.profiles);

    }

    const filterProfiles = val => {

        //const searchResult = profiles.filter(prof => prof.email.includes(result));
        //setProfiles(searchResult);

        const searchResult = profiles.filter((item) => {
            return Object.keys(item).some(key => (typeof item[key] === 'string' && item[key].includes(result))
            || (typeof item[key] === 'number') && item[key] === Number(result));
        });

        setProfiles(searchResult);
    }


    useEffect(() => {

        isLoggedin ? ( result !== '' ? filterProfiles(result) : fetchProfiles()) : navigate('/login');

    }, [result])

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
                                                        <div className="col-sm-auto">
                                                            <div className="input-group">
                                                                <input type="text" className="form-control border-0 dash-filter-picker shadow" data-provider="flatpickr" data-range-date="true" data-date-format="d M, Y" data-deafult-date="01 Jan 2022 to 31 Jan 2022" />
                                                                <div className="input-group-text bg-primary border-primary text-white">
                                                                    <i className="ri-calendar-2-line"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <button type="button" className="btn btn-soft-success"><i className="ri-add-circle-line align-middle me-1"></i> Search...</button>
                                                        </div>
                                                        <div className="col-auto">
                                                            <button type="button" className="btn btn-soft-info btn-icon waves-effect waves-light layout-rightside-btn"><i className="ri-pulse-line"></i></button>
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
                                <div className="row">
                                    <div className="col-sm-9"></div>
                                    <div className="col-sm-3">
                                        <div className="md-input-wrapper">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                placeholder="Search"
                                                required="required"
                                                value={result}
                                                onChange={(e) => setResult(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <div className="row">
                        <div className="card">
                            <div class="card-header">
                                <h5 class="card-title mb-0">List of Profiles</h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    {profiles === null ? 'Loading...' : <ProfilesList profiles={profiles} />}
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default Profiles