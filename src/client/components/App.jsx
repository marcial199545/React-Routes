import React, { Component } from "react";
import Proptypes from "prop-types";

//Components
import Header from "./global/Header.jsx";
import Content from "./global/Content.jsx";
import Footer from "./global/Footer.jsx";
// Data
import items from "../../data/menu.js";

import "../../styles/App.css";

class App extends Component {
    static propTypes = {
        children: Proptypes.object.isRequired
    };
    constructor(props) {
        super(props);
        this.state = {
            year: new Date().getFullYear()
        };
    }
    render() {
        const { children } = this.props;
        return (
            <div>
                <Header items={items} />
                <div className="container">
                    <Content body={children} />
                </div>
                <Footer copyright="&copy;" year={this.state.year} />
            </div>
        );
    }
}
export default App;
