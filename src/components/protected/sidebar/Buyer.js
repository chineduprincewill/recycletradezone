import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Buyer = () => {

    return (
        <Fragment>
            <li className="nav-item">
                <Link className="nav-link menu-link" to='/buyer-transactions'>
                    <i className="ri-honour-line"></i><span> Consumers Requests</span>
                </Link>                
            </li>
            <li className="nav-item">
                <Link className="nav-link menu-link" to='/open-transactions'>
                    <i className="ri-honour-line"></i><span> Open Requests</span>
                </Link>                
            </li>
            <li className="nav-item">
                <Link className="nav-link menu-link" to='/sales'>
                    <i className="ri-honour-line"></i><span> Products</span>
                </Link>                
            </li>
        </Fragment>
    )
}

export default Buyer
