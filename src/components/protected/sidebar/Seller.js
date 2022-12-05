import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Seller = () => {

    return (
        <Fragment>
            <li className="nav-item">
                <Link className="nav-link menu-link" to='/recyclers'>
                    <i className="ri-honour-line"></i><span> Recyclers</span>
                </Link>                
            </li>
            <li className="nav-item">
                <Link className="nav-link menu-link" to='/seller-transactions'>
                    <i className="ri-honour-line"></i><span> Transactions</span>
                </Link>                
            </li>
            <li className="nav-item">
                <Link className="nav-link menu-link" to='/seller-tracks'>
                    <i className="ri-honour-line"></i><span> Tracks</span>
                </Link>                
            </li>
            <li className="nav-item">
                <Link className="nav-link menu-link" to='/seller-commissions'>
                    <i className="ri-honour-line"></i><span> Earnings</span>
                </Link>                
            </li>
            <li className="nav-item">
                <Link className="nav-link menu-link" to='/seller-withdrawals'>
                    <i className="ri-honour-line"></i><span> Withdrawal Requests</span>
                </Link>                
            </li>
        </Fragment>
    )
}

export default Seller
