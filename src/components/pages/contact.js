import React from 'react';

import ContactForm from '../forms/contact-form';

export default function() {
    return (
        <div className="contact-page-wrapper">
            <div className="contact-info-wrapper">
                

                <div className="contact-info">
                    <div className="contact-paragraph">
                        <h1>Reach Out Now</h1>
                        <h2>Get your own Custom shoes or we'll help you find your perfect pair.</h2>
                    </div>
                </div>

                <div className="contact-info">
                    <div className="text">832-148-4578</div>
                </div>

                <div className="contact-info">
                    <div className="email">kloudcustoms@shoes.com</div>
                </div>

                <div className="contact-info">
                    <div className="text">Waikiki, HI</div>
                </div>

            <div className='contact-form-wrapper'>
                <ContactForm />
            </div>
            </div>

        </div>
    );
}