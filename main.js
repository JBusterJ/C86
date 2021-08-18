var canvas = new fabric.Canvas('canvas');
var x = document.getElementById("happyBirthdaySong");

function new_image()
{
    fabric.Image.fromURL("BirthdayImage.jpg", function(Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(500);
        block_image_object.set({
            left: 95,
            top: 0,
        });
        canvas.add(block_image_object);
    });
}

function playSound(){
	x.play();
}
