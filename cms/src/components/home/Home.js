import React, { Component } from "react";
import Menu from "../layout/Menu";
import Sidebar from "../layout/Sidebar";
import Tablet from "./Tablet";
import TabletList from "./TabletList";
import PrivateRoute from "../auth/PrivateRoute";

import { Route, Switch, Redirect } from "react-router-dom";
class Home extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Sidebar />
                <Switch>
                    <PrivateRoute path="/tablet/list" component={TabletList} />
                    <PrivateRoute path="/tablet/home" component={Tablet} />
                </Switch>
            </div>
        );
    }
}

export default Home;
