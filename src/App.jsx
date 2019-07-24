import React from "react";
import "./App.css";
import SheetJSApp from "./services/sheetjs/sheetJSApp";
import { Doughnut, Bar, Line, Radar, Pie } from "react-chartjs-2";
import { labelData, label2N } from "./fixtures/data";

function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <SheetJSApp />
                </div>
                <div className="row" />
                <div className="col-sm-6">
                    <Doughnut
                        data={labelData}
                        options={{ maintainAspectRatio: false }}
                    />
                </div>
                <div className="col-sm-6">
                    <Radar
                        data={label2N}
                        options={{ maintainAspectRatio: false }}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
