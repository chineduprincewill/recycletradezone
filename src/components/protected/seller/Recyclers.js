import React, { useEffect, useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "../../../api/axios";

import { AuthContext } from "../../../context/AuthContext";
import Spinner from "../../../spinners/Spinner";
import RecyclerData from "./RecyclerData";

const LIST_BUYERS_API = 'list-buyers';

const Recyclers = () => {

    const navigate = useNavigate();

    const { isLoggedin, token, user } = useContext(AuthContext);

    const [buyerslist, setBuyersist] = useState(null);
    const [result, setResult] = useState('');

    const fetchBuyers = async () => {

        const response = await axios.get(LIST_BUYERS_API,
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );

        setBuyersist(response.data.buyers);
    }


    const filterBuyers = val => {

        //const searchResult = profiles.filter(prof => prof.email.includes(result));
        //setProfiles(searchResult);

        const searchResult = buyerslist.filter((item) => {
            return Object.keys(item).some(key => (typeof item[key] === 'string' && item[key].includes(result))
            || ((typeof item[key] === 'number') && item[key] === Number(result)));
        });

        setBuyersist(searchResult);
    }


    useEffect(() => {

        isLoggedin ? (result !== '' ? filterBuyers(result) : fetchBuyers()) : navigate('/login');
    }, [result])


    return (
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0">Recyclers</h4>

                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><Link to="/dashboard">Dashboards</Link></li>
                                        <li className="breadcrumb-item active">Recyclers</li>
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
                                                                <input 
                                                                    type="text" 
                                                                    className="form-control border-0 dash-filter-picker shadow" 
                                                                    placeholder="Search"
                                                                    required="required"
                                                                    value={result}
                                                                    onChange={(e) => setResult(e.target.value)}
                                                                />
                                                                <div className="input-group-text bg-primary border-primary text-white">
                                                                    <i className="ri-search-eye-line align-middle me-2"></i>
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
                        {buyerslist === null ? <Spinner /> : (buyerslist === undefined ? <span className="bg-warning text-white p-2 my-3">Oops! it's like your session has expired. Sign out and Sign in again.</span> :
                            (buyerslist.map(bys => {
                                return (<div key={bys.id} className="col-xl-4">
                                    <RecyclerData bys={bys} />
                                </div>)
                            }))
                        )}
                    </div>
                        
                </div>
            </div>
        </div>
    )
}

export default Recyclers