/* images.js */
/*
    This section is about adding images
    to shapes.
*/

// first we'll clear the canvas
// it's a little too busy right now!
/* ||||| Comment This Out When Needed */
ctx.clearRect(0, 0, 256, 256);

// Note: top left of image is inserted
// at X 0, Y 0. Move the context's origin
// to the top left of the shape you want
// to place the image in.

// load an image:
let catImage = new Image();
catImage.addEventListener("load", loadHandler, false);
catImage.src = "./images/cat.png";

// define the loadHandler function that
// is called when the image is loaded
function loadHandler() {
  // styles:
  ctx.strokeStyle = "black";
  ctx.lineWidth = 10;
  ctx.lineJoin = "round";
  ctx.shadowColor = "rgba(255, 255, 255, 0)";

  // draw a square:
  ctx.beginPath();
  ctx.rect(64, 64, 128, 128);

  /*  
  Set the pattern to the image and the
  fillStyle to the pattern:
  
  Note: createPattern() takes two args:

        image, repeatType
  
  Repeat types can be:

    repeat, no-repeat, repeat-x, repeat-y

  */
  let pattern = ctx.createPattern(catImage, "no-repeat");
  ctx.fillStyle = pattern;

  // move the context's origin to the top
  // left of the square, then start the
  // image fill from that point:

  ctx.save();
  ctx.translate(64, 64);
  ctx.stroke();
  ctx.fill();
  ctx.restore();
}

// If you just want to display an image on the canvas use:
// drawImage(img, Xpos, Ypos)

let catImage2 = new Image();
catImage2.addEventListener("load", loadHandler2, false);
catImage2.src = "./images/cat.png";

function loadHandler2() {
  ctx.drawImage(catImage, 128, 172);
}
