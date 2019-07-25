import { transpose } from "../../utils/transformer";

export function config(cols, data) {
    // TODO to refactor it
    var config = {
        datasets: []
    };
    data = transpose(data);
    let hasCat = cols.find(o => o.type === "s");
    if (hasCat) {
        config.labels = data.find(obj => obj[0] === hasCat.header).slice(1);
    }
    let hasNums = cols.filter(o => o.type === "n");
    hasNums.forEach(hasNum => {
        const sequences = data.filter(obj => obj[0] === hasNum.header);
        sequences.forEach(sequence =>
            config.datasets.push({
                label: sequence[0],
                data: sequence.slice(1)
            })
        );
    });
    return config;
}
