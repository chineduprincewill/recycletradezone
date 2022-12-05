import { useEffect, useState, useContext, Fragment } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "../../api/axios";
import { Link, useNavigate } from "react-router-dom";
import ProfileForm from "./ProfileForm";
import ProfileImage from "./ProfileImage";
import BankDetail from "./BankDetail";
import Spinner from "../../spinners/Spinnersm2";

const USER_PROFILE_API = 'user-profile';
const SELLER_BANK_API = 'seller-bank';

const UpdateProfile = () => {

    const navigate = useNavigate();

    const { token, user, role } = useContext(AuthContext);
    
    //const [profile, setProfile] = useState(null);
    const [bank, setBank] = useState(null);
    const [userinfo, setUserinfo] = useState(null);

    const [bankupdate, setBankupdate] = useState();

    const getBankDetail = async () => {

        const response = await axios.get(SELLER_BANK_API,
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );

        setBank(response.data.bankdetail);

        console.log(response.data.bankdetail);
    }


    const getProfileInfo = async () => {

        const response = await axios.get(USER_PROFILE_API,
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );

        setUserinfo(response.data.profile);

        //console.log(response.data.bankdetail);
    }


    useEffect(() => {
        getProfileInfo()
    }, [])

    useEffect(() => {
        getBankDetail()
    }, [bankupdate])


    return (
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0">Update Profile</h4>

                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><Link to="/dashboard">Dashboards</Link></li>
                                        <li className="breadcrumb-item active">Update Profile</li>
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
                                                            
                                                        </div>
                                                        <div className="col-auto">
                                                            
                                                        </div>
                                                        <div className="col-auto">
                                                            
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
                        {userinfo === undefined ? <span className="bg-warning text-white py-3">Oops! It seems your session has expired. Please Sign out and sign in again.</span> : (
                            <Fragment>
                                <div className={userinfo !== null && role === 'seller' ? 'col-sm-4' : 'col-sm-6'}>
                                {userinfo === null ? <Spinner /> : <ProfileForm profile={userinfo} />}
                                </div>

                                { role === 'seller' && (
                                    <div className="col-sm-4">
                                        {bank === undefined ? navigate('/dashboard') : <BankDetail bankinfo={bank} setBankupdate={setBankupdate}/>}
                                    </div> 
                                )}
                                
                                
                                <div className={userinfo !== null && role === 'seller' ? 'col-sm-4' : 'col-sm-6'}>
                                    <ProfileImage profile={user} />
                                </div>
                            </Fragment>
                            
                        )}
                            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateProfile