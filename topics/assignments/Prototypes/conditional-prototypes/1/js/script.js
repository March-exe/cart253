/**
 * Welcome to my home
 * Marciano Faugno
 * 
 * This project takes inspiration from old click through story games and a artist i adore named 'Lausse the cat'
 * the goal of this project is to be a clickthrough exploration of my montreal apartment, full of personal meaning and jokes to my friends
 * by the end, i hope that a bit more of my personality is clear, and this serves as further practice until i build a larger version.
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1000, 700);
    background(200, 0, 0);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/

let buttons = {

    fill: {

        r: 255,
        g: 255,
        b: 255,
    },

    right: {
        x1: 950,
        y1: 300,
        x2: 950,
        y2: 400,
        x3: 975,
        y3: 350,


    },


    left: {
        x1: 50,
        y1: 300,
        x2: 50,
        y2: 400,
        x3: 25,
        y3: 350,


    },
    top: {
        x1: 450,
        y1: 50,
        x2: 550,
        y2: 50,
        x3: 500,
        y3: 25,


    },
    bottom: {
        x1: 450,
        y1: 650,
        x2: 550,
        y2: 650,
        x3: 500,
        y3: 675,


    },

}




function draw() {
    //right
    push();
    fill(buttons.fill.r, buttons.fill.g, buttons.fill.b);
    triangle(buttons.right.x1, buttons.right.y1, buttons.right.x2, buttons.right.y2, buttons.right.x3, buttons.right.y3);

    //left
    fill(255, 255, 255);
    triangle(buttons.left.x1, buttons.left.y1, buttons.left.x2, buttons.left.y2, buttons.left.x3, buttons.left.y3);

    //top
    fill(255, 255, 255);
    triangle(buttons.top.x1, buttons.top.y1, buttons.top.x2, buttons.top.y2, buttons.top.x3, buttons.top.y3);

    //bottom
    fill(255, 255, 255);
    triangle(buttons.bottom.x1, buttons.bottom.y1, buttons.bottom.x2, buttons.bottom.y2, buttons.bottom.x3, buttons.bottom.y3);
    pop();
}
//count based on each arrow individually
//gonna want to do something like, if right is clicked 1 time (counted), 
// bathroom is avalible if click is == 1, if you go back (clicking left) count is minus 1
//could continue with this to say that is click is == -1, bedroom is avalible

//THIS IF STATEMENT / FUNCTION MAKES THE AREA CLICKABLE
function mouseClicked() {
    //if i click the right button
    if (buttons.right.x1 < mouseX &&
        mouseX < buttons.right.x3 &&
        mouseY > buttons.right.y1 &&
        mouseY < buttons.right.y2) {

        buttons.fill.r = buttons.fill.r - 255
        buttons.fill.g = buttons.fill.g - 255

    }

    if (buttons.left.x1 > mouseX &&
        mouseX > buttons.left.x3 &&
        mouseY > buttons.left.y1 &&
        mouseY < buttons.left.y2) {

        buttons.fill.r = buttons.fill.r - 255
        buttons.fill.g = buttons.fill.g - 255

    }
    // if the top bottom is clicked
    if (buttons.top.x1 < mouseX &&
        mouseX < buttons.top.x2 &&
        mouseY > buttons.top.y3 &&
        mouseY < buttons.top.y2) {

        buttons.fill.r = buttons.fill.r - 255
        buttons.fill.g = buttons.fill.g - 255

    }
    // if the bottom button is clicked
    if (buttons.bottom.x1 < mouseX &&
        mouseX < buttons.bottom.x2 &&
        mouseY < buttons.bottom.y3 &&
        mouseY > buttons.bottom.y2) {

        buttons.fill.r = buttons.fill.r - 255
        buttons.fill.g = buttons.fill.g - 255

    }
}
//updates window position x to random number from 50 to 699
//updates window position y to random number from 50 to 499


//updates every variable so that the elements
//on screen stay together to create the window 
