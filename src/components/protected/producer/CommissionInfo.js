import { Fragment } from "react";
import Moment from "react-moment";

const CommissionInfo = ({comm}) => {

    return(
        <Fragment>
                {
                    comm.map(cm =>
                        <div className="row" key={cm.id} style={{ lineHeight: 3 }}>
                            <span className="col-sm-3"><strong>NGN{cm.amount}</strong></span> 
                            <span className="col-sm-3">{cm.quantity}kg</span>
                            <span className="col-sm-6"><Moment format='MMMM Do YYYY'>{cm.created_at}</Moment></span>
                        </div>
                    )
                }
        </Fragment>
    )
}

export default CommissionInfo