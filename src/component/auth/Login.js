import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';


const Login = (props) => {

    const alertContext = useContext(AlertContext)
    const authContext = useContext(AuthContext)
    const { login, error, clearError, isAuthenticated } = authContext;
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    // init state var 
    const { email, password } = user;

    // on change 
    const onchange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    // check isAut 
    useEffect(() => {
        if (isAuthenticated) props.history.push("/")
        if (error === "invalid user")  alertContext.setAlert("invalid user");

        // eslint disable next line 
        clearError()
    }, [error, isAuthenticated, props.history])

    // on submit 
    const onSubmit = () => {
        if (email === "" || password === "") {
            alertContext.setAlert("invalid user name")
        }
        else {
            login({ email, password })
        }
    }


    return (
        <div className="form-container">
            <h1>Account Login</h1>
            <div className="form_group">
                <label>Email</label>
                <input type="email" name="email" value={email} onChange={onchange} className="input" />
            </div>
            <div className="form_group">
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={onchange} className="input" />
            </div>
            <div className="form_group">
                <button className="btn edit_btn" onClick={onSubmit}>Login</button>
            </div>
        </div>
    )
}

export default Login;