let thisH1 = document.getElementsByTagName("h1")[0];


function showAlert(){
    alert(typeof(thisH1.innerHTML.split(" ")))
}
thisH1.addEventListener("click",showAlert)
