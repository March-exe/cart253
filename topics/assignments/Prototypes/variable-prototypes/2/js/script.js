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
    //body of bomb
    //let bomb = {fill: {r:0,g:0,b:0}, body: {x: 300, y: 350, size: 150}, hat: {x: 275, y: 250, w: 50, h:100},
    push();
    fill(0, 0, 0);
    ellipse(300, 350, 150);
    rect(275, 250, 50, 100);
    pop();

    //let windUp = { fill: {r: 230, g: 180, b: 2} fillTwo: {r: 255, g:255, b:255},
    // yRect: {x: bomb.body.x - 50, y: bomb.body.y - 260, size: bomb.body.size - 100 }
    // topE: {x: bomb.body.x - 200,y: bomb.body.y - 260,size: bomb.body.size -100}
    //botmE: {x: body.x - 200,y: bomb.body.y - 260,size: bomb.body.size - 130}
    //wind-up
    push();
    fill(230, 180, 2);
    noStroke();
    rect(50, 90, 50)
    ellipse(100, 90, 50);
    ellipse(100, 135, 50);
    pop();

    //white dots 
    fill(255, 255, 255);
    ellipse(100, 135, 20);
    ellipse(100, 90, 20);

    // let legs = {rotate: {rOne: -0.174, rTwo: 2}  feet: right: {x: bomb.body.x + 25,y: bomb.body.y + 125,w: bomb.body.size -125,h: bomb.body.size -75}}
    //left: {x: bomb.body.x,y: bomb.body.y - 725,w: bomb.body.size -125,h: bomb.body.size -75}
    //legs 
    push();
    fill(230, 180, 2);
    rotate(-0.174);
    ellipse(325, 475, 25, 75);
    pop();
    // left leg
    push();
    fill(230, 180, 2);
    rotate(2
    );
    ellipse(300, -375, 25, 75);
    pop();
    //eyes
    //let eye = {right: x: bomb.body.x - 50, bomb.body.y,W: bomb.body.size-125, h:  bomb.body.size-75 }
    // {left: x: bomb.body.x, bomb.body.y,W: bomb.body.size-125, h:  bomb.body.size-75 }

    push();
    fill(255, 255, 255);
    ellipse(250, 350, 25, 75);
    ellipse(300, 350, 25, 75);
    pop();

    // Set the coordinates for the curve's anchor and control points.

    //let fuze = {curvePosition: {x1:bomb.body.x +260 , x2: bomb.body.x +100,x3:bomb.body.x ,x4: bomb.body.x,
    //y1: bomb.body.y - 300,y2: bomb.body.y - 150,y3:bomb.body.y - 550,y4:bomb.body.y - 100}
    //

    let x1 = 560;
    let x2 = 400;
    let x3 = 300;
    let x4 = 300;
    let y1 = 50;
    let y2 = 200;
    let y3 = -200;
    let y4 = 250
        ;

    // Draw the curve.
    push();
    noFill();
    stroke(255, 0, 50);
    strokeWeight(10);

    //details: r:255, g:0, b:50, weight: 10
    //circle: fill: r: 255, g:204, b:0

    bezier(x1, y1, x2, y2, x3, y3, x4, y4);

    let fCount = frameCount
    // Calculate the circle's coordinates.
    //let t = 0.5 * sin(frameCount * 0.01) + 0.5;
    let t = 0.5 * sin(fCount * 0.005) + 0.5;
    let x = bezierPoint(x1, x2, x3, x4, t);
    let y = bezierPoint(y1, y2, y3, y4, t);
    let ran = random(5, 20)
    pop();
    // Draw the circle.
    push();

    fill(150, 250, 0);
    strokeWeight(ran);
    stroke(255, 204, 0);
    circle(x, y, 30);

    pop();

}


// Set the stroke color and weight as soon as the user clicks.
function mousePressed() {

    if (isLooping()) {
        noLoop();
    } else {
        loop();
    }
}

// Set the stroke and fill colors as soon as the user releases
// the mouse.
function mouseReleased() {

    loop();

}


