/**
 * Bomb !
 * Marciano Faugno
 * 
 * OH NO someone set off a bomb in your browser and you need to stop it!
 * the only way to make the fuze stop is by clicking and holding the screen!
 * how long can you hold it for??
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {

    createCanvas(600, 600);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(255, 0, 255);

    //bomb : (colour) (size) (fuze)
    fill(0, 0, 0);
    ellipse(300, 350, 150);




    // Set the coordinates for the curve's anchor and control points.
    let x1 = 560;
    let x2 = 400;
    let x3 = 300;
    let x4 = 300;
    let y1 = 50;
    let y2 = 200;
    let y3 = -200;
    let y4 = 270
        ;

    // Draw the curve.
    push();
    noFill();
    stroke(255, 204, 0);
    strokeWeight(10);

    bezier(x1, y1, x2, y2, x3, y3, x4, y4);

    // Calculate the circle's coordinates.
    let t = 0.5 * sin(frameCount * 0.01) + 0.5;
    let x = bezierPoint(x1, x2, x3, x4, t);
    let y = bezierPoint(y1, y2, y3, y4, t);
    let ran = random(5, 20)
    pop();
    // Draw the circle.
    push();

    fill(150, 250, 0);
    strokeWeight(ran);
    triangle(x + 10, y + 10, x - 10, y - 10, x, y);
    triangle(x - 10, y + 10, x - 10, y + 10, x, y);
    pop();

}

function mousePressed() {



}
