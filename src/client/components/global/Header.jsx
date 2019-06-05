import React from "react";
import { Link } from "react-router-dom";
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
                                    <Link className="nav-item nav-link" key={index} to={item.url}>
                                        {item.title}
                                    </Link>
                                ))}
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;
