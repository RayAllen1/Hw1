let mapArray, ctx, currentImgMain;
let imgMountain, imgMain, imgEnemy;
// mapArray 決定地圖每個格子元素
// ctx HTML5 Canvas用
// currentImgMai決定主角的座標
// imgMountain, imgMain, imgEnemy 障礙物
const gridLength = 200;
// const 代表以後都不會再改變了 api key token等

$(function(){
    mapArray = [
        [0, 1, 1],
        [0, 0, 0],
        [3, 1, 2]
       
        // 定義一個二維矩陣
        // 0 代表可以走 1 代表障礙物 2 代表終點 3 代表敵人
    ];
    ctx = $("#myCanvas")[0].getContext("2d");
    // 所有的getelelementbyid 都不用取第0個 
    // 只有這個Canvas 要用[0]

    // getContext 找到畫面上的Canvas 
    // 並代表畫布的模式 這裡使用2D的方式

    imgMain = new Image();
    imgMain.src = "images/spriteSheet.png";
    currentImgMain={
        "x": 0,
        "y": 0
    };
    imgMain.onload = function(){
        
        // 要把上面這張圖擺放上去
        // 當瀏覽器執行這個物件時，馬上去執行他 
        
        // ctx.drawImage(imgMain,0,0)
        ctx.drawImage(imgMain, 0, 0, 80, 130, currentImgMain.x, currentImgMain.y, gridLength, gridLength)
        // 從原本圖的(0,0)位置 剪下這張圖片的 寬80 高130 放到%指定的寬度與高度
        // 把圖畫上去
    }

    imgMountain = new Image();
    imgMountain.src = "images/material.png";

    imgEnemy = new Image();
    imgEnemy.src = "images/Enemy.png";

    imgMountain.onload  = function(){
        imgEnemy.onload = function(){
            for (var x in mapArray){
                for (var y in mapArray){
                    if (mapArray[x][y]==1){
                        ctx.drawImage(imgMountain, 32, 65, 32, 32, y*gridLength, x*gridLength, gridLength, gridLength );

                    }else if(mapArray[x][y]==3){
                        ctx.drawImage(imgEnemy, 7, 40, 104, 135, y*gridLength, x*gridLength, gridLength, gridLength );
                    }

                    }
                }
            }
        }

});

$(document).on("keydown", function(event){
    // 代表整份文件的開始 on 要進行監聽
    let targetImg, targetBlock, cutImagePositionX;
    // 指定主角臉朝向哪一方
    targetImg = {
        "x" : -1,
        "y" : -1
    // 主角的目標座標
    } 

    targetBlock = {
        "x" : -1,
        "y" : -1
    }

    event.preventDefault();

    // console.log(event);

    switch(event.code){
        case "ArrowLeft":
            targetImg.x = currentImgMain.x - gridLength;
            targetImg.y = currentImgMain.y;
            cutImagePositionX = 175;
            break;
        case "ArrowUp":
            targetImg.x = currentImgMain.x;
            targetImg.y = currentImgMain.y - gridLength;
            cutImagePositionX = 355;
            break;
        case "ArrowRight":
            targetImg.x = currentImgMain.x + gridLength;
            targetImg.y = currentImgMain.y;
            cutImagePositionX = 540;
            break;
        case "ArrowDown":
            targetImg.x = currentImgMain.x;
            targetImg.y = currentImgMain.y + gridLength;
            cutImagePositionX = 0;
            break;
        default:
            return;
    }

    if(targetImg.x<=400 && targetImg.x>=0 && targetImg.y<=400 & targetImg.y>=0){
        targetBlock.x = targetImg.y / gridLength;
        targetBlock.y = targetImg.x / gridLength;
    }else{
        targetBlock.x = -1;
        targetBlock.y = -1;
    }

    ctx.clearRect(currentImgMain.x, currentImgMain.y, gridLength, gridLength);

    if(targetBlock.x!=-1 && targetBlock.y!=-1){
        switch(mapArray[targetBlock.x][targetBlock.y]){
            case 0:
                $("#talkBox").text("");
                currentImgMain.x = targetImg.x;
                currentImgMain.y = targetImg.y;
                break;
            case 1:
                $("#talkBox").text("有山");
                break;
            case 2:
                $("#talkBox").text("抵達終點");
                currentImgMain.x = targetImg.x;
                currentImgMain.y = targetImg.y;
                break;
            case 3:
                $("#talkBox").text("哈搂");
                break;
            
        }
    }else{
        $("#talkBox").text("邊界");
    }

    ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMain.x, currentImgMain.y, gridLength, gridLength);

});