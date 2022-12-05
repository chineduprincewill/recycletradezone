import { Fragment, useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext"

const MobileNav = () => {

    const { user } = useContext(AuthContext)

    let navlinks;

    if(user.usertype === 'admin'){
        navlinks = (
            <Fragment>
                 <Link to="/profiles" className="dropdown-item"><i
                                    className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span
                                    className="align-middle">Profiles</span></Link>
                 <Link to="/users" className="dropdown-item"><i
                                    className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span
                                    className="align-middle">Users</span></Link>
            </Fragment>
        )
    }
    else if(user.usertype === 'producer'){
        navlinks = (
            <Fragment>
                 <Link to="/producer-products" className="dropdown-item"><i
                                    className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span
                                    className="align-middle">Products</span></Link>
                 <Link to="/producer-tracks" className="dropdown-item"><i
                                    className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span
                                    className="align-middle">Tracks</span></Link>
                <Link to="/producer-commissions" className="dropdown-item"><i
                                    className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span
                                    className="align-middle">Commissions</span></Link>
                <Link to="/producer-withdrawals" className="dropdown-item"><i
                                    className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span
                                    className="align-middle">Withdrawal Requests</span></Link>
            </Fragment>
        )
    }
    else if(user.usertype === 'seller'){
        navlinks = (
            <Fragment>
                 <Link to="/recyclers" className="dropdown-item"><i
                                    className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span
                                    className="align-middle">Recyclers</span></Link>
                 <Link to="/seller-transactions" className="dropdown-item"><i
                                    className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span
                                    className="align-middle">Transactions</span></Link>
                 <Link to="/seller-tracks" className="dropdown-item"><i
                                    className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span
                                    className="align-middle">Tracks</span></Link>
                <Link to="/seller-commissions" className="dropdown-item"><i
                                    className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span
                                    className="align-middle">Earnings</span></Link>
                <Link to="/seller-withdrawals" className="dropdown-item"><i
                                    className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span
                                    className="align-middle">Withdrawal Requests</span></Link>
            </Fragment>
        )
    }
    else if(user.usertype === 'buyer'){
        navlinks = (
            <Fragment>
                 <Link to="/buyer-transactions" className="dropdown-item"><i
                                    className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span
                                    className="align-middle">Consumer Requests</span></Link>
                 <Link to="/open-transactions" className="dropdown-item"><i
                                    className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span
                                    className="align-middle">Open Requests</span></Link>
                <Link to="/sales" className="dropdown-item"><i
                                    className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span
                                    className="align-middle">Products</span></Link>
            </Fragment>
        )
    }

    return (
        <Fragment>
            {navlinks}
        </Fragment>
    )
}

export default MobileNav