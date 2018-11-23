import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
    componentDidMount() {
        fetch("http://localhost:3000/")
            .then(response => response.json())
            .then(data => console.log(data));
    }

    render() {
        return (
            <Router ref={router => (this.router = router)} basename={"tablet"}>
                <div>
                    123
                    <section>
                        <div>
                            <Route
                                path="/"
                                render={() => <h1>TABLET HOME PAGE 123</h1>}
                            />
                        </div>
                    </section>
                </div>
            </Router>
        );
    }
}

export default App;
