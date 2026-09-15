/**
 * Draw a Lanscape
 * Marciano Faugno
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**

*/
function setup() {
    createCanvas(400, 400);
}

/**
 * Draws the landscape with a line across the canvas
*/
function setup() {
    createCanvas(400, 400);
}

function draw() {

    // creates purple nighsky
    background(150, 0, 150);

    // moon shape in white
    fill(255, 255, 255)
    ellipse(50, 50, 50)

    //like for where the ground is supposed to be
    line(0, 300, 400, 275);
    // the actually ground 'fill in coulour'
    fill(0, 0, 75)
    quad(0, 300, 400, 275, 400, 400, 0, 400);

    // lighter colour of tent in yellow 
    fill(0, 255, 120)
    quad(200, 300, 250, 240, 300, 260, 350, 300);

    // darker colour yellowish green of tent - slightly smaller quad object 
    fill(20, 255, 175)
    quad(220, 300, 250, 240, 300, 260, 350, 300);


    //quad(x1, y1, x2, y2, x3, y3, x4, y4);
}