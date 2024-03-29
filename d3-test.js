let d3Data = [30, 86, 150, 300]

// select: 選取一個物件 = document.querySelector()
// selectAll: 選取在select下要視覺化的所有物件
// data: 要視覺化的資料
// enter: 找到「沒有物件可配對的資料」
// append: 設定每筆資料的標籤
// style: 設定style (下面設置 { width: xxpx; })
// text: 設定顯示內容(標籤內文字)
// exit: 找到「沒有資料可配對的物件」
// remove: 刪除exit找到的物件

d3.select('#d3-div')
  .selectAll('div')
  .data(d3Data)
    .enter()
    .append('div')
    .style("width", function(d) { return d + 30 + "px"; })
    .text(function(d) { return `$ ${d}`; })
    .exit()
    .remove();