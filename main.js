var canvas = new fabric.Canvas("myCanvas");
var bark = document.getElementById("myAudio");

var dog_obj = "";

function new_Image()
{
    fabric.Image.fromURL("Canvas_Dog.jpg", function(Img){
        dog_obj = Img;
        dog_obj.scaleToHeight(400);
        dog_obj.scaleToWidth(600);
        dog_obj.set({
            top: 0,
            left: 0
        });
        canvas.add(dog_obj);
    });
}

function playSound()
{
    bark.play();
}