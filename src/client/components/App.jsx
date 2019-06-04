import React, { Component } from "react";

//Components
import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: new Date().getFullYear()
        };
    }
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <Content />
                </div>
                <Footer year={this.state.year} />
            </div>
        );
    }
}
export default App;
