import React from "react";
import "./App.css";
import SheetJSApp from "./services/sheetjs/sheetJSApp";
import { Doughnut, Bar, Line, Radar, Pie } from "react-chartjs-2";
import { labelData, label2N } from "./fixtures/data";
import { config } from "./services/plot/config";

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
                {this.renderPlot()}
            </React.Fragment>
        );
    }
    // TODO this logic needs to be another module in services/plot
    renderPlot() {
        const { cols, data } = this.state;
        if (data.length > 0) {
            return (
                <div className="row">
                    <div className="col-md-6">
                        <Doughnut data={config(cols, data)} />
                    </div>
                    <div className="col-md-6">
                        <Radar data={config(cols, data)} />
                    </div>
                </div>
            );
        }
    }
}

export default App;
