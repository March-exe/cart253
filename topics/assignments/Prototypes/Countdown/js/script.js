/**
 * Movie countedown timer
 * Marciano Faugno
 * 
 * This is a p5 project made with 2d objects to animate a countdown timer for a movie. 
 * 
/** */

"use strict";



// Click and drag the mouse to view the scene from different angles.

function setup() {
    createCanvas(400, 400);

    angleMode(DEGREES);
    frameRate(60)
}

function draw() {
    background(255, 200, 200);


    line(200, 400, 200, 0);
    line(0, 200, 400, 200);



    // Style the arc.
    push();
    noStroke();
    fill(200, 150, 255);
    // Updates stop angles.
    let stopAngle = -90 + (frameCount * 6);

    // Draw the arc.
    arc(200, 200, 180, 180, -90, stopAngle);
    //arc(x, y, w, h, startAngle, endangle, [mode], [detail])
    pop();


    let textNum = 9
    let number = 0



    //while (number < 9)
    if (frameCount / 60)
        number = number + (frameCount / 60);
    textNum = textNum - number;




    //updates numbers for amount of rotations a second
    rectMode(CENTER);
    textSize(100)
    text(textNum, 170, 230);

    //testing number for counter
    text(number, 100, 100);



}