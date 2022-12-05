import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import MobileNav from "./MobileNav";

const Header = () => {

    const navigate = useNavigate();
    const { logout, user } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
        navigate('/login');
    }

    return (
        <header id="page-topbar">
        <div className="layout-width">
            <div className="navbar-header">
                <div className="d-flex">
                    <div className="navbar-brand-box horizontal-logo">
                        <button className="logo logo-dark">
                            <span className="logo-sm">
                                <img src="assets/images/logo-sm.png" alt="" height="22" />
                            </span>
                            <span className="logo-lg">
                                <img src="assets/images/logo-dark.png" alt="" height="17" />
                            </span>
                        </button>

                        <button className="logo logo-light">
                            <span className="logo-sm">
                                <img src="assets/images/logo-sm.png" alt="" height="22" />
                            </span>
                            <span className="logo-lg">
                                <img src="assets/images/logo-light.png" alt="" height="17" />
                            </span>
                        </button>
                        
                    </div>

                    <button type="button" className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"
                        id="topnav-hamburger-icon">
                        <span>
                            <span className="logo-sm"><img src="assets/images/logo-dark.png" alt="" height="34" /></span>
                            <span className="mx-1 mt-5 text-success"><strong>Recycle Trade Zone</strong></span>
                            <span></span>
                        </span>
                    </button>

                </div>

                <div className="d-flex align-items-center">

                    <div className="dropdown ms-sm-3 header-item topbar-user">
                        <button type="button" className="btn" id="page-header-user-dropdown" data-bs-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <span className="d-flex align-items-center">
                                <img className="rounded-circle header-profile-user" src={user && user.image_link !== null ? user.image_link : "assets/images/users/avatar-1.jpg"}
                                    alt="Header Avatar" />
                                <span className="text-start ms-xl-2">
                                    <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">{user.fullname}</span>
                                    <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">{user.email}</span>
                                </span>
                            </span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end">
                            
                            <Link to="/update-profile" className="dropdown-item" href="pages-profile.html"><i
                                    className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> <span
                                    className="align-middle">Profile</span></Link>
                            <div className="dropdown-divider"></div>
                            <MobileNav />
                            <div className="dropdown-divider"></div>

                            <button className="dropdown-item" href="auth-logout-basic.html"><i
                                    className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span
                                    className="align-middle" data-key="t-logout" onClick={handleLogout}>Logout</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header;