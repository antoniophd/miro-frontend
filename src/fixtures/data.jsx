export function labelData() {
    return {
        labels: ["January", "February", "March"],
        datasets: [
            {
                data: [65, 59, 80]
            }
        ]
    };
}

export function label2N() {
    return {
        labels: [
            "Eating",
            "Drinking",
            "Sleeping",
            "Designing",
            "Coding",
            "Cycling",
            "Running"
        ],
        datasets: [
            {
                label: "First dataset",
                data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
                label: "Second dataset",
                data: [28, 48, 40, 19, 96, 27, 100]
            }
        ]
    };
}
