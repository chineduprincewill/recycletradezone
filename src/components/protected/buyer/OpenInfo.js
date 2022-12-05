import { Fragment, useContext, useState } from "react"
import Moment from "react-moment"
import { Link } from "react-router-dom";
import axios from "../../../api/axios";
import { AuthContext } from "../../../context/AuthContext";

const styles = {
    padding : 3,
    fontSize : 13
};

const profileImage = 'https://www.citypng.com/public/uploads/preview/download-black-male-user-profile-icon-png-116371332534k5baafcll.png';

const OpenInfo = ({trans}) => {

    const { token } = useContext(AuthContext);
    const [ bid, setBid ] = useState('Place bid');

    const placeBid = async () => {

        if(window.confirm('Are you sure you want to place a bid on this request?')){

            setBid('Placing bid...');

            try{
                const data = {
                    id : trans.id
                }
    
                const response = await axios.post('bid',
                    data,
                    {
                        headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
                    }
                );
    
                alert('Bid successfully placed.');
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

            setBid('Place bid');
        }

    }

    return(
        <Fragment>
            <div className="card overflow-hidden">
                <div className="card-body bg-marketplace d-flex">
                    <img className="img-circle p-10" src={trans.seller_img !== '' && trans.seller_img !== null ? trans.seller_img : profileImage} alt="User Image" style={{height: 70, marginRight: 20 }} />
                    <div className="flex-grow-1">
                        <Link to={trans.seller !== null ? `/profile-detail/${trans.seller}` : `#`}>
                            <h5><span className="lh-base mb-0 text-info">{trans.seller_name}</span></h5>
                            <p className="mb-0 pt-1 text-muted">
                                <strong>Weight</strong> - {trans.weight !== null ? trans.weight : 'not weighed yet'}
                            </p>
                            <p className="mb-0 pt-1 text-muted">
                                <strong>Amount</strong> - {`NGN ${trans.amount}`}
                            </p>
                            <p className="mb-0 pt-1 text-muted">
                                <strong>Date</strong> - <Moment format='MMMM Do YYYY'>{trans.created_at}</Moment>
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="d-flex p-1 border-top">
                    {trans.status === 'open' && 
                    <Link 
                        to="/view-bids"
                        state={{ transObject : trans }}
                        className='btn btn-soft-success mx-3'
                        title="view bids" 
                    > 
                        View bids
                    </Link>}
                    <button 
                        className="btn btn-soft-danger mx-2"
                        onClick={(e) => placeBid()}
                    >
                        {bid}
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default OpenInfo

