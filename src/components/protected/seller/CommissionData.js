import { Fragment } from "react"
import Moment from "react-moment"
import { Link } from "react-router-dom";

const styles = {
    padding : 3,
    fontSize : 13
};

const CommissionData = ({comm}) => {

    return(
        <Fragment>
            <div className="card overflow-hidden">
                <div className="card-body bg-marketplace d-flex">
                    <div className="flex-grow-1">
                        <h5><span className="lh-base mb-0 text-info">{comm.product}</span></h5>
                        <p className="mb-0 pt-1 text-muted"><Link to={`/profile-detail/${comm.producer_id}`}><strong>Producer</strong> - {comm.producer}</Link></p>
                        <p className="mb-0 pt-1 text-muted"><strong>Earned</strong> - NGN{comm.commission}</p>
                        <p className="mb-0 pt-1 text-muted"><strong>Withdrawn</strong> - NGN{comm.withdrawn}</p>
                        <p className="mb-0 pt-1 text-info"><Moment format='MMMM Do YYYY'>{comm.updated_at}</Moment></p>
                    </div>
                </div>
                <div className="d-flex p-1 border-top">
                    <Link 
                        to={`/request-withdrawal?id=${comm.id}&earned=${comm.commission}&item=${comm.product}&withdrawn=${comm.withdrawn}`}
                        className='btn btn-soft-success mx-3 w-100'
                        title="Request withdrawal" 
                    > 
                        <i className="las la-dollar-sign"></i> Withdraw earning
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default CommissionData

