import React, { useContext, useEffect } from "react";
import ContactContaxt from '../../context/contact/contactContext';
import ContactItem from './Contactitem';
import Search from '../Search/Search';

const Contacts = () => {
    const contactContext = useContext(ContactContaxt);
    const { contacts, filterd, loading, getContacts } = contactContext;
    
    useEffect(() => {
        getContacts();
    }, [])
    if (contacts.length === 0) {
        return <h4>Please Add Contacts</h4>
    }
    return (
        <div className="contact_row">
            <Search />

            {filterd !== null ?
                filterd.map(contact => (
                    <ContactItem key={contact.id} contact={contact} />
                ))
                :
                contacts.map(contact => (
                    <ContactItem key={contact.id} contact={contact} />
                ))
            }
        </div>
    )
}

export default Contacts;