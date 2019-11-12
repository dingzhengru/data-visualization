# 資料視覺化(Data Visualization)
*  <a href="#d3js">d3.js</a>
   > <a href="#get-started">Get started</a>
*  <a href="#top-vuejs-chart-components">Top Vue.js Chart Components</a>
## d3.js

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


## Top Vue.js Chart Components
來源: https://madewithvuejs.com/blog/top-vue-js-chart-components
