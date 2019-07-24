import React from "react";
import "./App.css";
import SheetJSApp from "./services/sheetjs/sheetJSApp";
import { Doughnut, Bar, Line, Radar, Pie } from "react-chartjs-2";
import { labelData, label2N } from "./fixtures/data";
import { transpose } from "./utils/transformer";

class App extends React.Component {
    state = {
        data: [],
        cols: []
    };
    handleLoadFile = data => {
        console.log(transpose(data));
    };
    render() {
        return (
            <div className="container">
                <SheetJSApp
                    data={this.state.data}
                    onLoadFile={this.handleLoadFile}
                />
                <div className="row">
                    <div className="col-md-6">
                        <Doughnut data={labelData} />
                    </div>
                    <div className="col-md-6">
                        <Radar data={label2N} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
