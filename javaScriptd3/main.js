$(function(){
    $("input").on("click",function(){
        // alert("hi")
        // $("h1").text("hello");
        
        // $("h1").text($("li:first").text());
        
        // $("h1").text($("li").eq(1).text());
        
        var numberOfListItem = $("li").length;
        // 先找出有幾個li
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        // 產生對應的亂數範圍，再來使用這個亂數
        $("h1").text($("li").eq(randomChildNumber).text());
        // text用於文本內容

        // (1)找到img元件
        // (2)設定img元件之src屬性 => 對應元件的title值
        $("img").attr("src",$("li").eq(randomChildNumber).attr("title"));
        // attr("屬姓名", 值)
        // 設定了html中，img的屬性為這個連結

        // $("li").eq(randomChildNumber).attr("title") 代表取得
        // $("img").attr("src",$("li").eq(randomChildNumber).attr("title")); 代表設定

        // $("li").eq(randomChildNumber).text() 取得
        // $("h1").text($("li").eq(randomChildNumber).text()); 設定
    });
});