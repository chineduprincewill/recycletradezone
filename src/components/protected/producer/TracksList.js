import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../api/axios';
import { AuthContext } from '../../../context/AuthContext';
import Spinnersm from '../../../spinners/Spinnersm';
import Trackinfo from './Trackinfo';

const TRACK_LOG_API = 'track-log';
const styles = {
    borderLeft: '1px solid #cccccc',
    padding : 15
};

const TracksList = ({tracks}) => {

    const { token } = useContext(AuthContext);
    const [trackhistory, setTrackhisotry] = useState(null);
    const [loading, setLoading] = useState(false);


    const getTrackLog = async (uid, seller_id) => {
    
        setLoading(true);

        const data = {
            uid,
            seller_id
        }

        const response = await axios.post(TRACK_LOG_API,
            data,
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );
    
        setTrackhisotry(response.data.tracklog);
        setLoading(false);
    }
    
    return(
        <div className='row'>
            <div className="col-sm-9">
                <table className="table nowrap table-striped align-middle">
                    <thead>
                        <tr>
                            <th>Consumer</th>
                            <th>Product</th>
                            <th>Total (kg)</th>
                            <th>Recycled (kg)</th>
                            <th>...</th>
                        </tr>
                    </thead>
                    <tbody>
                        { tracks.map(track => {
                            return(
                                <tr key={track.id}>
                                    <td><Link to={`/profile-detail/${track.seller_id}`}>{track.seller}</Link></td>
                                    <td>{track.product}</td>
                                    <td>{track.weight}</td>
                                    <td>{track.remitted}</td>
                                    <td>
                                        <span 
                                            className='btn btn-soft-info'
                                            title="tracking history" 
                                            data-target={`#track-${track.id}`}
                                            onClick={(e) => getTrackLog(track.uid, track.seller_id)}
                                        > 
                                            <i className="las la-list-ul"></i>
                                        </span>
                                    </td>
                                </tr>
                            )
                        }) }
                    </tbody>
                </table>
            </div>
            <div className="col-sm-3" style={styles}>    
                <h6>Item Tracking History</h6>
                {trackhistory === null ? <span>No track selected to display history yet!</span> : ( loading ? <Spinnersm /> : <Trackinfo trackhistory={trackhistory} />)}
            </div>
        </div>
       
    )
}

export default TracksList