let ctx = document.getElementById('chart-canvas1')
                  .getContext('2d');

let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['01', '02', '03', '04', '05', '06', '07'],
        datasets: [{
            label: 'Line',
            data: [0, 10, 5, 2, 20, 30, 45],
            backgroundColor: 'red',
            borderColor: 'yellow',
        }]
    },

    // Configuration options go here
    options: {}
});

let ctx2 = document.getElementById('chart-canvas2')
                   .getContext('2d');

let chart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Bar',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'red',
                'blue',
                'yellow',
                'green',
                'purple',
                'orange'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});