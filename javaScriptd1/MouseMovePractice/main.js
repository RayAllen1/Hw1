let thisH1 = document.getElementsByTagName("h1")[0];
let thisP = document.getElementsByTagName("p")[0];
let thisDiv = document.getElementsByTagName("div")[0];

function mouseIn(){
    thisH1.innerHTML = "游標進入"
}

function mouseOut(){
    thisH1.innerHTML = "游標出去"
    thisP.innerHTML = ""
}

function mouseMove(e){
    thisP.innerHTML = "你在裡面走來走去。位置:" + e.clientX + "," +e.clientY;
    console.log(e);
    // 可以去看這包東西有什麼特性 來使用
}

thisDiv.addEventListener("mouseover", mouseIn);
thisDiv.addEventListener("mouseout", mouseOut);
thisDiv.addEventListener("mousemove", mouseMove);

// 有e 是因為想知道傳入的x y 座標