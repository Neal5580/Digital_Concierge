import React, { Component } from "react";
import Header from "../layout/Header";
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
        header: Header,
        main: Tablet
    },
    {
        path: "/tablet/home",
        sidebar: Sidebar,
        header: Header,
        main: Tablet
    },
    {
        path: "/tablet/list",
        sidebar: Sidebar,
        header: Header,
        main: TabletList
    },
    {
        path: "/touchscreen",
        exact: true,
        sidebar: Sidebar,
        header: Header,
        main: Touchscreen
    }
];

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    {routes.map((route, index) => (
                        <PrivateRoute
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.header}
                        />
                    ))}
                </div>
                <div
                    style={{
                        paddingTop: "80px "
                    }}
                >
                    {routes.map((route, index) => (
                        <PrivateRoute
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.sidebar}
                        />
                    ))}
                </div>
                <div>
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
