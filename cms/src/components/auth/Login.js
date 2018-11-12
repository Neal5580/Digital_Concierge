import React, { Component } from "react";
import { login } from "../../auth/auth";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "", error: false };
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleClick(event) {
        event.preventDefault();
        const { email, password } = this.state;
        login(email, password).then(ok => {
            if (ok) {
                this.props.onLogin();
            } else {
                this.setState({ error: true });
            }
        });
    }

    render() {
        const { email, password, error } = this.state;
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    justifyContent: "center",
                    alignItems: "stretch",
                    alignContent: "stretch",
                    width: "100vw",
                    height: "100vh"
                }}
            >
                <div
                    style={{
                        backgroundColor: "green",
                        width: "60vw"
                    }}
                >
                    PLACEHOLDER
                </div>
                <div
                    style={{
                        backgroundColor: "red",
                        width: "40vw"
                    }}
                >
                    <form>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "nowrap",
                                justifyContent: "center",
                                alignItems: "center",
                                alignContent: "center",
                                width: "100%",
                                height: "100vh"
                            }}
                        >
                            {/*<div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        name="email"
                                        value={email}
                                        onChange={this.handleChange.bind(this)}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={this.handleChange.bind(this)}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <p className="help is-danger">
                                    {error && "Invalid credentials"}
                                </p>
                                <div className="control">
                                    <button
                                        className="button is-link"
                                        onClick={this.handleClick.bind(this)}
                                    >
                                        Login
                                    </button>
                                </div>
                            </div>*/}
                            <div
                                style={{
                                    backgroundColor: "white",
                                    width: "50%",
                                    textAlign: "center"
                                }}
                            >
                                LOGO PLACEHOLDER
                            </div>

                            <div
                                style={{
                                    backgroundColor: "white",
                                    width: "50%"
                                }}
                            >
                                <TextField
                                    id="standard-name"
                                    label="Username"
                                    margin="normal"
                                    fullWidth={true}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>
                            <div
                                style={{
                                    backgroundColor: "white",
                                    width: "50%"
                                }}
                            >
                                <TextField
                                    id="standard-password-input"
                                    label="Password"
                                    type="password"
                                    margin="normal"
                                    fullWidth={true}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>
                            <div
                                style={{
                                    backgroundColor: "white",
                                    width: "50%"
                                }}
                            >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    style={{ width: "100%", color: "white" }}
                                    onClick={this.handleClick.bind(this)}
                                >
                                    Login
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
