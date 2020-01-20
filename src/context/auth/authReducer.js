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



export default (state, action) => {
    switch (action.type) {
        case USER_LOADED:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                loading: false,
            }
            debugger;
        case REGISTER_SUCCESS: 
            return {
                ...state
            }
        case LOGIN_SUCESS:
            localStorage.setItem("token", action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            }
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
        case REGISTER_FAIL:
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            break;
    }
}