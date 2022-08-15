var canvas = new fabric.Canvas('myCanvas');

var playerObject="";
var blockImageObject = "";

blockImageWidth = 30;
blockImageHeigh = 30;

playerX = 10;
playerY = 10;

function playerUpdate(){
    fabric.Image.fromURL("player.png", function(Img){
         playerObject = Img;

         playerObject.scaleToWidth(150);
         playerObject.scaleToHeight(140);
         playerObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(playerObject)
    })
}

function newImage(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        blockImageObject = Img;

        blockImageObject.scaleToWidth(blockImageWidth );
        blockImageObject.scaleToHeight(blockImageHeigh);
        blockImageObject.set({
           top:playerY,
           left:playerX
    });
    canvas.add(blockImageObject);
})
}