var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

 fabric.Image.fromURL(get_image, function(Img))
function new_image(){
	fabric.Image.fromURL("BirthdayImage.jpg", function(Img) {
        block_image_object= Img;

        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(block_image_object);
    });
}
<button class="btn btn-warning btn-lg" onclick="playSound()">Dear Mom</button>

function playSound(){
    x.play();   
}
