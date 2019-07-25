import React from "react";
import "./App.css";
import SheetJSApp from "./services/sheetjs/sheetJSApp";
import { Doughnut, Bar, Line, Radar, Pie } from "react-chartjs-2";
import { config } from "./services/plot/configPlot";

class App extends React.Component {
    state = {
        data: [],
        cols: []
    };
    handleLoadFile = state => {
        this.setState(state);
    };

    render() {
        return (
            <React.Fragment>
                <SheetJSApp
                    data={this.state.data}
                    onLoadFile={this.handleLoadFile}
                />
                <div className="row">{this.renderPlot()}</div>
            </React.Fragment>
        );
    }
    // TODO this logic needs to be another module in services/plot
    renderPlot() {
        const { cols, data } = this.state;
        const plots = [Doughnut, Radar];
        if (data.length > 0) {
            return plots.map((plot, i) =>
                React.createElement(
                    "div",
                    { className: "col-md-6" },
                    React.createElement(plot, {
                        key: i,
                        data: config(cols, data)
                    })
                )
            );
        }
    }
}

export default App;
