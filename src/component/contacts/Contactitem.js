import React, { useContext } from "react";
import ContactContaxt from '../../context/contact/contactContext';

const ContactsItem = ({ contact }) => {
    const contactContext = useContext(ContactContaxt);
    const deleteBtn = () => {
        contactContext.deleteContact(contact._id);
        contactContext.clearCurrent();
    }
    const onEditBtn = () => {
        contactContext.setCurrent(contact);
    }

    return (
        <div className="contact_card">
            <h1 className="name">
                {contact.name} &nbsp;&nbsp;
                {contact.type && <span className={`type ${contact.type === "personal" ? "personal" : "professional"}`}>{contact.type}</span>}
            </h1>
            {contact.email && <h2 className="email"><i className="fas fa-envelope-open"></i>{contact.email}</h2>}
            {contact.phone && <h2 className="email"><i className="fas fa-mobile"></i>{contact.phone}</h2>}
            <div>
                <button className="btn edit_btn" style={{ marginRight: '10px' }} onClick={onEditBtn}>Edit</button>
                <button className="btn delete_btn" onClick={deleteBtn} >Delete</button>
            </div>
        </div>
    )
}

export default ContactsItem;