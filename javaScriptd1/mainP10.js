
// window.onload = function countLetters() {
//     document.onclick = function (e) {
//         console.log(e);
//         alert(e.target.innerHTML + "有" + e.target.innerHTML.length + "個字元")
//     }

// };

let confirmAnswer = confirm("確定取消此服務?");
console.log(confirmAnswer);

let thisH1 = document.getElementsByTagName("h1")[1];
if(confirmAnswer){
    thisH1.innerHTML = "服務取消"
}else{
    thisH1.innerHTML = "服務執行"
}


