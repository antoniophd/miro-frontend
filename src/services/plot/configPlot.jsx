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
