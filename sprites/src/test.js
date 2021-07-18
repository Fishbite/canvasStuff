console.log("All good...");

import { assets } from "../lib/assets.js";

import { makeCanvas } from "../lib/makeCanvas.js";

assets
  .load([
    "../images/animals.json",
    "../images/animals.png",
    "../images/cat.png",
    "../images/tiger.png",
  ])
  .then(() => setup());

function setup() {
  let canvas = makeCanvas(312, 312);
  let ctx = canvas.ctx;

  let cat = new Image();
  let source = assets["../images/cat.png"];
  console.log(source);
  // <img src="../images/cat.png">
  cat.src = source.src;

  ctx.drawImage(cat, 100, 100);

  // cat.addEventListener("load", loadHandler, false);

  // function loadHandler() {
  //   function draw(img, x, y) {
  //     ctx.drawImage(img, x, y);
  //   }

  //   draw(cat, 100, 0);
  // }
}
