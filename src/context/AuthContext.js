import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

    const [isLoggedin, setIsLoggedin] = useState(false);
    const [token, setToken] = useState('');
    const [role, setRole] = useState('');
    const [user, setUser] = useState(null);

    const authenticate = (usertoken, userrole) => {

        localStorage.setItem('ls_token', usertoken);
        localStorage.setItem('ls_role', userrole);
        localStorage.setItem('ls_isLoggedin', true);
    }

    const logout = () => {
        setToken('');
        localStorage.removeItem('ls_token');

        setRole('');
        localStorage.removeItem('ls_role');

        setIsLoggedin(false);
        localStorage.removeItem('ls_isLoggedin');

        setUser(null);
        localStorage.removeItem('ls_user');
    }

    const setAuthenticatedUser = (userObject) => {
        localStorage.setItem('ls_user', JSON.stringify(userObject));
    }


    useEffect(() => {
        
        if(localStorage.getItem('ls_token')){
            setToken(localStorage.getItem('ls_token'));
        }
    }, [])

    useEffect(() => {
        const loginStatus = localStorage.getItem('ls_isLoggedin');
        if(loginStatus){
            setIsLoggedin(loginStatus);
        }
    }, [])

    useEffect(() => {
        
        if(localStorage.getItem('ls_role')){
            setRole(localStorage.getItem('ls_role'));
        }
    }, [])

    useEffect(() => {
        if(localStorage.getItem('ls_user')){
            setUser(JSON.parse(localStorage.getItem('ls_user')));
        }
    }, [])

    return(
        <AuthContext.Provider value={{isLoggedin, token, authenticate, logout, setAuthenticatedUser, user, role}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;