console.log("OK!");
//Import code from the libary
import { makeCanvas, circle, stage, render } from "../lib/importer.js";
import { randomInt, contain } from "../lib/utils.js";

//Make the canvas and stage
let canvas = makeCanvas(256, 256);
stage.width = canvas.width;
stage.height = canvas.height;

//Make a ball sprite
//circle arguments: diameter, fillStyle, strokeStyle, lineWidth, x, y
let ball = circle(32, "gray", "black", 2, 96, 128);

//Set the ball's velocity to 0
ball.vx = randomInt(5, 15);
ball.vy = randomInt(5, 15);

//Physics properties
ball.gravity = 0.3;
ball.frictionX = 1;
ball.frictionY = 0;
ball.mass = 1.3;

//Acceleration and friction properties
ball.accelerationX = 0.2;
ball.accelerationY = -0.2;
ball.frictionX = 1;
ball.frictionY = 1;

//Start the game loop
gameLoop();

function gameLoop() {
  requestAnimationFrame(gameLoop);

  //Apply gravity to the vertical velocity
  ball.vy += ball.gravity;

  //Apply friction. ball.frictionX will be 0.96 if the ball is
  //on the ground, and 1 if it's in the air
  ball.vx *= ball.frictionX;

  //Move the ball by applying the new calculated velocity
  //to the ball's x and y position
  ball.x += ball.vx;
  ball.y += ball.vy;

  //Bounce the ball off the canvas edges and slow it to a stop.
  //These if statements all work in the same way:
  //If the ball crosses the canvas boundaries:
  //1. It's repositioned inside the canvas.
  //2. Its velocity is reversed to make it bounce, with
  //the mass subtracted so that it looses force over time.
  //3. If it's on the ground, friction is added to slow it down

  //You can write the code manually using the following 4 if
  //statemnents, or you can just use the simple `contain`
  //function. The final effect is the same.
  /*
  //Left
  if (ball.x < 0) {
    ball.x = 0;
    ball.vx = -ball.vx / ball.mass;
  }
  //Right
  if (ball.x + ball.diameter > canvas.width) {
    ball.x = canvas.width - ball.diameter;
    ball.vx = -ball.vx / ball.mass;
  }
  //Top
  if (ball.y < 0) {
    ball.y = 0;
    ball.vy = -ball.vy / ball.mass;
  }
  //Bottom
  if(ball.y + ball.diameter > canvas.height) {

    //Position the ball inside the canvas
    ball.y = canvas.height - ball.diameter;

    //Reverse its velocity to make it bounce, and dampen the effect with mass
    ball.vy = -ball.vy / ball.mass;

    //Add some friction if it's on the ground
    ball.frictionX = 0.96;
  } else {

    //Remove friction if it's not on the ground
    ball.frictionX = 1;
  }
  */

  //Use the `contain` function to bounce the ball off the
  //stage's boundaries
  let collision = contain(ball, stage.localBounds, true);
  if (collision === "bottom") {
    //Slow the ball down if it hits the bottom of the state
    ball.frictionX = 0.96;
  } else {
    ball.frictionX = 1;
  }

  //Render the animation
  render(canvas);
}
