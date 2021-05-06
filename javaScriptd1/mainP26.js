function showAlert() {
    thisH1.innerHTML = "按完後顯示的內容"
}


let thisButtom = document.getElementsByTagName("button")[0];
let thisH1 = document.getElementsByTagName("h1")[0];
// 使用document就能直接由瀏覽器完成存取網站的動作


thisButtom.onclick = function () {
    showAlert();
    // 通常會用在很多個function要執行時
    // func1()
    // func2()
    // func3()

    // thisButtom.onclick = showAlert;
    // 單純設定一個函數名稱 要點進去才會被執行

    // thisButtom.onclick = showAlert();
    // 設定一個函數()給他 會直接執行完畢
};


