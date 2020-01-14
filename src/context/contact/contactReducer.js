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

export default (state, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
        case GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload,
                loading: false,
            }
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact => contact._id === action.payload._id ? action.payload : contact),
                loading: false,
            }
        case FILTER_CONTACTS:
            return {
                ...state,
                filterd: state.contacts.filter(contact => {
                    const Regx = new RegExp(`${action.payload}`, 'gi');
                    return contact.name.match(Regx) || contact.email.match(Regx)
                }),
                loading: false,
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filterd: null,
                loading: false,
            }
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact._id !== action.payload),
                loading: false,
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        case CONTACTS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    };
};


