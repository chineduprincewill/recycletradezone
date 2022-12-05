import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext";

import axios from "../../api/axios";

const PROFILE_UPDATE_API = 'update-profile';

const ProfileForm = ({profile}) => {

    const { token } = useContext(AuthContext);

    const [fullname, setFullname] = useState(profile.fullname);
    const [gender, setGender] = useState(profile.gender);
    const [mobile, setMobile] = useState(profile.phonenumber)
    const [longitude, setLongitude] = useState(profile.gps_long);
    const [latitude, setLatitude] =  useState(profile.gps_lat);
    const [state, setState] = useState(profile.state);
    const [city, setCity] = useState(profile.city);
    const [update, setUpdate] = useState('Update');
    const [success, setSuccess] = useState('');
    const [errmsg, setErrmsg] = useState('');
    const [locstatus, setLocstatus] = useState('Click to get your Geo-Location');


    const updateProfile =  async (e) => {

        e.preventDefault();

        setUpdate('Updating...');

        try{
            const data = {
                fullname,
                phonenumber : mobile,
                gender,
                gps_long : longitude,
                gps_lat : latitude,
                state,
                city,
                price_per_kg : profile.price_per_kg,
                pickup_service : profile.pickup_service,
                image_link : profile.image_link,
                id_link : profile.id_link
            }

            const response = await axios.post(PROFILE_UPDATE_API,
                data,
                {
                    headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
                }
            );

            setSuccess('Profile Updated Successfully');
            console.log(response.data);
            setErrmsg('');

        } catch (err) {
            if (!err?.response) {
                setErrmsg('No Server Response');
            } else {
                //console.log(err.response.data);
                setErrmsg(err.response.data);
            }

            setSuccess('');
        }
        
        setUpdate('Update');
    }


    const getLocation = () => {
        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser');
        } else {
            setLocstatus('Getting your Geo-Location...');
            navigator.geolocation.getCurrentPosition((position) => {
                setLocstatus('Click to get your Geo-Location');
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            }, (error) => {
                alert(`${error.code} - ${error.message}`);
                //alert('Unable to retrieve your location');
                setLocstatus('Click to get your Geo-Location');
            });
        }
    }


    return (
        <div className="card">
            <div className="card-header">
                <h5 className="card-title mb-0">Profile Information</h5>
            </div>
            <div className="card-body">
            <form onSubmit={updateProfile}>
                    <h6>
                        {success !== '' && <span className="text text-success p-10">{success}</span>}
                        {errmsg !== '' && <span className="text text-danger p-10">{errmsg}</span>}
                    </h6>
                    <div className="mb-3">
                        <label htmlFor="gender" className="form-label">Gender</label>
                        <select 
                            required="required" 
                            className="form-control"
                            id="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                                <option></option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                        </select>
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="fullname" className="form-label">Full name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="fullname"
                            required="required" 
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mobile" className="form-label">Mobile</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="mobile"
                            required="required" 
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <span 
                            className="btn btn-soft-warning rounded-pill"
                            onClick={(e) => getLocation()}
                        >
                            {locstatus}
                        </span>   
                    </div>
                    <div className="mb-3">
                        <label htmlFor="longitude" className="form-label">Longitude</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="longitude"
                            required="required" 
                            value={longitude}
                            onChange={(e) => setLongitude(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="latitude" className="form-label">Latitude</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="latitude"
                            required="required" 
                            value={latitude}
                            onChange={(e) => setLatitude(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="state" className="form-label">State, Country</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="state"
                            required="required"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="city" className="form-label">City</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="city"
                            required="required"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-soft-success w-100 mt-3">
                        {update}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ProfileForm