import React from 'react';
import Separator from '../../common/separator';
import SocialContact from '../../common/social-contacts';
import "./contact.css";


function Contact() {
    return (
        <div className="contact"> 
            <Separator />
            <label className="section-title">Contact</label>
            <div className="contact-container">
            <div className=" contact-left">
            <p>If you like my work why not get in touch</p>
            <SocialContact />
        </div>
        <div className>

        </div>
    </div>
</div>
)
    
}

export default Contact;
