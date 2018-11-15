import React, { Component } from "react";
import { COLOR_JBG_PURPLE } from "../../utils/Constants";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

const URL_WELCOME = "/welcome";

class Header extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired
    };

    render() {
        console.log(this.props.user);
        const { user } = this.props;
        return (
            <div
                style={{
                    width: "100vw",
                    height: "80px",
                    position: "fixed",
                    top: 0,
                    backgroundColor: COLOR_JBG_PURPLE,
                    color: "white",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    alignContent: "center",
                    fontSize: "1.2em"
                }}
            >
                <div
                    style={{
                        width: "15vw",
                        marginLeft: "1.5vw"
                    }}
                >
                    {this.props.match.url === URL_WELCOME && (
                        <p style={{}}>Welcome</p>
                    )}
                </div>
                <div
                    style={{
                        width: "65vw"
                    }}
                />
                <div
                    style={{
                        width: "20vw",
                        marginRight: "1.5vw"
                    }}
                >
                    {this.props.match.url === URL_WELCOME && (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                flexWrap: "nowrap",
                                justifyContent: "flex-end",
                                alignItems: "center",
                                alignContent: "center"
                            }}
                        >
                            <div
                                style={{
                                    paddingLeft: "1vw",
                                    paddingRight: "1vw",
                                    borderLeft: "2px solid white"
                                }}
                            >
                                <p style={{}}>{user.name}</p>
                            </div>
                            <div>
                                <img
                                    style={{
                                        height: "50px"
                                    }}
                                    src={user.venue.logo}
                                    alt={`{user.name}_avatar`}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default withRouter(Header);
