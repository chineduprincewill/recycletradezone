import React, { useContext } from "react";

const Sidebar = () => {

    return (
        <aside className="main-sidebar hidden-print ">
         <section className="sidebar" id="sidebar-scroll">
            <ul className="sidebar-menu">
                <li className="nav-level">--- Navigation</li>
                <li className="active treeview">
                    <a className="waves-effect waves-dark" href="index.html">
                        <i className="icon-speedometer"></i><span> Dashboard</span>
                    </a>                
                </li>
                <li className="nav-level">--- Components</li>
                <li className="treeview"><a className="waves-effect waves-dark" href="#!"><i className="icon-briefcase"></i><span> UI Elements</span><i className="icon-arrow-down"></i></a>
                    <ul className="treeview-menu">
                        <li><a className="waves-effect waves-dark" href="accordion.html"><i className="icon-arrow-right"></i> Accordion</a></li>
                        <li><a className="waves-effect waves-dark" href="button.html"><i className="icon-arrow-right"></i> Button</a></li>
                        <li><a className="waves-effect waves-dark" href="label-badge.html"><i className="icon-arrow-right"></i> Label Badge</a></li>
                        <li><a className="waves-effect waves-dark" href="bootstrap-ui.html"><i className="icon-arrow-right"></i> Grid system</a></li>
                        <li><a className="waves-effect waves-dark" href="box-shadow.html"><i className="icon-arrow-right"></i> Box Shadow</a></li>
                        <li><a className="waves-effect waves-dark" href="color.html"><i className="icon-arrow-right"></i> Color</a></li>
                        <li><a className="waves-effect waves-dark" href="light-box.html"><i className="icon-arrow-right"></i> Light Box</a></li>
                        <li><a className="waves-effect waves-dark" href="notification.html"><i className="icon-arrow-right"></i> Notification</a></li>
                        <li><a className="waves-effect waves-dark" href="panels-wells.html"><i className="icon-arrow-right"></i> Panels-Wells</a></li>
                        <li><a className="waves-effect waves-dark" href="tabs.html"><i className="icon-arrow-right"></i> Tabs</a></li>
                        <li><a className="waves-effect waves-dark" href="tooltips.html"><i className="icon-arrow-right"></i> Tooltips</a></li>
                        <li><a className="waves-effect waves-dark" href="typography.html"><i className="icon-arrow-right"></i> Typography</a></li>
                    </ul>
                </li>

                <li className="treeview"><a className="waves-effect waves-dark" href="#!"><i className="icon-chart"></i><span> Charts &amp; Maps</span><span className="label label-success menu-caption">New</span><i className="icon-arrow-down"></i></a>
                    <ul className="treeview-menu">
                        <li><a className="waves-effect waves-dark" href="float-chart.html"><i className="icon-arrow-right"></i> Float Charts</a></li>
                        <li><a className="waves-effect waves-dark" href="morris-chart.html"><i className="icon-arrow-right"></i> Morris Charts</a></li>
                    </ul>
                </li>

                <li className="treeview"><a className="waves-effect waves-dark" href="#!"><i className="icon-book-open"></i><span> Forms</span><i className="icon-arrow-down"></i></a>
                    <ul className="treeview-menu">
                        <li><a className="waves-effect waves-dark" href="form-elements-bootstrap.html"><i className="icon-arrow-right"></i> Form Elements Bootstrap</a></li>
                        
                        <li><a className="waves-effect waves-dark" href="form-elements-advance.html"><i className="icon-arrow-right"></i> Form Elements Advance</a></li>
                    </ul>
                </li>
                
                <li className="treeview">
                    <a className="waves-effect waves-dark" href="basic-table.html">
                        <i className="icon-list"></i><span> Table</span>
                    </a>                
                </li>


                <li className="nav-level">--- More</li>

                <li className="treeview"><a className="waves-effect waves-dark" href="#!"><i className="icon-docs"></i><span>Pages</span><i className="icon-arrow-down"></i></a>
                    <ul className="treeview-menu">
                        <li className="treeview"><a href="#!"><i className="icon-arrow-right"></i><span> Authentication</span><i className="icon-arrow-down"></i></a>
                            <ul className="treeview-menu">
                                <li><a className="waves-effect waves-dark" href="register1.html" target="_blank"><i className="icon-arrow-right"></i> Register 1</a></li>
                                
                                <li><a className="waves-effect waves-dark" href="login1.html" target="_blank"><i className="icon-arrow-right"></i><span> Login 1</span></a></li>
                                <li><a className="waves-effect waves-dark" href="forgot-password.html" target="_blank"><i className="icon-arrow-right"></i><span> Forgot Password</span></a></li>
                                
                            </ul>
                        </li>
                        
                        <li><a className="waves-effect waves-dark" href="404.html" target="_blank"><i className="icon-arrow-right"></i> Error 404</a></li>
                        <li><a className="waves-effect waves-dark" href="sample-page.html"><i className="icon-arrow-right"></i> Sample Page</a></li>
                        
                    </ul>
                </li>


                <li className="nav-level">--- Menu Level</li>

                <li className="treeview"><a className="waves-effect waves-dark" href="#!"><i className="icofont icofont-company"></i><span>Menu Level 1</span><i className="icon-arrow-down"></i></a>
                    <ul className="treeview-menu">
                        <li>
                            <a className="waves-effect waves-dark" href="#!">
                                <i className="icon-arrow-right"></i>
                                Level Two
                            </a>
                        </li>
                        <li className="treeview">
                            <a className="waves-effect waves-dark" href="#!">
                                <i className="icon-arrow-right"></i>
                                <span>Level Two</span>
                                <i className="icon-arrow-down"></i>
                            </a>
                            <ul className="treeview-menu">
                                <li>
                                    <a className="waves-effect waves-dark" href="#!">
                                        <i className="icon-arrow-right"></i>
                                        Level Three
                                    </a>
                                </li>
                                <li>
                                    <a className="waves-effect waves-dark" href="#!">
                                        <i className="icon-arrow-right"></i>
                                        <span>Level Three</span>
                                        <i className="icon-arrow-down"></i>
                                    </a>
                                    <ul className="treeview-menu">
                                        <li>
                                            <a className="waves-effect waves-dark" href="#!">
                                                <i className="icon-arrow-right"></i>
                                                Level Four
                                            </a>
                                        </li>
                                        <li>
                                            <a className="waves-effect waves-dark" href="#!">
                                                <i className="icon-arrow-right"></i>
                                                Level Four
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
         </section>
      </aside>
    )
}

export default Sidebar;