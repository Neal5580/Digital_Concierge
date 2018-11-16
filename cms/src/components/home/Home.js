import React, { Component } from "react";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import Tablet from "../tablet/Tablet";
import TabletList from "../tablet/TabletList";
import Touchscreen from "../touchscreen/Touchscreen";
import PrivateRoute from "../auth/PrivateRoute";
import Welcome from "./Welcome.js";
import { Query } from "react-apollo";
import { getCurrentUserQuery } from "../../data/query";
import Loading from "../loading/Loading";
const routes = [
    {
        path: "/welcome",
        exact: true,
        header: Header,
        main: Welcome
    },
    {
        path: "/tablet",
        exact: true,
        sidebar: Sidebar,
        header: Header,
        main: Tablet
    },
    {
        path: "/tablet/home",
        exact: false,
        sidebar: Sidebar,
        header: Header,
        main: Tablet
    },
    {
        path: "/tablet/list",
        exact: false,
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
            <Query query={getCurrentUserQuery} /*fetchPolicy="no-cache"*/>
                {({ loading, error, data }) => {
                    if (loading) return <Loading />;
                    if (error) return `Error! ${error.message}`;
                    console.log(data);

                    return (
                        <div>
                            {routes.map(
                                (route, index) =>
                                    route.header && (
                                        <PrivateRoute
                                            key={index}
                                            path={route.path}
                                            exact={route.exact}
                                            component={route.header}
                                        />
                                    )
                            )}
                            <div
                                style={{
                                    paddingTop: "80px",
                                    backgroundColor: "red",
                                    height: "100vh",
                                    width: "100vw",
                                    display: "flex"
                                }}
                            >
                                {routes.map(
                                    (route, index) =>
                                        route.sidebar && (
                                            <PrivateRoute
                                                key={index}
                                                path={route.path}
                                                exact={route.exact}
                                                component={route.sidebar}
                                            />
                                        )
                                )}

                                {routes.map(
                                    (route, index) =>
                                        route.main && (
                                            <PrivateRoute
                                                key={index}
                                                path={route.path}
                                                exact={route.exact}
                                                component={route.main}
                                            />
                                        )
                                )}
                            </div>
                        </div>
                    );
                }}
            </Query>
        );
    }
}

export default Home;
