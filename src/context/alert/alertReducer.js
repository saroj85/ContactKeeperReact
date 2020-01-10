import {
    SET_ALERT,
    REMOVE_ALERT
} from '../type';

export default (state, action) => {
    switch (action.type) {
        case SET_ALERT:
            return [...state, action.payload]
        case REMOVE_ALERT:
            return state
        default:
            return state
    };
};