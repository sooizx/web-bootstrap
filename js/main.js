// 文件 準備完成 執行 () 內的東西
// 自訂方法：function 方法名稱() {  }
// 匿名方法：function () { }
// JS API 彈出訊息：alert ("訊息");
$(document).ready(function () {

  // 回到頂部
  $('#back-to-top').click(function (e) {
    // 找到 html, body 執行動畫 ({動畫屬性: 值}, 時間);
    $('html, body').animate({ scrollTop: 0 }, 1000);
  });
  // 視窗 - window
  // 捲動 - scroll()
  $(window).scroll(function () {
    // 輸出訊息至控制台
    // console.log('捲動中~');
    // scrollTop() 元素的上方位置
    // console.log($(window).scrollTop());

    // 如果 螢幕高度 >= 200 就顯示按鈕
    // 否則 就隱藏按鈕
    if ($(window).scrollTop() >= 350) {

      $('#back-to-top').fadeIn(800);
    } else {

      $('#back-to-top').fadeOut(800);
    }
  });

});