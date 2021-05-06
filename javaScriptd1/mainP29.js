function showAlert() {
    thisH1.innerHTML = "按完後顯示的內容"
}


let thisButtom = document.getElementsByTagName("button")[0];
let thisH1 = document.getElementsByTagName("h1")[0];
// 使用document就能直接由瀏覽器完成存取網站的動作


thisButtom.onclick = function () {
  
  
    for(let i=0;i<10;i++){
        if(i==3){
            break;
        }
        console.log(i);
    };
};




