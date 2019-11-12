let apexOptions = {
  chart: {
    type: 'line'
  },
  series: [{
    name: 'sales',
    data: [30,40,35,50,49,60,70,91,125]
  }],
  xaxis: {
    categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
  }
}

let apexChartDiv = document.querySelector("#apex-chart-div");
let apexChart = new ApexCharts(apexChartDiv, apexOptions);

let apexOptions2 = {
  chart: {
    type: 'candlestick'
  },
  series: [{
  data: [
      [1538856000000, [6593.34, 6600, 6582.63, 6600]], 
      [1538856900000, [6595.16, 6604.76, 6590.73, 6593.86]]
    ]
  }]
}
let apexChartDiv2 = document.querySelector("#apex-chart-div2");
let apexChart2 = new ApexCharts(apexChartDiv2, apexOptions2);

apexChart.render();
apexChart2.render();