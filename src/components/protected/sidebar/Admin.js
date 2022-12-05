import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {

    return (
        <Fragment>
            <li className="nav-item">
                <Link className="nav-link menu-link" to='/profiles'>
                    <i className="ri-honour-line"></i><span> Profiles</span>
                </Link>                
            </li>
            <li className="nav-item">
                <Link className="nav-link menu-link" to='/users'>
                    <i className="ri-honour-line"></i><span> Users</span>
                </Link>                
            </li>
        </Fragment>
    )
}

export default Admin
