import React from "react";

const Footer = props => {
    return (
        <div>
            <nav className="navbar fixed-bottom navbar-light bg-light">
                <p className="navbar-brand">Copy-right {props.year}</p>
            </nav>
        </div>
    );
};
export default Footer;
