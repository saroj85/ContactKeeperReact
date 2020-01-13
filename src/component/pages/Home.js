import React, {useContext, useEffect} from 'react';
import Contact from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import AuthContext from '../../context/auth/authContext'

const Home = () => {
    const authContext = useContext(AuthContext);
    useEffect(() => {
        authContext.loadUser();
    },[])

    return (
        <div>
            <h1>Home</h1>
            <div className="row">
            <ContactForm />
            <Contact />
            </div>
        </div>
    )
}



export default Home;