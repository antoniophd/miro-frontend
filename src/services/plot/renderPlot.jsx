import React from "react";
import {
    Bar,
    Bubble,
    Doughnut,
    HorizontalBar,
    Line,
    Pie,
    Polar,
    Radar,
    Scatter
} from "react-chartjs-2";
import { config } from "./configPlot";

export function renderPlot(state) {
    const { cols, data } = state;
    const plots = [
        Doughnut,
        Pie,
        Radar,
        Bar,
        HorizontalBar,
        Line,
        Polar,
        Bubble,
        Scatter
    ];
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
