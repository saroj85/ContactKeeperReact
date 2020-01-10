import React, { useRef, useEffect, useState, useContext } from 'react';
import ContactContaxt from '../../context/contact/contactContext';

const Search = () => {
    const contactContext = useContext(ContactContaxt);
    const text = useRef("");
    const { filterContact, clearFilter, filterd } = contactContext;
    useEffect(() => { if (filterd === null) text.current.value = ""; }, [filterd])

    const onchange = e => {
        if (text.current.value !== "") filterContact(e.target.value);
        else clearFilter()
    }

    return (
        <input type="text" ref={text} onChange={onchange} className="input" placeholder="Filter contect" />
    )
}
export default Search;