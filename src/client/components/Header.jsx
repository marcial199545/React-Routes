import React from "react";
import "../../styles/App.css";

function Header() {
    return (
        <div>
            <header>
                <nav className="navbar fixed-top navbar-light bg-light">
                    <a className="nav-link" href="/">
                        home
                    </a>
                </nav>
            </header>
        </div>
    );
}

export default Header;
