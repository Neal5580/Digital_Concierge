import React, { Component } from "react";
import { Link } from "react-router-dom";

class Tablet extends Component {
    render() {
        return (
            <div>
                <h1>Tablet</h1>
                <Link to="/tablet/list">List</Link>
            </div>
        );
    }
}

export default Tablet;
