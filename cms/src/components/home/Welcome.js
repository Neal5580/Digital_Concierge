import React, { Component } from "react";
import { Query } from "react-apollo";
import { getCurrentUserQuery } from "../../data/query";

export class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>WELCOME</h1>
                <Query query={getCurrentUserQuery} /*fetchPolicy="no-cache"*/>
                    {({ loading, error, data }) => {
                        if (loading) return "loading...";
                        if (error) return `Error! ${error.message}`;

                        const { user } = data;
                        return (
                            <div>
                                <h3>{user.name}</h3>
                                <p>Touchscreen OR Tablet</p>
                            </div>
                        );
                    }}
                </Query>
            </div>
        );
    }
}
