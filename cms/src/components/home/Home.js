import React, { Component } from "react";
import Menu from "../layout/Menu";
import Sidebar from "../layout/Sidebar";
import Tablet from "../tablet/Tablet";
import TabletList from "../tablet/TabletList";
import Touchscreen from "../touchscreen/Touchscreen";

import PrivateRoute from "../auth/PrivateRoute";

const routes = [
    {
        path: "/tablet",
        exact: true,
        sidebar: Sidebar,
        menu: Menu,
        main: Tablet
    },
    {
        path: "/tablet/home",
        sidebar: Sidebar,
        menu: Menu,
        main: Tablet
    },
    {
        path: "/tablet/list",
        sidebar: Sidebar,
        menu: Menu,
        main: TabletList
    },
    {
        path: "/touchscreen",
        exact: true,
        sidebar: Sidebar,
        menu: Menu,
        main: Touchscreen
    }
];

class Home extends Component {
    render() {
        return (
            <div style={{ display: "flex" }}>
                <div style={{ flex: 1, padding: "10px" }}>
                    {routes.map((route, index) => (
                        <PrivateRoute
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.sidebar}
                        />
                    ))}
                </div>
                <div style={{ flex: 1, padding: "10px" }}>
                    {routes.map((route, index) => (
                        <PrivateRoute
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.menu}
                        />
                    ))}
                </div>
                <div style={{ flex: 1, padding: "10px" }}>
                    {routes.map((route, index) => (
                        <PrivateRoute
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.main}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Home;
