import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';



const Navbar = ({ title, icon }) => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, login, logout, user } = authContext;
    const onLogout = () => {
        logout()
    }

    const gustLink = (
        <React.Fragment>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
        </React.Fragment>
    );

    const authLink = (
        <React.Fragment>
            <li style={{ color: "#fff" }}><i className="far fa-user"></i> &nbsp; Hello {user && user.name}</li>
            <li>
                <a href="#!" onClick={onLogout}>logout</a>
            </li>
        </React.Fragment>
    );


    return (
        <div className="navbar  bg-primary">
            <h1>
                <i className={icon} /> &nbsp;&nbsp;{title}
            </h1>

            <ul>
                {isAuthenticated ? authLink : gustLink}
            </ul>

        </div>
    )
}


export default Navbar;