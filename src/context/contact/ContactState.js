import React, { useReducer } from 'react';
import axois from 'axios';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import {
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
    SET_ALERT,
    REMOVE_ALERT,
    ADD_CONTACT,
    CONTACTS_ERROR,
    GET_CONTACTS,
    CLEAR_CONTACTS
} from '../type';

const ContactState = (props) => {
    const initialState = {
        contacts: [],
        current: null,
        filterd: null,
        error: null
    };

    const [state, dispatch] = useReducer(ContactReducer, initialState);
    // GET CONTACTS 

    const getContacts = async () => {
        try {
            const res = await axois.get("/api/contacts")
            dispatch({ type: GET_CONTACTS, payload: res.data })
        } catch (err) {
            dispatch({
                type: CONTACTS_ERROR,
                payload: err.response.msg
            })
        }
    }


    // ADD CONTACTS
    const addContact = async contact => {
        const config = { headers: { 'Content-Type': 'application/json' } }
        try {
            const res = await axois.post("/api/contacts", contact, config)
            dispatch({ type: ADD_CONTACT, payload: res.data })
            // getContacts()
        } catch (err) {
            dispatch({
                type: CONTACTS_ERROR,
                payload: err.response.msg
            })
        }
    }




    // UPDATE CONTACT 
    const updateContact = async  contact => {
        const config = { headers: { 'Content-Type': 'application/json' } }
        try {
            const res = await axois.put(`/api/contacts/${contact._id}`, contact, config)
            console.log("UPDATE", res.data)
            dispatch({ type: UPDATE_CONTACT, payload: res.data })
            
        } catch (err) {
            dispatch({
                type: CONTACTS_ERROR,
                payload: err.response.msg
            })
        }
    }




    // DELETE_CONTACT
    const deleteContact = async id => {
        try {
            await axois.delete(`/api/contacts/${id}`)
            dispatch({ type: DELETE_CONTACT, payload: id })
        } catch (err) {
            dispatch({
                type: CONTACTS_ERROR,
                payload: err.response.msg
            })
        }
    }


    // SET CURRENT CONTACT 
    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact })
    }



    // CLEAR CURRENT CONTACT 
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT })
    }

    // FILTER CONTACT 
    const filterContact = text => {
        dispatch({ type: FILTER_CONTACTS, payload: text })
    }


    // CLEAR FILTER 
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER })
    }



    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                filterd: state.filterd,
                current: state.current,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact,
                filterContact,
                clearFilter,
                error: state.error,
                getContacts
            }}>
            {props.children}
        </ContactContext.Provider>
    )
};


export default ContactState;