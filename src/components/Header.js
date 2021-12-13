import React from 'react';
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Welcome to my website</h1>
                <Typed
                    className="typed-text"
                    strings={["Full Stack Web Developer", "Frontend Web Developer", "UI/UX Designer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <button type="button" className="btn btn-outline-danger my-3">Contact Me</button>
            </div>
        </div>
    )
}

export default Header
