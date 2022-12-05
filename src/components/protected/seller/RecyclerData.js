import { Fragment, useContext, useState } from "react"
import { Link } from "react-router-dom";
import axios from "../../../api/axios";
import { AuthContext } from "../../../context/AuthContext";

const styles = {
    padding : 3,
    fontSize : 13
};

const profileImage = 'https://www.citypng.com/public/uploads/preview/download-black-male-user-profile-icon-png-116371332534k5baafcll.png';

const RecyclerData = ({bys}) => {

    const { token } = useContext(AuthContext);

    const [connect, setConnect] = useState('Send recycle request')

    const connectBuyer = async () => {

        if(window.confirm('Are you sure you want to send request to Recycler to recycle your trash?')){

            setConnect('Sending recycle request...');

            try{
                const data = {
                    buyer : bys.id,
                    price_per_kg : bys.price_per_kg
                }
    
                const response = await axios.post('connect-buyer',
                    data,
                    {
                        headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
                    }
                );
    
                alert('Request successfully sent! Check your transactions to confirm.');
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
    
            setConnect('Send recycle request');

        }


    }

    return(
        <Fragment>
            <div className="card overflow-hidden">
                <div className="card-body bg-marketplace d-flex">
                    <img className="img-circle p-10" src={bys.image_link !== '' && bys.image_link !== null ? bys.image_link : profileImage} alt="User Image" style={{height: 70, marginRight: 20}} />
                    
                    <div className="flex-grow-1">
                        <Link to={bys.id !== null ? `/profile-detail/${bys.id}` : `#`}>
                            <h4 className="fs-18 lh-base mb-0">{bys.fullname !== "" && bys.fullname !== null ? bys.fullname : bys.email}</h4>
                            <p className="mb-0 pt-1 text-muted">
                                <strong>Mobile No.</strong> - {bys.phonenumber}
                            </p>
                            <p className="mb-0 pt-1 text-muted">
                                <strong>Location</strong> - {bys.city}, {bys.state}
                            </p>
                            <p className="mb-0 pt-1 text-muted">
                                <strong>Price / kg</strong> - {`NGN ${bys.price_per_kg}`}
                            </p>
                            <p className="mb-0 pt-1 text-muted">
                                <strong>Pickup</strong> - {bys.pickup_service == 1 ? 'Available' : 'Not available'}
                            </p>
                            <p className="mb-0 pt-1 text-muted">
                                <strong>Status</strong> - {bys.approval_status == 0 ? <span className="text text-danger">Not verified</span> : <span className="text text-success">Verified</span>}
                            </p>
                                                
                        </Link>
                    </div>
                </div>
                <div className="d-flex p-1 border-top">
                    
                    <button 
                        onClick={(e) => connectBuyer()}
                        className='btn btn-soft-success mx-3 w-100'
                        title="Request to recycle" 
                    > 
                        {connect}
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default RecyclerData

