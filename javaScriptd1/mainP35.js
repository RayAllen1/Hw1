function showAlert() {
    thisH1.innerHTML = "按完後顯示的內容"
}


let thisButtom = document.getElementsByTagName("button")[0];
let thisH1 = document.getElementsByTagName("h1")[0];

thisButtom.addEventListener("click",showAlert);
// 監聽該元件，是否有此事件發生