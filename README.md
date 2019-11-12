# 資料視覺化(Data Visualization)
*  <a href="#d3js">d3.js</a>
   > <a href="#get-started">Get started</a>
*  <a href="chartjs">Chart.js</a>
*  <a href="apexcharts">Apexcharts</a>
*  <a href="#top-vuejs-chart-components">Top Vue.js Chart Components</a>
## d3.js
**另外還有d4(為了搭配React, Vue.js)**  
### Get started
*  select: 選取一個物件 = document.querySelector()
*  selectAll: 選取在select下要視覺化的所有物件
*  data: 要視覺化的資料
*  enter: 找到「沒有物件可配對的資料」
*  append: 設定每筆資料的標籤
*  style: 設定style (下面設置 { width: xxpx; })
*  text: 設定顯示內容(標籤內文字)
*  exit: 找到「沒有資料可配對的物件」
*  remove: 刪除exit找到的物件  
```
// js
d3.select('#d3-div')
  .selectAll('div')
  .data(d3Data)
    .enter()
    .append('div')
    .style("width", function(d) { return d + 30 + "px"; })
    .text(function(d) { return `$ ${d}`; })
    .exit()
    .remove();
```
index.html
```
<div id="d3-div"></div>
```
style.css
```
#d3-div div {
    background-color: red;
    border-bottom: solid 1px white;
}
```

## Chart.js

**有六種現成的圖表類型給你使用**  
** type: line, bar, radar, doughnut(pie), polarArea, bubble

## Top Vue.js Chart Components
來源: https://madewithvuejs.com/blog/top-vue-js-chart-components

```
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
```

## Apexcharts
*  支援Vue, React
*  type: line, pie, radar, range bar, candlestick, heat map , radialBar(circular gauge), multiple axis & scales
*  Responsive
*  Interactive
*  Dynamic
*  Smooth Animations
```
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

apexChart.render();
```