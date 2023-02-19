const wheel = document.getElementById('wheel');
const spinButton = document.getElementById('spin-button');
const finalValue = document.getElementById('final-value');

// Here is an object that stores values of minimum and maximum angle for a value
const rotationValues = [
    { minDegree: 0, maxDegree: 30, value: 'yes' },
    { minDegree: 31, maxDegree: 90, value: 'no' },
    { minDegree: 91, maxDegree: 150, value: 'yes' },
    { minDegree: 151, maxDegree: 210, value: 'no' },
    { minDegree: 211, maxDegree: 270, value: 'yes' },
    { minDegree: 271, maxDegree: 330, value: 'no' },
    { minDegree: 331, maxDegree: 360, value: 'yes' },
];

// Size of each piece
const data = [16, 16, 16, 16, 16, 16];

// Background color for each piece

var pieColors = ['#8b35bc', '#b163da', '#8b35bc', '#b163da', '#8b35bc', '#b163da'];

// Create chart
let myChart = new Chart(wheel, {
    // Plugin for displaying text on pie chart
    plugins: [ChartDataLabels],
    // Chart Type Pie
    type: 'pie',
    data: {
        // Labels (values which are to be displayed on chart)
        labels: ['yes', 'no', 'yes', 'no', 'yes', 'no'],
        // Settings for dataset/pie
        datasets: [
            {
                backgroundColor: pieColors,
                data: data,
            }
        ],
    },
    options: {
        // Responsive chart
        responsive: true,
        animation: { duration: 0 },
        plugins: {
            //hide tooltip and legend
            tooltip: false,
            legend: {
                display: false,
            },
            //display labels inside pie chart
            datalabels: {
                color: "#ffffff",
                formatter: (_, context) => context.chart.data.labels[context.dataIndex],
                font: { size: 16 },
            },
        },
    },
});

