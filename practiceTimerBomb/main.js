let timer = document.getElementById("timer");
let useInput = document.getElementById("userInput");
let hint = document.getElementById("hint");
let button = document.getElementsByTagName("button")[0];
let count = 10;

timer.innerHTML = count;
button.addEventListener("clink", checkPassWord);
let myVar = setInterval(mytimer, 1000);

function mytimer(){
    count--;
    timer.innerHTML = count;
    
    if(count==0){
        hint.innerHTML = "Game Over"
        clearInterval(myVar)
    }
}

function checkPassWord(){
    hint.innerHTML="";
    if(pareInt(useInput.value)=1234){
        alert("You got it");
        clearInterval(myVar);
    }else{
        hint.innerHTML= "Try again";
    }
    userInput.value = null;   
}