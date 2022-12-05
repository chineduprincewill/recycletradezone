import { Fragment, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../api/axios';
import { AuthContext } from '../../../context/AuthContext';
import Spinnersm from '../../../spinners/Spinnersm';
import CommissionInfo from './CommissionInfo';

const COMMISSION_LOG_API = 'commission-log';
const styles = {
    borderLeft: '1px solid #cccccc',
    padding : 15
};

const CommissionsList = ({commissions}) => {

    const { token } = useContext(AuthContext);
    const [comm, setComm] = useState(null);
    const [loading, setLoading] = useState(false);

    const getCommissionLog = async (id) => {

        setLoading(true);

        const data = {
            id
        }

        const response = await axios.post(COMMISSION_LOG_API,
            data,
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );
    
        setComm(response.data.log);
        console.log(comm);

        setLoading(false);
    }


    return(
        <Fragment>
            <div className='row'>
                <div className="col-sm-8">
                    <table className="table table-hover table-responsive">
                        <thead>
                            <tr>
                                <th>Consumer</th>
                                <th>Item</th>
                                <th>Earned</th>
                                <th>Withdrawn</th>
                                <th>Pending request?</th>
                                <th>...</th>
                            </tr>
                        </thead>
                        <tbody>
                            {commissions.map(commission => {
                                return(
                                    <tr key={commission.id}>
                                        <td><Link to={`/profile-detail/${commission.seller_id}`}>{commission.seller}</Link></td>
                                        <td>{commission.product}</td>
                                        <td>{commission.commission}</td>
                                        <td>{commission.withdrawn}</td>
                                        <td>{commission.withdrawal_requested}</td>
                                        <td>
                                            <span 
                                                className='btn btn-soft-success'
                                                title="commission history" 
                                                onClick={(e) => getCommissionLog(commission.id)}
                                            > 
                                                <i className="las la-money-bill-wave"></i>
                                            </span>
                                        </td>
                                    </tr>
                                )
                            }) }
                        </tbody>
                    </table>
                </div>
                <div className="col-sm-4" style={styles}>
                    <h6>Earning History</h6>
                    {comm === null ? <span className="text text-danger">No earning record selected to display history yet!</span> : ( loading ? <Spinnersm /> : <CommissionInfo comm={comm} />)}
                </div>
            </div>
            
        </Fragment>
        
    )
}

export default CommissionsList