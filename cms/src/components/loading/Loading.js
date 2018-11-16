import React from "react";
import "./Loading.css";
import { DotLoader } from "react-spinners";
import { COLOR_JBG_PURPLE } from "../../utils/Constants";

class loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }
    render() {
        return (
            <div>
                <div className="loading_container">
                    <div className="sweet-loading">
                        <DotLoader
                            sizeUnit={"px"}
                            size={150}
                            color={COLOR_JBG_PURPLE}
                            loading={this.state.loading}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default loading;
