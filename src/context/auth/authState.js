import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import axois from 'axios';
import SetAuthToken from '../../utils/setAuthToken';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../type';


const AuthState = (props) => {
    const initialState = {
        token: localStorage.getItem("token"),
        isAuthenticated: null,
        loading: true,
        error: null,
        user: null
    };
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    // load user 
    const loadUser = async () => {
        if (localStorage.token)  SetAuthToken(localStorage.token)
        try {
            const res = await axois.get('/api/auth');
            dispatch({type: USER_LOADED,payload: res.data})
        } catch (err) {
            dispatch({type: AUTH_ERROR})
        };
    };


    // Register User 
    const registerUser = async FormData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axois.post('/api/users', FormData, config);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
            loadUser();
        } catch (err) {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.msg
            })

        }
    }


    // Login user 
    const login = async FormData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axois.post('/api/auth', FormData, config);
            dispatch({
                type: LOGIN_SUCESS,
                payload: res.data
            })
            loadUser();
        } catch (err) {
            dispatch({
                type: LOGIN_FAIL,
                payload: err.response.data.msg
            });
        };
    };

    // logout request 
    const logout = () => {
        dispatch({
            type: LOGOUT
        });
    };

    // clear error 
    const clearError = () => {
        dispatch({
            type: CLEAR_ERRORS,
        })
    }


    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                error: state.error,
                user: state.user,
                registerUser,
                loadUser,
                login,
                logout,
                clearError
            }}>
            {props.children}
        </AuthContext.Provider>
    )
};


export default AuthState;