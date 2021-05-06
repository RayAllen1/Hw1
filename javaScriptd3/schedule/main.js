$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>內容</th><th>主題</th></tr>");
    // append 新增內容
    // coursetable 前面要加# 代表抓這個ID

    var topicCount = topic.length;
    // 計算 陣列有幾筆資料 拿到陣列的長度(個數)

    var milisecsperday = 24 * 60 * 60 * 1000;

    for(var x=0; x<topicCount; x++){
        $("#courseTable").append("<tr>");

        // $("#courseTable").append("<td>" + (x+1) + "</td>");
        // 因為x從0開始 加1才會呈現正常表格 比較正常
        $("#courseTable").append(`<td>${x+1}</td>`);
        // $("#courseTable").append(`<td>${startDate+(7*x)}</td>`);
        // 直接+7格式會跑掉 要進行格式的轉換
        $("#courseTable").append(`<td>${new Date(startDate.getTime() + (7 * milisecsperday * x)).toLocaleDateString().slice(5,9)}</td>`);
        // 可以使用slice( 5 )去切掉後面的數字
        // 可以使用slice(5, 9)去切頭切尾
        // 可以使用slice(-4)去切尾巴
        $("#courseTable").append(`<td>${topic[x]}</td>`);
        //  號碼動態產生(x) 不會壞掉 直接填入
        $("#courseTable").append(`<tr>`);

        // $("#courseTable").append(`<td>${topic+1}</td>`);
        $("#courseTable").hover(
            function(){
                $(this).addClass("enter"); // 觸發 mouseenter 事件 新增 css 
            },
            function(){
                $(this).removeClass("enter"); // 觸發 mouseleave 事件 移除 css 
            }
        );
    }
})
// 畫面準備好，執行$裡面的內容