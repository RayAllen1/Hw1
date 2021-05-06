
function countLetters() {
    document.onclick = function (i) {
        console.log(i);
        alert(i.target.innerHTML + "有" + i.target.innerHTML.length + "個字元")
    }

}


window.onload = countLetters()
