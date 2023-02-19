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
// ad9bf1 yes
// c8bbf6 no
var pieColors = ['#EEEAFD', '#c8bbf6', '#EEEAFD', '#c8bbf6', '#EEEAFD', '#c8bbf6'];

// Create chart
let myChart = new Chart(wheel, {
    // Plugin for displaying text on pie chart
    plugins: [ChartDataLabels],
    // Chart Type Pie
    type: 'pie',
    data: {
        // Labels (values which are to be displayed on chart)
        labels: ['no', 'yes', 'no', 'yes', 'no', 'yes'],
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
                color: "#6b48f2",
                formatter: (_, context) => context.chart.data.labels[context.dataIndex],
                font: { size: 16 },
            },
        },
    },
});


// Display value based on the randomAngle
const valueGenerator = (angleValue) => {
    for (let i of rotationValues) {
        //if the angleValue is between min and max then display it
        if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
            finalValue.innerHTML = `<p>Value: ${i.value}</p>`;
            spinButton.disabled = false;
            break;
        }
    }
};

// Spinner count
let count = 0;
// 100 rotations for animation and last rotation for result
let resultValue = 101;

// Start spinning
spinButton.addEventListener('click', () => {
    spinButton.disabled = true;
    // Empty final value
    finalValue.innerHTML = `<p>Good Luck!</p>`;
    // Generate random degrees to stop at
    let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
    // Interval for rotation animation
    let rotationInterval = window.setInterval(() => {
        // Set rotation for piechart
        /*
        Initially to make the piechart rotate faster we set resultValue to 101 so it rotates 101 degrees at a time and this reduces by 1 with every count. Eventually on last rotation we rotate by 1 degree at a time.
        */
        myChart.options.rotation = myChart.options.rotation + resultValue;
        // Update chart with new value
        myChart.update();
        // If rotation > 360 reset it back to 0
        if (myChart.options.rotation >= 360) {
            count += 1;
            resultValue -= 5;
            myChart.options.rotation = 0;
        }
        else if (count > 15 && myChart.options.rotation == randomDegree) {
            valueGenerator(randomDegree);
            clearInterval(rotationInterval);
            count = 0;
            resultValue = 101;
        }
    }, 10);
});