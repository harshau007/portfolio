import React from 'react';
import about from '../img/about.png';
import Resume from '../img/resume.pdf';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Harsh</span></h4>
                <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Voluptas incidunt quae dolorum esse debitis
                 aut distinctio enim magnam iste at ducimus dolore
                  consequatur unde, aliquam expedita, nostrum asperiores molestias!
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Harsh Upadhyay</p>
                        <p>: 17</p>
                        <p>: Indian</p>
                        <p>: English, Hindi, Marathi</p>
                        <p>: India, United States of America, Canada</p>
                    </div>
                </div>
                <a href={Resume} download='Harsh_Upadhyay.pdf'>
                    <button className="btn">Download Resume</button>
                </a>
            </div>
        </div>
    )
}

export default ImageSection;
