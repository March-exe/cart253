/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";



// Click and drag the mouse to view the scene from different angles.

function setup() {
    createCanvas(400, 400, WEBGL);

    describe('A white sphere on a gray background.');
}

function draw() {
    background(200, 50, 50);


    // Draw the sphere.
    box(150, 24);
    // Rotate around the y-axis.
    rotateY(frameCount * 0.01);
    rotateX(frameCount * 0.01);



}