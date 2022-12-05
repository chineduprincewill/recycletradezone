import { Fragment } from "react";
import Moment from "react-moment";

const Trackinfo = ({trackhistory}) => {

    return(
        <Fragment>
                {
                    trackhistory.map(tklog =>
                        <div className="row" key={tklog.id} style={{ lineHeight: 3 }}>

                            <span className="col-sm-4"><strong>{tklog.weight_tracked}kg</strong></span>
                            <span className="col-sm-8"><Moment format='MMMM Do YYYY'>{tklog.created_at}</Moment></span>
                        </div>
                    )
                }
        </Fragment>
    )
}

export default Trackinfo