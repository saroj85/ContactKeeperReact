import {
    GET_ALL_PRODUCT,
    GET_PRODUCT_BY_ID,
    DELETE_PRODUCT,
    PRODUCT_ERROR,
    EDIT_PRODUCT
} from '../type';

export default (state, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCT:
            return {
                ...state,
                products: action.payload
            }
        case GET_PRODUCT_BY_ID:
            return {
                ...state,
                currentProduct : action.payload
            }
            
        default:
            return state;
    };
};


