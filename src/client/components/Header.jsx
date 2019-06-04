import React from "react";
import "../../styles/App.css";

function Header(props) {
    const { items } = props;
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse">
                        <div className="navbar-nav">
                            {items &&
                                items.map((item, index) => (
                                    <a
                                        className="nav-item nav-link"
                                        key={index}
                                        href={item.url}
                                    >
                                        {item.title}
                                    </a>
                                ))}
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;
