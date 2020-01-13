import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import uuid from 'uuid';
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../type';

const AlertState = (props) => {
    const initialState = [];
    const [state, dispatch] = useReducer(AlertReducer, initialState);

    // set alert 
    const setAlert = (msg, type, timeout = 5000) => {
        const id = uuid.v4();
        dispatch({
            type: SET_ALERT,
            payload: { msg, type, id }
        });
        // setTimeout(() => dispatch({ type: SET_ALERT, payload: { msg, type, id } }), timeout);
    }

    // remove alert 
    const clearAlert = () => {
        dispatch({
            type: REMOVE_ALERT,
        })
    }

    return (
        <AlertContext.Provider
            value={{
                alerts: state,
                setAlert,
                clearAlert
            }}>
            {props.children}
        </AlertContext.Provider>
    )
};


export default AlertState;