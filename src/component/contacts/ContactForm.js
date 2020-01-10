import React, { useState, useContext, useEffect } from 'react';
import ContactContaxt from '../../context/contact/contactContext';

const ContactForm = () => {
    const contactContext = useContext(ContactContaxt);

    const {addContact, current, clearCurrent, updateContact} = contactContext;

    useEffect(() => {
        if(current !== null){
            setContact(current)
        }
        else{
            setContact({
                name: "",
                email: '',
                phone: "",
                type: "personal"
    
            })
        }
    },[contactContext, current])

    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        type: "personal",
    })

    const { email, name, phone, type } = contact;

    const onChange = e => {
        console.log(e.target.name)
        setContact({ ...contact, [e.target.name]: e.target.value })
    }

    const clearBtn = () => {
        clearCurrent();
    }

    const onSubmit = (e) => {
        if(current === null){
            addContact(contact);
        }
        else{
            updateContact(contact)
        }
        // console.log(contactContext.addContact)
        setContact({
            name: "",
            email: '',
            phone: "",
            type: "personal"

        })
    }


    return (
        <div style={{ width: '400px' }}>
            <h1>{current ? "Edit Contact" : "Add Contact" }</h1>
            <div className="form_group">
                <label>Name</label>
                <input type="text" name="name" value={name} className="input" onChange={onChange} />
            </div>
            <div className="form_group">
                <label>Email</label>
                <input type="email" name="email" value={email} className="input" onChange={onChange} />
            </div>
            <div className="form_group">
                <label>Phone</label>
                <input type="phone" name="phone" value={phone} className="input" onChange={onChange} />
            </div>
            <div className="form_group">
                <label>Contact Type</label>
                <input type="radio" name="type" value="personal" className="" onChange={onChange} checked={type === "personal"}/> Personal &nbsp; &nbsp;
                <input type="radio" name="type" value="professional" className="" onChange={onChange}  checked={type === "professional"}/>professional 
            </div>
            <div className="form_group" onClick={onSubmit}>
                <button className="btn edit_btn">{current ? "Save Contact" : "Add Contact"}</button>
            </div>
            {current && ( <div className="form_group" onClick={onSubmit}>
                    <button className="btn clear_btn" onClick={clearBtn}>Clear</button>
                </div>)}
        </div>
    )
}



export default ContactForm;