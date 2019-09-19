// 文件 準備完成 執行 () 內的東西
// 自訂方法：function 方法名稱() {  }
// 匿名方法：function () { }
// JS API 彈出訊息：alert ("訊息");
$(document).ready(function(){
  
  // 回到頂部
      $('#back-to-top').click(function (e) { 
  // 找到 html, body 執行動畫 ({動畫屬性: 值}, 時間);
        $('html, body').animate({scrollTop: 0}, 1000);
      });
      $(window).scroll(function () { 
        console.log('捲動中')
        
      });
  });