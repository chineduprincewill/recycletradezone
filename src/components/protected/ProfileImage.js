import { Fragment, useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext";

import axios from "../../api/axios";
import Spinnersm2 from "../../spinners/Spinnersm2";

const ProfileImage = ({profile}) => {

    const { token } = useContext(AuthContext)

    const [image, setImage] = useState(profile === null ? '...' : profile.image_link);
    const [upload, setUpload] = useState('');
    const [passport, setPassport] = useState(null);

    const handleChange = async (e) => {

        console.log(e.target.files[0]);

        try{

            setUpload(<Spinnersm2 />)

            const data = {
                passport : e.target.files[0]
            }

            console.log(data);

            const response = await axios.post('profile-image',
                data,
                {
                    headers: { 'Content-Type': 'multipart/form-data', 'Authorization' : `Bearer ${token}` }
                }
            );

            setImage(response.data.profile.image_link);
            alert('Profile successfully Updated. You might need to sign out and sign in again to update the change.');
            //setImage(response.data.profile.image_link);
            //setErrmsg('');

        } catch (err) {
            if (!err?.response) {
                console.log('No Server Response');
            } else {
                //console.log(err.response.data);
                console.log(err.response.data);
            }

            //setSuccess('');
        }
        setUpload('');
    }


    const uploadImage = async () => {

        try{

            let formData = new FormData();

            formData.append(passport);
            
            console.log(formData);

            const data = {
                passport : formData
            }

            console.log(data);

            const response = await axios.post('profile-image',
                data,
                {
                    headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
                }
            );

            alert('Profile successfully Updated.');
            console.log(response.data.profile.image_link);
            //setErrmsg('');

        } catch (err) {
            if (!err?.response) {
                console.log('No Server Response');
            } else {
                //console.log(err.response.data);
                console.log(err.response.data);
            }

            //setSuccess('');
        }
    }

    return (
        <Fragment>
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title mb-0">Profile Picture</h5>
                </div>
                <div className="card-body">
                    <div className="card dashboard-product">
                        <img src={image === '' || image === null ? 'https://www.citypng.com/public/uploads/preview/download-black-male-user-profile-icon-png-116371332534k5baafcll.png' : image} alt="profile image" style={{ width : 200}} />
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label mb-3">Change profile picture</label>
                            <input 
                                className="form-control" 
                                type="file" 
                                id="formFile" 
                                onChange={handleChange}
                            />
                        </div>
                        {upload}
                    
                </div>
            </div>
        </Fragment>
        
        
            
    )
}

export default ProfileImage