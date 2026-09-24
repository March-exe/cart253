/**
 * BLUE GUY PROTOTYPE
 * Marciano Faugno
 * 
 * This blue guy is a simple drawing of a blue character with a circle face, two eyes, a mouth and a body. 
 * The body is made up of three ellipses. The blue guy is drawn on a pink background.
 */

"use strict";



// a blue guy with a circle face, two eyes, a mouth and a body. The body is made up of three ellipses. The blue guy is drawn on a pink background.


function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220, 150, 150);

    // rectangle face is in
    rectMode(CENTER)
    fill(150, 220, 150)
    square(200, 200, 250)


    // blue face
    fill(0, 200, 200)
    circle(200, 200, 200)

    // right eye 
    fill(0, 0, 0)
    circle(125, 175, 50)
    // right pupil
    fill(255, 255, 255)
    circle(125, 185, 25)

    // left eye
    fill(0, 0, 0)
    circle(275, 175, 50)
    // left pupil
    fill(255, 255, 255)
    circle(275, 185, 25)

    // mouth
    fill(0, 0, 0)
    arc(200, 250, 100, 15, 0, PI);
    // teeth
    fill(255, 255, 255)
    rect(195, 260, 5, 15)
    rect(200, 260, 5, 15)


    // body
    fill(0, 200, 200)
    ellipse(200, 350, 50, 100)
    ellipse(250, 340, 25)
    ellipse(150, 350, 25)
}