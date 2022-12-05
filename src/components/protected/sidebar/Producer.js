import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Producer = () => {

    return (
        <Fragment>
            <li className="nav-item">
                <Link className="nav-link menu-link" to='/producer-products'>
                    <i className="ri-honour-line"></i><span> Products</span>
                </Link>                
            </li>
            <li className="nav-item">
                <Link className="nav-link menu-link" to='/producer-tracks'>
                    <i className="ri-honour-line"></i><span> Tracks</span>
                </Link>                
            </li>
            <li className="nav-item">
                <Link className="nav-link menu-link" to='/producer-commissions'>
                    <i className="ri-honour-line"></i><span> Commissions</span>
                </Link>                
            </li>
            <li className="nav-item">
                <Link className="nav-link menu-link" to='/producer-withdrawals'>
                    <i className="ri-honour-line"></i><span> Withdrawal requests</span>
                </Link>                
            </li>
        </Fragment>
    )
}

export default Producer
