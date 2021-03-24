var canvas = document.getElementById("#canvas")
ctx = canvas.getContext("2d");

var myImg = new Image();
var myImgPos = {
    x: 250,
    y: 125,
    width: 50,

}

function draw(){
    myImg.onload = function(){
        ctx.drawImage(myImg, myImgPos.x, myImgPos.y, myImgPos.width,myimgPos.height);
    }
    myImg.src ="planedecent.png";
}

function moveMyimg(){
    ctx.clearRect(myImgPos.x, MyImgPos.y, myImgPos.x + myImgPos.width,
         myImgPos.y + myImgPos.height);
         myImgPos.x -= 5;
}

setInterval(draw, 50);
setInterval(draw, 50);

