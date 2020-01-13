import React, { useReducer } from 'react';
import axois from 'axios';
import ProductContext from './productContext';
import ProductReducer from './productReducer';
import {
    GET_ALL_PRODUCT,
    GET_PRODUCT_BY_ID,
    DELETE_PRODUCT,
    PRODUCT_ERROR,
    EDIT_PRODUCT
} from '../type';

const ProductState = (props) => {
    const initialState = {
        products: [],
        currentProduct:  null,
        filterd: null,
        error: null
    };

    const [state, dispatch] = useReducer(ProductReducer, initialState);



    // GET Products 

    const getProduct = async () => {
        try {
            const res = await axois.get("/api/product")
            dispatch({ type:GET_ALL_PRODUCT, payload: res.data })
        } catch (err) {
            dispatch({
                type: PRODUCT_ERROR,
                payload: err.response
            })
        }
    }



    // get Products by id 
    const getProductById = async id => {
        try {
            const res = await axois.get(`/api/product/${id}`)
            dispatch({ type: GET_PRODUCT_BY_ID, payload: res.data})
        } catch (err) {
            dispatch({
                type: PRODUCT_ERROR,
                payload: err.response
            })
        }
    }







    // // ADD CONTACTS
    // const addContact = async contact => {
    //     const config = { headers: { 'Content-Type': 'application/json' } }
    //     try {
    //         const res = await axois.post("/api/contacts", contact, config)
    //         dispatch({ type: ADD_CONTACT, payload: res.data })
    //     } catch (err) {
    //         dispatch({
    //             type: CONTACTS_ERROR,
    //             payload: err.response.msg
    //         })
    //     }
    // }




    // // UPDATE CONTACT 
    // const updateContact = async  contact => {
    //     const config = { headers: { 'Content-Type': 'application/json' } }
    //     try {
    //         const res = await axois.put(`/api/contacts/${contact._id}`, contact, config)
    //         dispatch({ type: UPDATE_CONTACT, payload: res.data })
    //     } catch (err) {
    //         dispatch({
    //             type: CONTACTS_ERROR,
    //             payload: err.response.msg
    //         })
    //     }
    // }




    // // DELETE_CONTACT
    // const deleteContact = async id => {
    //     try {
    //         await axois.delete(`/api/contacts/${id}`)
    //         dispatch({ type: DELETE_CONTACT, payload: id })
    //     } catch (err) {
    //         dispatch({
    //             type: CONTACTS_ERROR,
    //             payload: err.response.msg
    //         })
    //     }
    // }


    // // SET CURRENT CONTACT 
    // const setCurrent = contact => {
    //     dispatch({ type: SET_CURRENT, payload: contact })
    // }



    // // CLEAR CURRENT CONTACT 
    // const clearCurrent = () => {
    //     dispatch({ type: CLEAR_CURRENT })
    // }

    // // FILTER CONTACT 
    // const filterContact = text => {
    //     dispatch({ type: FILTER_CONTACTS, payload: text })
    // }


    // // CLEAR FILTER 
    // const clearFilter = () => {
    //     dispatch({ type: CLEAR_FILTER })
    // }



    return (
        <ProductContext.Provider
            value={{
                products: state.products,
                getProduct,
                getProductById,
                currentProduct : state.currentProduct
            }}>
            {props.children}
        </ProductContext.Provider>
    )
};


export default ProductState;