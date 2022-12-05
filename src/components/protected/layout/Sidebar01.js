import { Fragment } from "react"

const Sidebar01 = () => {

    return(
        <Fragment>
            <div className="app-menu navbar-menu">
                <div className="navbar-brand-box">
                    <a href="index.html" className="logo logo-dark">
                        <span className="logo-sm">
                            <img src="assets/images/logo-sm.png" alt="" height="22" />
                        </span>
                        <span className="logo-lg">
                            <img src="assets/images/logo-dark.png" alt="" height="17" />
                        </span>
                    </a>
                    <a href="index.html" className="logo logo-light">
                        <span className="logo-sm">
                            <img src="assets/images/logo-sm.png" alt="" height="22" />
                        </span>
                        <span className="logo-lg">
                            <img src="assets/images/logo-light.png" alt="" height="17" />
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
                                <a className="nav-link menu-link" href="#sidebarDashboards" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarDashboards">
                                    <i className="ri-dashboard-2-line"></i> <span data-key="t-dashboards">Dashboards</span>
                                </a>
                            </li> 
                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#sidebarLayouts" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarLayouts">
                                    <i className="ri-layout-3-line"></i> <span data-key="t-layouts">Layouts</span>
                                </a>
                            </li> 

                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#sidebarAuth" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAuth">
                                    <i className="ri-account-circle-line"></i> <span data-key="t-authentication">Authentication</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#sidebarPages" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarPages">
                                    <i className="ri-pages-line"></i> <span data-key="t-pages">Pages</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#sidebarLanding" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarLanding">
                                    <i className="ri-rocket-line"></i> <span data-key="t-landing">Landing</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="sidebar-background"></div>
            </div>
            <div className="vertical-overlay"></div>
        </Fragment>
    )
}

export default Sidebar01