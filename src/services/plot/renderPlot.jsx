import React from "react";
import * as Plot from "react-chartjs-2";
import { getConfig } from "./configPlot";

export function renderPlot(state) {
    const { cols, data } = state;
    const plots = [
        Plot.Doughnut,
        Plot.Pie,
        Plot.Radar,
        Plot.Bar,
        Plot.HorizontalBar,
        Plot.Line,
        Plot.Polar,
        Plot.Bubble,
        Plot.Scatter
    ];
    if (data.length > 0) {
        return plots.map((plot, i) =>
            React.createElement(
                "div",
                { className: "col-md" },
                React.createElement(plot, {
                    key: i,
                    data: getConfig(cols)
                })
            )
        );
    }
}
