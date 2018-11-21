import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Tablet from "./Tablet";
class App extends Component {
    componentDidMount() {
        fetch("http://localhost:3000/")
            .then(response => response.json())
            .then(data => console.log(data));
    }

    render() {
        console.log("123");
        return (
            <Router basename={"tablet"}>
                <Route path="/" component={Tablet} />
            </Router>
        );
    }
}

export default App;
