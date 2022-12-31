import React from 'react';
import aboutImage from "../../../static/assets/images/dana-white.jpg";

export default function() {
    return (
        <div className='about-page-wrapper'>
            <h1>About</h1>
            <h2>I've done countless Kustom shoes, and even for some celebrity customers. You can bring your own design or I can help you create a design. I can help find some rare shoes for you as well. All within my area of expertise.</h2>
            <div className='about-image'>
                <img src= {aboutImage} alt="about image" />
            </div>
            <h2>With Dana White (middle)</h2>
        </div>
    );
}
