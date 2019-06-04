import React from "react";

const Footer = props => {
    const { copyright = "&copy;", year = new Date().getFullYear() } = props;
    return (
        <div>
            <nav className="navbar fixed-bottom navbar-light bg-light">
                <p className="navbar-brand">
                    {copyright} Copy-right {year}
                </p>
            </nav>
        </div>
    );
};
export default Footer;
