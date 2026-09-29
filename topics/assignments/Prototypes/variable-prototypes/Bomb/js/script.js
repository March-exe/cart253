/**
 * Bomb !
 * Marciano Faugno
 * 
 * OH NO someone set off a bomb in your browser and you need to stop it!
 * the only way to make the fuze stop is by clicking and holding the screen!
 * how long can you hold it for??
 */

"use strict";



let bomb = {

    fill: {
        r: 0,
        g: 0,
        b: 0
    },

    body: {
        x: 300,
        y: 350,
        size: 150
    },

    hat: {
        x: 275,
        y: 250,
        w: 50,
        h: 100
    }

}

let windUp = {

    fill: {
        r: 230,
        g: 180,
        b: 2
    },

    fillTwo: {
        r: 255,
        g: 255,
        b: 255
    },

    yRect: {
        x: bomb.body.x + 70,
        y: bomb.body.y - 20,
        size: bomb.body.size - 120
    },

    topE: {
        x: bomb.body.x + 110,
        y: bomb.body.y - 30,
        size: bomb.body.size - 100
    },

    botmE: {
        x: bomb.body.x + 110,
        y: bomb.body.y + 10
        ,
        size: bomb.body.size - 100
    },

    eyes: {

        x: bomb.body.x - 50,
        y: bomb.body.y,
        W: bomb.body.size - 125,
        h: bomb.body.size - 75,
        xL: bomb.body.x,
        yL: bomb.body.y,
        wL: bomb.body.size - 125,
        hL: bomb.body.size - 75

    },

    whiteI: {
        x: bomb.body.x + 110,
        y: bomb.body.y - 30,
        size: bomb.body.size - 130
    },

    whiteII: {
        x: bomb.body.x + 110,
        y: bomb.body.y + 10
        ,
        size: bomb.body.size - 130
    },

}


let legs = {

    rotate: {

        rOne: -0.174,
        rTwo: 2
    },

    feet: {

        right: {
            x: bomb.body.x + 25,
            y: bomb.body.y + 125,
            w: bomb.body.size - 125,
            h: bomb.body.size - 75
        },

        left: {
            x: bomb.body.x,
            y: bomb.body.y - 725,
            w: bomb.body.size - 125,
            h: bomb.body.size - 75
        }

    }

}
function setup() {

    createCanvas(600, 600);

}
/**
 * the draw creates a mario insirped bomb with a belize curve as a fuze and a moving circle with a changing stroke weight to simulate a spark moving down the fuze
*/
let t = 0;
let elasped = 0;
let starttime = 0;
let timer = 0
let finished = false
let press = false

function draw() {
    background(255, 0, 255);
    push();
    fill(0, 0, 0);
    ellipse(300, 475, 200, 20)

    pop();
    //bomb : (fill) (body) (hat)
    //body of bomb//
    push();
    fill(bomb.fill.r, bomb.fill.g, bomb.fill.b);
    ellipse(bomb.body.x, bomb.body.y, bomb.body.size);
    rect(bomb.hat.x, bomb.hat.y, bomb.hat.w, bomb.hat.h);
    pop();

    //wind-up////////fill fillTwo,
    push();
    fill(230, 180, 2);
    //   fill(windUp.fill.r, windUp.fill.g, windUp.fill.b);
    noStroke();
    //stem of winder
    rect(windUp.yRect.x, windUp.yRect.y, windUp.yRect.size)
    //topE
    ellipse(windUp.topE.x, windUp.topE.y, windUp.topE.size);
    //bottomE
    ellipse(windUp.botmE.x, windUp.botmE.y, windUp.botmE.size);
    pop();


    //white dots 
    push();
    fill(255, 255, 255);
    ellipse(windUp.whiteI.x, windUp.whiteI.y, windUp.whiteI.size);
    ellipse(windUp.whiteII.x, windUp.whiteII.y, windUp.whiteII.size);
    pop();
    //legs ///
    push();
    fill(230, 180, 2);
    rotate(legs.rotate.rOne);
    ellipse(legs.feet.right.x, legs.feet.right.y, legs.feet.right.w, legs.feet.right.h);
    pop();
    // left leg
    push();
    fill(230, 180, 2);
    rotate(2);
    ellipse(legs.feet.left.x, legs.feet.left.y, legs.feet.left.w, legs.feet.left.h);
    pop();
    //eyes
    //let eye = {right: x: bomb.body.x - 50, bomb.body.y,W: bomb.body.size-125, h:  bomb.body.size-75 }
    // {left: x: bomb.body.x, bomb.body.y,W: bomb.body.size-125, h:  bomb.body.size-75 }

    push();
    fill(255, 255, 255);
    ellipse(windUp.eyes.x, windUp.eyes.y, windUp.eyes.W, windUp.eyes.h);
    ellipse(windUp.eyes.xL, windUp.eyes.yL, windUp.eyes.wL, windUp.eyes.hL);
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


    if (finished != true && press == false) {

        t += 0.001
    }

    let x = bezierPoint(x1, x2, x3, x4, t);
    let y = bezierPoint(y1, y2, y3, y4, t);
    let ran = random(5, 20)
    t = constrain(t, 0, 1)

    pop();





    if (frameCount % 60 == 0 && finished != true) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
        elasped += 1;


    }
    //let elasped = timer - starttime
    let s = millis() / 1000;
    let sec = second();
    timer = elasped - starttime

    if (press == true) {
        textSize(40);
        text(`${timer}`, 300, 520, 1000);

    }

    // Draw the circle.
    push();
    fill(200, 50, 0);
    strokeWeight(ran);
    stroke(255, 204, 0);
    circle(x, y, 30);
    pop();


    if (t == 1) {
        finished = true

        push();
        fill(0, 0, 0);
        ellipse(300, 300, 900);
        stroke(255, 0, 0);
        fill(255, 0, 0);
        textSize(30);
        text("The bomb has blown up.", 100, 300)
        pop();

    }

}

//elasped time starttime if 

// Set the stroke color and weight as soon as the user clicks.
function mousePressed() {

    press = true
    starttime = elasped
    if (finished != true) {

    }



}

// Set the stroke and fill colors as soon as the user releases
// the mouse.
function mouseReleased() {

    press = false

}


