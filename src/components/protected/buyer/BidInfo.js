import { Fragment, useContext, useState } from "react"
import Moment from "react-moment"
import { Link, useNavigate } from "react-router-dom";
import axios from "../../../api/axios";
import { AuthContext } from "../../../context/AuthContext";

const styles = {
    padding : 3,
    fontSize : 13
};

const profileImage = 'https://www.citypng.com/public/uploads/preview/download-black-male-user-profile-icon-png-116371332534k5baafcll.png';

const BidInfo = ({bid, setCancelbid}) => {

    const navigate = useNavigate();

    const { token, user } = useContext(AuthContext);
    const [ cancel, setCancel ] = useState('Cancel bid');
    const [accept, setAccept] = useState('Accept bid');

    const cancelBid = async () => {                                                                                                                                  

        if(window.confirm('Are you sure you want to cancel your bid on this request?')){

            setCancel('Cancelling bid...');

            try{
                const data = {
                    id : bid.id
                }
    
                const response = await axios.post('cancel-bid',
                    data,
                    {
                        headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
                    }
                );
    
                alert('Bid successfully cancelled.');
                setCancelbid(bid.id);
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

            setCancel('Cancel bid');
        }

    }


    const acceptBid = async () => {

        if(window.confirm('Are you sure you want to accept this bid on your request?')){

            setAccept('Accepting bid...');

            try{
                const data = {
                    id : bid.id
                }
    
                const response = await axios.post('accept-bid',
                    data,
                    {
                        headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
                    }
                );
    
                alert('Bid successfully accepted.');
                navigate('/seller-transactions');
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

            setAccept('Accept bid');
        }
    }


    return(
        <Fragment>
            <div className="card overflow-hidden">
                <div className="card-body bg-marketplace d-flex">
                    <img className="img-circle p-10" src={bid.buyer_image !== '' && bid.buyer_image !== null ? bid.buyer_image : profileImage} alt="User Image" style={{height: 70, marginRight: 20 }} />
                    <div className="flex-grow-1">
                        <Link to={bid.buyer !== null ? `/profile-detail/${bid.buyer}` : `#`}>
                            <h5><span className="lh-base mb-0 text-info">{bid.buyer_name}</span></h5>
                            <p className="mb-0 pt-1 text-muted">
                                <strong>Mobile</strong> - {bid.buyer_phonenumber}
                            </p>
                            <p className="mb-0 pt-1 text-muted">
                                <strong>Price / kg</strong> - {`NGN ${bid.price_per_kg}`}
                            </p>
                            <p className="mb-0 pt-1 text-muted">
                                <strong>Date</strong> - <Moment format='MMMM Do YYYY'>{bid.created_at}</Moment>
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="d-flex p-1 border-top">
                   { bid.buyer == user.id && (
                        <button 
                            className="btn btn-soft-danger mx-2 w-100"
                            onClick={(e) => cancelBid()}
                        >
                            {cancel}
                        </button>
                   )}
                   { user.usertype === 'seller' && (
                         <button 
                            className="btn btn-soft-success mx-2 w-100"
                            onClick={(e) => acceptBid()}
                        >
                           {accept}
                        </button>
                   )}
                </div>
            </div>
        </Fragment>
    )
}

export default BidInfo

