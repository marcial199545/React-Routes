import React from "react";
import { Route, Switch } from "react-router-dom";

// components
import App from "./client/components/App";
import About from "./client/components/About/index.jsx";
import Contact from "./client/components/Contact/index.jsx";
import Home from "./client/components/Home/index.jsx";
import Page404 from "./client/components/Page404/index.jsx";

const AppRoutes = () => {
    return (
        <App>
            <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/" component={Home} />
                <Route component={Page404} />
            </Switch>
        </App>
    );
};
export default AppRoutes;
