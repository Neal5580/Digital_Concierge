import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import { Login } from "./auth/Login";
import { Welcome } from "./home/Welcome";
import { isLoggedIn, logout } from "../auth/auth";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { loggedIn: isLoggedIn() };
    }

    handleLogin() {
        this.setState({ loggedIn: true });
        this.router.history.push("/welcome");
    }

    handleLogout() {
        logout();
        this.setState({ loggedIn: false });
        this.router.history.push("/login");
    }

    componentDidMount() {
        fetch("http://localhost:3000/")
            .then(response => response.json())
            .then(data => console.log(data));
    }

    render() {
        return (
            <Router ref={router => (this.router = router)}>
                <div>
                    <section>
                        <div>
                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    render={() => (
                                        <Login
                                            onLogin={this.handleLogin.bind(
                                                this
                                            )}
                                        />
                                    )}
                                />

                                <Route
                                    path="/login"
                                    render={() => (
                                        <Login
                                            onLogin={this.handleLogin.bind(
                                                this
                                            )}
                                        />
                                    )}
                                />
                                <PrivateRoute
                                    path="/welcome"
                                    component={Welcome}
                                />
                            </Switch>
                        </div>
                    </section>
                </div>
            </Router>
        );
    }
}

export default App;

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                isLoggedIn() ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
}
