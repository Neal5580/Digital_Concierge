import React, { Component } from "react";
import { Query } from "react-apollo";
import { getCurrentUserQuery } from "../../data/query";
import { Link } from "react-router-dom";
import Header from "../layout/Header";
import { COLOR_JBG_PURPLE } from "../../utils/Constants";
import "./Welcome.css";
import Button from "@material-ui/core/Button";
import { isEmpty } from "lodash";

class Welcome extends Component {
    render() {
        const SELECT_FONT_STYLE = {
            textAlign: "center",
            fontSize: "1.5em",
            height: "50px",
            lineHeight: "50px",
            fontWeight: "bold",
            color: COLOR_JBG_PURPLE
        };
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
                            <div
                                style={{
                                    paddingTop: "80px ",
                                    width: "100vw",
                                    height: "100vh",
                                    position: "relative",
                                    backgroundColor: "rgb(247,247,247)"
                                }}
                            >
                                <div
                                    style={{
                                        margin: "auto",
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)"
                                    }}
                                >
                                    <p
                                        style={{
                                            color: COLOR_JBG_PURPLE,
                                            textAlign: "center",
                                            textTransform: "uppercase",
                                            fontSize: "1.8em",
                                            fontWeight: "bold"
                                        }}
                                    >
                                        PLEASE SELECT WHICH PLATFORM TO EDIT
                                    </p>

                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            flexWrap: "nowrap",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            alignContent: "center"
                                        }}
                                    >
                                        {!isEmpty(user) &&
                                            user.venue.has_tablet && (
                                                <Link
                                                    to="/tablet"
                                                    style={{
                                                        textDecoration: "none",
                                                        margin: "10px",
                                                        backgroundColor: "white"
                                                    }}
                                                >
                                                    <div className="welcome_page_selection_image_container">
                                                        <img
                                                            className="welcome_page_selection_image_container_image"
                                                            src="https://s3-ap-southeast-2.amazonaws.com/digitalconcierge/cms_assets/welcome_page_tablet_small.png"
                                                            alt="welcome_page_tablet_small"
                                                        />
                                                        <div className="welcome_page_selection_image_container_middle">
                                                            <Button
                                                                variant="contained"
                                                                type="submit"
                                                                color="primary"
                                                                style={{
                                                                    width:
                                                                        "200px",
                                                                    color:
                                                                        "white",
                                                                    fontSize:
                                                                        "1.3em",
                                                                    backgroundColor: COLOR_JBG_PURPLE
                                                                }}
                                                            >
                                                                EDIT
                                                            </Button>
                                                        </div>
                                                    </div>
                                                    <p
                                                        style={
                                                            SELECT_FONT_STYLE
                                                        }
                                                    >
                                                        DIGITAL COMPENDIUM
                                                    </p>
                                                </Link>
                                            )}

                                        {!isEmpty(user) &&
                                            user.venue.has_touchscreen && (
                                                <Link
                                                    to="/touchscreen"
                                                    style={{
                                                        textDecoration: "none",
                                                        margin: "10px",
                                                        backgroundColor: "white"
                                                    }}
                                                >
                                                    <div className="welcome_page_selection_image_container">
                                                        <img
                                                            className="welcome_page_selection_image_container_image"
                                                            src="https://s3-ap-southeast-2.amazonaws.com/digitalconcierge/cms_assets/welcome_page_touchscreen_small.png"
                                                            alt="welcome_page_tablet_small"
                                                        />
                                                        <div className="welcome_page_selection_image_container_middle">
                                                            <Button
                                                                variant="contained"
                                                                type="submit"
                                                                color="primary"
                                                                style={{
                                                                    width:
                                                                        "200px",
                                                                    color:
                                                                        "white",
                                                                    fontSize:
                                                                        "1.3em",
                                                                    backgroundColor: COLOR_JBG_PURPLE
                                                                }}
                                                            >
                                                                EDIT
                                                            </Button>
                                                        </div>
                                                    </div>
                                                    <p
                                                        style={
                                                            SELECT_FONT_STYLE
                                                        }
                                                    >
                                                        DIGITAL CONCIERGE
                                                    </p>
                                                </Link>
                                            )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </Query>
        );
    }
}

export default Welcome;
