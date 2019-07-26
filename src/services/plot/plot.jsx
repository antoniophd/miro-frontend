import React from "react";
import * as Plot from "react-chartjs-2";

export function renderPlot(cols) {
    if (cols.length > 0) {
        return getPlots().map((plot, i) =>
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

export function getConfig(cols) {
    let config = {};
    let values;

    config.datasets = [];
    values = cols.filter(o => o.type === "s");
    if (values) config.labels = values[0].data.slice(1);
    values = cols.filter(o => o.type === "n");
    values.forEach(sequence =>
        config.datasets.push({
            label: sequence.data[0],
            data: sequence.data.slice(1)
        })
    );

    return config;
}

function getPlots() {
    return [
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
}
