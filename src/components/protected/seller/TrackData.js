import { Fragment } from "react"
import Moment from "react-moment"
import { Link } from "react-router-dom";


const TrackData = ({track}) => {

    return(
        <Fragment>
            <div className="card overflow-hidden">
                <div className="card-body bg-marketplace d-flex">
                    <div className='flex-grow-1'>
                        <h5><span className="lh-base mb-0 text-info">{track.product}</span></h5>
                        <p className="mb-0 pt-1 text-muted"><Link to={`/profile-detail/${track.producer_id}`}><strong>Producer</strong> - {track.producer}</Link></p>
                        <p className="mb-0 pt-1 text-muted"><strong>Tracked</strong> - {track.weight}kg</p>
                        <p className="mb-0 pt-1 text-muted"><strong>Recycled</strong> - {track.remitted}kg</p>
                        <p className="mb-0 pt-1 text-info"><Moment format='MMMM Do YYYY'>{track.updated_at}</Moment></p>
                    </div>   
                </div>
                <div className="d-flex p-1 border-top">
                <Link 
                            to={`/track-sell?id=${track.id}&weight=${track.weight}&item=${track.product}&recycled=${track.remitted}`}
                            className='btn btn-soft-success mx-3 w-100'
                            title="Sell track" 
                        > 
                            <i className="las la-dollar-sign"></i> Sell track
                        </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default TrackData

