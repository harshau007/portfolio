import React from 'react'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I'm
                    <span>
                    <Typical 
                        loop={1}
                        wrapper="b"
                        steps={[
                            ' Harsh Upadhyay',
                            1000,
                        ]}
                    />
                    </span>
                </h1>
                <p className="h-sub-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquid, corrupti dignissimos dolore minus earum vero eos. Aspernatur, vero illum.
                </p>
                <div className="icons">
                    <Link className="icon-holder" to={{ pathname: "https://github.com/harshau007" }} target="_blank">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link>
                    <Link className="icon-holder" to={{ pathname: "https://github.com/harshau007" }} target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link className="icon-holder" to={{ pathname: "https://github.com/harshau007" }} target="_blank">
                        <FontAwesomeIcon icon={faTwitter} className="icon tt" />
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
