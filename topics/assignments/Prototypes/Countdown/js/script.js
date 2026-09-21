/**
 * Movie countedown timer
 * Marciano Faugno
 * 
 * This is a p5 project made with 2d objects to animate a countdown timer for a movie. 
 * 
/** */

"use strict";



// function calls for set up

function setup() {
    //creates a 400x400 canvas
    createCanvas(400, 400);

    // changes the angle mode to degrees instead of radian
    angleMode(DEGREES);
    //set frame rate to 60fps
    frameRate(60);
    //sets variables for counter and arc animation
    textNum = 9
    stopAngle = -90

}

function draw() {
    background(255, 200, 200);

    line(200, 400, 200, 0);
    line(0, 200, 400, 200);

    // Style the arc.
    push();
    noStroke();
    fill(200, 150, 255);
    // Updates stop angles
    if (textNum > 0)
        //Sets the stopping angle to -90, adds 60/6 degrees creating animation
        stopAngle = -90 + frameCount * 6;

    // Draw the arc.
    //arc(x, y, w, h, startAngle, endangle, [mode], [detail])
    arc(200, 200, 180, 180, -90, stopAngle);
    pop();


    // if the displayed number is greater than zero and the frameCount's remainer is 0, then the displayed number will decrease by 1
    if (textNum > 0 && frameCount % 60 == 0)
        textNum -= 1;

    rectMode(CENTER);
    textSize(100);
    text(textNum, 170, 230);


    //DEBUGGING TOOL: updates number for every second past based on framerate
    //text(frameCount/60 , 100, 100)

}
