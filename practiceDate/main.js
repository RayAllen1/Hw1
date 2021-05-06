let thisH1 = document.getElementsByTagName("h1")[0];
// let currentime = new Date();
// thisH1.innerHTML = currentime.toLocaleTimeString();

let timer = setInterval(showTime,1000)

// innerHTML 屬性 拿到文字節點
// toLocaleTimeString() 方法 拿到當地時間
function showTime(){
    let currentime = new Date();
// 用newDate() 才有不斷執行的效果

    thisH1.innerHTML = currentime.toLocaleTimeString();
// 把需要不斷更新的內容包進function裡面
// 但current time已經被訂死了 同時也要把currenttime拉進來
}
// 需要重複執行的內容 包成一個function