import { Fragment, useContext, useState } from "react"
import axios from "../../../api/axios";
import Moment from "react-moment"
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const SELLER_CONFIRM_API = 'seller-confirm';

const WithdrawalData = ({withd}) => {

    const { token } = useContext(AuthContext);

    const [txtColor, setTxtColor] = useState(false);

    const paymentReceived = async (id, producer) => {

        if(window.confirm(`Are you sure you want to confirm that you have received payment from ${producer}?`)){

            try{
                const data = {
                    id
                }
    
                const response = await axios.post(SELLER_CONFIRM_API,
                    data,
                    {
                        headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
                    }
                );
    
                alert ('Payment receipt confirmed!');

                document.getElementById(`stat-${id}`).innerText = 'Payment confirmed';
                setTxtColor(true);
    
            } catch (err) {
                if (!err?.response) {
                    alert('No Server Response');
                } else {
                    //console.log(err.response.data);
                    alert(err.response.data);
                }
    
            }
        }
    }

    return(
        <Fragment>
            <div className="card overflow-hidden">
                <div className="card-body bg-marketplace d-flex">
                    <div className="flex-grow-1">
                        <h5><span className="lh-base mb-0 text-info">{withd.product}</span></h5>
                        <p  className="mb-0 pt-1 text-muted"><Link to={`/profile-detail/${withd.producer_id}`}>Producer - {withd.producer}</Link></p>
                        <p  className="mb-0 pt-1 text-muted">{`Amount - NGN ${withd.amount}`}</p>
                        <p  className="mb-0 pt-1 text-muted">Requested - <Moment format='MMMM Do YYYY'>{withd.created_at}</Moment></p>
                        <p  className={withd.status === 'Payment confirmed' ? 'text-success mb-0 pt-1' : (!txtColor ? 'text-warning mb-0 pt-1' : 'text-success mb-0 pt-1')} id={`stat-${withd.id}`}><span className="text text-muted">Status</span> - {withd.status}</p>
                    </div>

                    <div className="col-sm-2">
                        
                        
                    </div>
                </div>

                <div className="d-flex p-1 border-top">
                    {withd.status !== 'Payment sent' ? '' : (
                        <span 
                            className='btn btn-soft-warning w-100' 
                            title='Confirm payment receipt'
                            onClick={(e) => paymentReceived(withd.id, withd.producer)}
                        > 
                            Confirm receipt
                        </span>
                    )}
                </div>
            </div>
        </Fragment>
    )
}

export default WithdrawalData

