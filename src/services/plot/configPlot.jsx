import { transpose } from "../../utils/transformer";

export function getConfig(cols, data) {
    return new ConfigPlot({ cols: cols, data: data }).getConfig();
}

class ConfigPlot {
    constructor(props) {
        this.props = props;
        this.props.data = transpose(props.data);
    }
    getConfig() {
        const { cols, data } = this.props;
        // TODO Remove code repetition
        const hasCat = cols.find(col => col.type === "s"); // colByType
        const colByType = cols.filter(col => col.type === "n");
        let config = {};
        if (hasCat) {
            config.labels = data.find(obj => obj[0] === hasCat.head).slice(1);
        }
        config.datasets = [];
        colByType.forEach(hasNum => {
            const sequences = data.filter(obj => obj[0] === hasNum.head);
            sequences.forEach(sequence =>
                config.datasets.push({
                    label: sequence[0],
                    data: sequence.slice(1)
                })
            );
        });
        return config;
    }
}
