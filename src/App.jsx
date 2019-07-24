import React from "react";
import "./App.css";
import SheetJSApp from "./services/sheetjs/sheetJSApp";
import { Doughnut, Bar, Line, Radar, Pie } from "react-chartjs-2";
import { labelData, label2N } from "./fixtures/data";

function App() {
    return (
        <div className="container">
            <SheetJSApp />
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

export default App;
