import React, { Component } from "react";
import { Query } from "react-apollo";
import { getCurrentUserQuery } from "../../data/query";
import { Link } from "react-router-dom";
import Header from "../layout/Header";

class Welcome extends Component {
    render() {
        return (
            <Query query={getCurrentUserQuery} /*fetchPolicy="no-cache"*/>
                {({ loading, error, data }) => {
                    if (loading) return "loading...";
                    if (error) return `Error! ${error.message}`;
                    console.log(data);

                    const { getCurrentUser: user } = data;
                    return (
                        <div>
                            <Header user={user} />
                            <div style={{ paddingTop: "80px" }}>
                                <h1>WELCOME</h1>
                                <div>
                                    <h3>{user.name}</h3>

                                    <p>
                                        <Link to="/touchscreen">
                                            Touchscreen
                                        </Link>
                                        OR
                                        <Link to="/tablet">Tablet</Link>
                                    </p>
                                </div>{" "}
                            </div>
                        </div>
                    );
                }}
            </Query>
        );
    }
}

export default Welcome;
