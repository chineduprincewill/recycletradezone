import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

import Login from './Login';

export const PrivateRoute = ({ children }) => {

    const { isLoggedin } = useContext(AuthContext);

    const navigate = useNavigate();

    console.log(isLoggedin);

    if(!isLoggedin || isLoggedin === null){
        navigate('/login');
    }  
    
    return children;
};
