import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "../../../api/axios";
import Moment from "react-moment"

import { AuthContext } from "../../../context/AuthContext";
import Spinner from "../../../spinners/Spinner";

const GET_PROFILE_API = 'get-profile';
const APPROVE_PROFILE_API = 'approve-profile';
const DISAPPROVE_PROFILE_API = 'disapprove-profile';
const BANK_DETAIL_API = 'get-bank';

const ProfileDetail = () => {

    let { id } = useParams();

    const navigate = useNavigate();

    const { isLoggedin, token, role, user } = useContext(AuthContext);
    const [profile, setProfile] = useState(null);
    const [approve, setApprove] = useState('Approve');
    const [disapprove, setDisapprove] = useState('Disapprove');
    const [res, setRes] = useState('');
    const [bankinfo, setBankinfo] = useState(null);

    const body = {
        id : id
    }

    const approveProfile = async (profileId) => {
        setApprove('Approving...');
        const data = {
            id : profileId
        }
        
        const response = await axios.post(APPROVE_PROFILE_API,
            data,
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );

        setRes(response.data.success);
        alert('Profile Approved!');
        setApprove('Approve')
    }


    const disapproveProfile = async (profileId) => {
        setDisapprove('Disapproving...');
        const data = {
            id : profileId
        }

        const response = await axios.post(DISAPPROVE_PROFILE_API,
            data,
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );
        setRes(response.data.success);
        alert('Profile Disapproved!');
        setDisapprove('Disapprove')
    }



    const fetchUserProfile = async () => {
        const response = await axios.post(GET_PROFILE_API,
            body,
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );

        setProfile(response.data.profile);
    }


    const getBankDetail = async () => {
        const body = {
            id : id
        }

        const response = await axios.post(BANK_DETAIL_API,
            body,
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );

        setBankinfo(response.data.bankdetail);
    }

    useEffect(() => {
        isLoggedin ? fetchUserProfile() : navigate('/login');
    }, [res, isLoggedin]);

    useEffect(() => {
        getBankDetail();
    },[]);


    return (
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
                                                        
                                                        <div className="col-auto">
                                                            <button type="button" className="btn btn-soft-success"><i className="ri-add-circle-line align-middle me-1"></i> </button>
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
                        {profile === undefined ? <span className="bg-warning text-white p-2 my-3">Oops! it's like your session has expired. Sign out and Sign in again.</span> :    
                            (
                            <Fragment>
                            <div className="col-lg-6">
                                <div className="card"> 
                                    <div className="card-header">
                                        <h3 className="card-title mb-0">Profile Information</h3>
                                    </div>
                                    
                                    <div className="card-body">
                                        {profile === null ? <Spinner /> : <div className="row">
                                                <span className="col-sm-4 py-2"><strong>Role</strong></span><span className="col-sm-8 py-2">{profile.usertype}</span>

                                                <span className="col-sm-4 py-2"><strong>Name</strong></span><span className="col-sm-8 py-2">{profile.fullname === '' ? '...' : profile.fullname}</span>

                                                <span className="col-sm-4 py-2"><strong>Email</strong></span><span className="col-sm-8 py-2">{profile.email === '' ? '...' : profile.email}</span>

                                                <span className="col-sm-4 py-2"><strong>Mobile</strong></span><span className="col-sm-8 py-2">{profile.phonenumber === '' ? '...' : profile.phonenumber}</span>

                                                <span className="col-sm-4 py-2"><strong>State</strong></span><span className="col-sm-8 py-2">{profile.state === null || profile.state === '' ? '...' : profile.state}</span>

                                                <span className="col-sm-4 py-2"><strong>City</strong></span><span className="col-sm-8 py-2">{profile.city === null || profile.state === '' ? '...' : profile.city}</span>

                                                {profile.usertype === 'seller' || profile.usertype === 'admin' || profile.usertype === 'auditor' ? '' : 
                                                    <Fragment><span className="col-sm-4 py-2">
                                                        {profile.usertype === 'buyer' ? 'Price Per Kg' : 'Commission Per Kg'}
                                                    </span><span className="col-sm-8 py-2">{profile.price_per_kg}</span></Fragment>
                                                }

                                                {profile.usertype === 'buyer' &&  <Fragment><span className="col-sm-4 py-2">Pick Up Service</span><span className="col-sm-8 py-2">{profile.pickup_service == 1 ? 'Available' : 'Not available'}</span></Fragment>}

                                                <span className="col-sm-4 py-2">Status</span><span className="col-sm-8 py-2">{profile.approval_status == 0 ? <span className="text-danger">Not Approved</span> : <span className="text-success">Approved</span>}</span>

                                                <span className="col-sm-4 py-2">Date Created</span><span className="col-sm-8 py-2"><Moment format='MMMM Do YYYY'>{profile.created_at}</Moment></span>
                                            </div>}
                                        
                                    </div>  
                                    {profile === null || role !== 'admin' ? '...' : (profile.approval_status == 0 ? <button className="btn btn-soft-success mt-2" onClick={(e) => approveProfile(profile.id)}>{approve}</button> 
                                    : <button className="btn btn-soft-danger mt-2" onClick={(e) => disapproveProfile(profile.id)}>{disapprove}</button>)}
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title mb-0">Profile Picture</h3>
                                    </div>
                                    <div className="card-body">
                                        {profile === null ? <Spinner /> : <img src={profile.image_link === '' || profile.image_link === null ? 'https://www.citypng.com/public/uploads/preview/download-black-male-user-profile-icon-png-116371332534k5baafcll.png' : profile.image_link} alt="profile" style={{ width : 200}} /> }
                                    </div>
                                </div>
                               {profile !== null && profile.usertype === 'seller' ? 
                                (<div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title mb-0">Bank Detail</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            {bankinfo === null ? <Spinner /> : (
                                                bankinfo === {} ? <span className="col-sm-12 py-2 text-danger">Bank detail not provided yet!</span> : 
                                                <Fragment>
                                                    <span className="col-sm-6 py-2">Bank</span><span className="col-sm-6 py-2"><strong>{bankinfo.bank}</strong></span>
                                                    <span className="col-sm-6 py-2">Account No.</span><span className="col-sm-6 py-2"><strong>{bankinfo.account_no}</strong></span>
                                                    <span className="col-sm-6 py-2">Account Name</span><span className="col-sm-6 py-2"><strong>{bankinfo.account_name}</strong></span>
                                                    <span className="col-sm-6 py-2">Account Type</span><span className="col-sm-6 py-2"><strong>{bankinfo.account_type}</strong></span>
                                                </Fragment>  
                                            )}
                                        </div>
                                    </div>
                                        
                                ...
                                </div>) : '' }
                            </div>
                            </Fragment>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileDetail