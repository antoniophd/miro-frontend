export function config(data) {
    // TODO it needs to distinguish between C, N, D
    return {
        labels: data[0].slice(1),
        datasets: [
            {
                label: data[1][0],
                data: data[1].slice(1)
            },
            {
                label: data[2][0],
                data: data[2].slice(1)
            }
        ]
    };
}
