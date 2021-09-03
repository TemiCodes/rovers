canvas = document.getElementById("canvas1");
ctx = canvas.getContext("2d");
rover_width = 70;
rover_height = 75;
rover_x = 20;
rover_y = 20;
imagers = ["mars.jpg","mars2.jpg","mars3.jpg","mars4.jpg","mars5.jpg"];

rand = Math.floor(Math.random()*5);
background_image = imagers[rand]
image2 = "rover.png";
function  reload() {
    image3 = new Image();
    image3.onload = image3_function;
    image3.src = background_image
        image4 = new Image();
    image4.onload = image4_func;
    image4.src = image2;

}
function image3_function() {
    ctx.drawImage(image3,0,0,canvas.width,canvas.height);

    
}
function image4_func() {
    ctx.drawImage(image4,rover_x,rover_y,rover_width,rover_height);
    
}
window.addEventListener("keydown",keydown);
function keydown(e) {
    keypress = e.keyCode;
    console.log(keypress);
    if (keypress == "38") {
        up();
        console.log("up");
    }
    if (keypress == "40") {
     down();
     console.log("down"); 
    }
    if (keypress == "37") {
    left();
    console.log("left");
    }
    if (keypress == "39") {
        right();
        console.log("right");
    }
}
function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("when up arrow is pressed x = " + rover_x + " y = " + rover_y);
        image3_function();
        image4_func();

    }
}
function down() {
    if (rover_y <= 525) {
        rover_y = rover_y + 10;
        console.log("when down arrow is pressed x = " + rover_x + " y = " + rover_y);
        image3_function();
        image4_func();

    }
}
function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("when left arrow is pressed x = " + rover_x + " y = " + rover_y);
        image3_function();
        image4_func();

    }
}
function right() {
    if (rover_x <= 930) {
        rover_x = rover_x + 10;
        console.log("when right arrow is pressed x = " + rover_x + " y = " + rover_y);
        image3_function();
        image4_func();

    }
}



