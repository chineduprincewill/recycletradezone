import React, { Fragment, useContext } from "react";
import { Link } from 'react-router-dom';

import { AuthContext } from "../../../context/AuthContext";
import Admin from "../sidebar/Admin";
import Buyer from "../sidebar/Buyer";
import Producer from "../sidebar/Producer";
import Seller from "../sidebar/Seller";

const Sidebar = () => {

    const { role } = useContext(AuthContext);

    let sidemenu;

    if(role === 'admin'){
        sidemenu = <Admin />
    }
    else if(role === 'producer'){
        sidemenu = <Producer />
    }
    else if(role === 'seller'){
        sidemenu = <Seller />
    }
    else if(role === 'buyer'){
        sidemenu = <Buyer />
    }

    return (
        <Fragment>
            <div className="app-menu navbar-menu">
            
                <div className="navbar-brand-box">
                    <a href="index.html" className="logo logo-dark">
                        <span className="logo-sm">
                            <img src="assets/images/logo-sm.png" alt="" height="44" />
                        </span>
                        <span className="logo-lg">
                            <img src="assets/images/logo-dark.png" alt="" height="34" />
                        </span>
                    </a>
                    <a href="index.html" className="logo logo-light">
                        <span className="logo-sm">
                            <img src="assets/images/logo-sm.png" alt="" height="44" />
                        </span>
                        <span className="logo-lg">
                            <img src="assets/images/logo-light.png" alt="" height="34" />
                        </span>
                    </a>
                    <button type="button" className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
                        <i className="ri-record-circle-line"></i>
                    </button>
                </div>

                <div id="scrollbar">
                    <div className="container-fluid">

                        <div id="two-column-menu">
                        </div>
                        <ul className="navbar-nav" id="navbar-nav">
                            <li className="menu-title"><span data-key="t-menu">Menu</span></li>

                            <li className="nav-item">
                                <Link className="nav-link menu-link" to="/dashboard">
                                    <i className="ri-honour-line"></i> <span data-key="t-widgets">Dashboard</span>
                                </Link>
                            </li>
                            {sidemenu}
                        </ul>
                    </div>
                </div>
                <div className="sidebar-background"></div>
            </div>
            <div className="vertical-overlay"></div>
        </Fragment>
        
    )
}

export default Sidebar