/**
 * Draw a Lanscape
 * Marciano Faugno
 * 
 * Draws a lanscape with a tent, a person, a moon
 * and birds in the sky. it uses a combination of circles, quads, 
 * rectangles, triangles and lines to create the lanscape.
 */

"use strict";

/**
creates a canvas, hides the cursor
*/
function setup() {
    // A 400x400 canvas
    createCanvas(400, 400);

    // Don't show the cursor
    noCursor();
}

/**
 * Draws the dimly lit landscape featuring a tent, a person, 
 * a moon and birds in the sky.
*/
function draw() {

    //NIGHT SKY//
    // creates purple nighsky
    background(150, 0, 150);

    // moon shape in white
    fill(255, 255, 255)
    ellipse(50, 50, 50)
    //NIGHT SKY//

    //GROUND//
    //line for where the ground is supposed to be
    line(0, 300, 400, 275);
    // a dark blue 'fill in coulour' for the ground
    fill(0, 0, 75)
    quad(0, 300, 400, 275, 400, 400, 0, 400);
    //GROUND//

    //TENT//
    // lighter colour of tent in yellow 
    fill(0, 255, 120)
    quad(200, 300, 250, 240, 300, 260, 350, 300);
    // darker colour yellowish green of tent - slightly smaller quad object 
    fill(20, 180, 85)
    quad(220, 300, 250, 240, 300, 260, 350, 300);

    //shadow cast behind tent in black
    fill(0, 0, 0)
    quad(200, 300, 280, 330, 425, 360, 350, 300);
    //TENT//

    //PERSON//
    // black head of person - colour from previous fill funct on shadow
    circle(176, 225, 15)
    // body of person 
    rect(168, 234, 16, 30)

    // left leg
    quad(168, 260, 174, 260, 174, 290, 168, 290)
    // right leg
    quad(178, 260, 184, 260, 184, 290, 178, 290)

    // left arm
    triangle(168, 235, 163, 250, 168, 260)
    // right arm
    triangle(184, 235, 189, 250, 184, 260)

    // shadow
    quad(168, 290, 184, 290, 194, 310, 184, 310)
    ellipse(192, 317, 10)
    //PERSON//

    //BIRDS// 
    // since im only using black colour right now 
    // i dont need to change the fill
    //bird 1//
    line(100, 50, 120, 60)
    line(120, 60, 140, 50)
    //bird 2//
    line(120, 90, 140, 100)
    line(140, 100, 160, 90)
    //bird 3//
    line(180, 50, 200, 60)
    line(200, 60, 220, 50)
    //BIRDS//
}