import { useContext, useState } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import axios from '../../../api/axios';

import { AuthContext } from '../../../context/AuthContext';

const PRODUCER_PAY_API = 'producer-pay';

const WithdrawalRequestList = ({withdrawals, setStat}) => {

    const { token } = useContext(AuthContext);
    const [confirm, setConfirm] = useState(<i className="las la-exclamation"></i>);

    const paymentSent = async (id) => {

        if(window.confirm('Are you sure you want to confirm that payment has been remitted to consumer?')){
            
            setConfirm('...');
            
            try{
                const data = {
                    id
                }
    
                const response = await axios.post(PRODUCER_PAY_API,
                    data,
                    {
                        headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
                    }
                );
    
                alert(response.data.message);
                document.getElementById(`stat-${id}`).innerHTML = 'Payment sent'
                setStat('updated');

    
            } catch (err) {
                if (!err?.response) {
                    alert('No Server Response');
                } else {
                    console.log(err.response.data);
                    alert(err.response.data);
                }
            }

            setConfirm(<i className="icofont icofont-paper-plane"></i>);
        }
    }

    return(
        <div className="row table-responsive">
            <table className="table table-hover table-responsive">
                <thead>
                    <tr>
                        <th>Consumer</th>
                        <th>Item</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Requested</th>
                        <th>...</th>
                    </tr>
                </thead>
                <tbody>
                    {withdrawals.map(withdrawal => {
                        return(
                            <tr key={withdrawal.id}>
                                <td><Link to={`/profile-detail/${withdrawal.seller_id}`}>{withdrawal.seller}</Link></td>
                                <td>{withdrawal.product}</td>
                                <td>{withdrawal.amount}</td>
                                <td>{withdrawal.status === 'Payment confirmed' ? <span className="text text-success">{withdrawal.status}</span> : <span className="text text-warning" id={`stat-${withdrawal.id}`}>{withdrawal.status}</span>}</td>
                                <td><Moment format='MMMM Do YYYY'>{withdrawal.created_at}</Moment></td>
                                <td>
                                    {withdrawal.status === 'Payment confirmed' ? '...' : <span 
                                        className='btn btn-warning btn-sm' 
                                        title='Confirm payment'
                                        onClick={(e) => paymentSent(withdrawal.id)}
                                    > 
                                        {confirm}
                                    </span>}
                                </td>
                            </tr>
                        )
                    }) }
                </tbody>
            </table>
        </div>
    )
}

export default WithdrawalRequestList