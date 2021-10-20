import React from 'react';
import './contact.css';

const ContactInfo = ({ contact }) => {
    return (
        <div className="contacts">
            <h1>Name:{contact?.name}</h1>
            <h2>Contact Info:{contact?.Phone}</h2>
        </div>
    );
};

export default ContactInfo;