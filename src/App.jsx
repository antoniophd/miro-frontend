import React from "react";
import "./App.css";
import SheetJSApp from "./services/sheetjs/sheetJSApp";
import { Doughnut, Bar, Line, Radar, Pie } from "react-chartjs-2";
import { labelData, label2N } from "./fixtures/data";
import { transpose } from "./utils/transformer";
import { config } from "./services/plot/config";

class App extends React.Component {
    state = {
        data: [],
        cols: []
    };
    handleLoadFile = data => {
        this.setState({ data: data });
    };

    render() {
        return (
            <React.Fragment>
                <SheetJSApp
                    data={this.state.data}
                    onLoadFile={this.handleLoadFile}
                />
                <div className="row">
                    <div className="col-md-6">
                        <Doughnut data={labelData} />
                    </div>
                    <div className="col-md-6">{this.renderPlot()}</div>
                </div>
            </React.Fragment>
        );
    }

    renderPlot() {
        const { data } = this.state;
        if (data.length > 0) {
            return <Radar data={config(transpose(data))} />;
        }
    }
}

export default App;
