
// window.onload = function countLetters() {
//     document.onclick = function (e) {
//         console.log(e);
//         alert(e.target.innerHTML + "有" + e.target.innerHTML.length + "個字元")
//     }

// };

// let confirmAnswer = confirm("確定取消此服務?");
// console.log(confirmAnswer);

// let thisH1 = document.getElementsByTagName("h1")[1];
// if(confirmAnswer){
//     thisH1.innerHTML = "服務取消"
// }else{
//     thisH1.innerHTML = "服務執行"
// }

let promptAnswer = prompt("小明家有三個小孩:張一，張二，第三位為?","張三嗎?")
let thisH1 = document.getElementById("Response");

switch(promptAnswer){
    case "張三" :
        thisH1.innerHTML = "那小明是誰";
        break;
        
    case "小明" :
        thisH1.innerHTML = "正確";
        break;

    default :
        thisH1.innerHTML = "那小明是誰";
    }

