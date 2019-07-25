import React from "react";
import { Doughnut, Bar, Line, Radar, Pie } from "react-chartjs-2";
import { config } from "./configPlot";

export function renderPlot(state) {
    const { cols, data } = state;
    const plots = [Doughnut, Radar, Bar, Line, Pie];
    if (data.length > 0) {
        return plots.map((plot, i) =>
            React.createElement(
                "div",
                { className: "col-md" },
                React.createElement(plot, {
                    key: i,
                    data: config(cols, data)
                })
            )
        );
    }
}
