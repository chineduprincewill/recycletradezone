import React, { Fragment, useContext } from "react";

import { AuthContext } from "../../../context/AuthContext";
import Header from "./Header";
//import Header01 from "./Header01";
import Sidebar from "./Sidebar";
//import Sidebar01 from "./Sidebar01";

const Layout = () => {

    const { isLoggedin } = useContext(AuthContext);

    const hasHeader = isLoggedin ? 
        <Fragment>
            <Header />
            <Sidebar />
        </Fragment> : '';

    return hasHeader;
}

export default Layout;