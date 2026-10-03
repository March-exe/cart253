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
let fDoor
let kitchen
let bRoom
let Lroom
let TvRoom
let Mroom
let Balcony

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

    count: {

        right: 0,
        left: 0,
        top: 0,
        bottom: 0,

    },

}

let aLeft = undefined
let aRight = undefined
let aTop = undefined
let aBottom = undefined

let bg = {

    r: 200,
    g: 0,
    b: 0


}
let canvasS = {

    w: 1000,
    h: 700,
}

async function setup() {

    fDoor = await loadImage('./assets/images/0000.png');
    kitchen = await loadImage('./assets/images/1000.png');
    bRoom = await loadImage('./assets/images/0010.png');
    Lroom = await loadImage('./assets/images/0100.png');
    TvRoom = await loadImage('./assets/images/0200.png');
    Mroom = await loadImage('./assets/images/0210.png');
    Balcony = await loadImage('./assets/images/0300.png');

    createCanvas(canvasS.w, canvasS.h);



}

let hideR = false
let hideL = false
let hideT = false
let hideB = false


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(bg.r, bg.g, bg.b);

    //numbers testing - debugging !!!
    push();
    textSize(25)
    text(buttons.count.right, 20, 20);
    text(buttons.count.left, 20, 40);
    text(buttons.count.top, 20, 60);
    text(buttons.count.bottom, 20, 80);
    pop();
    //numbers testing


    //loads correct images based on the code given
    //checks for 0000
    if (buttons.count.right == 0 && buttons.count.left == 0 && buttons.count.top == 0 && buttons.count.bottom == 0) {

        image(fDoor, 0, 0, canvasS.w, canvasS.h);

    }
    //checks for 1000
    if (buttons.count.right == 1 && buttons.count.left == 0 && buttons.count.top == 0 && buttons.count.bottom == 0) {

        image(kitchen, 0, 0, canvasS.w, canvasS.h);
    }
    //checks for 0100
    if (buttons.count.right == 0 && buttons.count.left == 1 && buttons.count.top == 0 && buttons.count.bottom == 0) {

        image(Lroom, 0, 0, canvasS.w, canvasS.h);
    }
    //checks for 0010
    if (buttons.count.right == 0 && buttons.count.left == 0 && buttons.count.top == 1 && buttons.count.bottom == 0) {

        image(bRoom, 0, 0, canvasS.w, canvasS.h);

    }
    //checks for 0200
    if (buttons.count.right == 0 && buttons.count.left == 2 && buttons.count.top == 0 && buttons.count.bottom == 0) {

        image(TvRoom, 0, 0, canvasS.w, canvasS.h);
    }
    //checks for 0210
    if (buttons.count.right == 0 && buttons.count.left == 2 && buttons.count.top == 1 && buttons.count.bottom == 0) {

        image(Mroom, 0, 0, canvasS.w, canvasS.h);
    }
    //checks for 0300
    if (buttons.count.right == 0 && buttons.count.left == 3 && buttons.count.top == 0 && buttons.count.bottom == 0) {

        image(Balcony, 0, 0, canvasS.w, canvasS.h);
    }

    //ALL THE BUTTONS
    //right


    //checks if the hide is true or not, then creates buttons
    push();
    if (hideR != true) {
        fill(buttons.fill.r, buttons.fill.g, buttons.fill.b);
        aRight = triangle(buttons.right.x1, buttons.right.y1, buttons.right.x2, buttons.right.y2, buttons.right.x3, buttons.right.y3);
    }

    //left
    if (hideL != true) {
        fill(255, 255, 255);
        aLeft = triangle(buttons.left.x1, buttons.left.y1, buttons.left.x2, buttons.left.y2, buttons.left.x3, buttons.left.y3);
    }
    //top
    if (hideT != true) {
        fill(255, 255, 255);
        aTop = triangle(buttons.top.x1, buttons.top.y1, buttons.top.x2, buttons.top.y2, buttons.top.x3, buttons.top.y3);
    }
    //bottom
    if (hideB != true) {
        fill(255, 255, 255);
        aBottom = triangle(buttons.bottom.x1, buttons.bottom.y1, buttons.bottom.x2, buttons.bottom.y2, buttons.bottom.x3, buttons.bottom.y3);
    }
    pop();
    //END OF BUTTONS

    //code reference : left,right,top,bottom //

    //checks 0000
    push();
    if (buttons.count.right == 0 && buttons.count.left == 0 && buttons.count.top == 0 && buttons.count.bottom == 0) {
        hideB = true
        hideR = false
        hideL = false
        hideT = false
    }
    else {
        hideR = false
        hideL = false
        hideT = false
        hideB = false
    }
    pop();
    //checks 1000
    push();
    if (buttons.count.right == 1 && buttons.count.left == 0 && buttons.count.top == 0 && buttons.count.bottom == 0) {
        hideR = true
        hideT = true
        hideB = true
        hideL = false
        bg.b = 200
    }
    pop();
    //checks for 0100
    push();
    if (buttons.count.left == 1 && buttons.count.right == 0 && buttons.count.top == 0 && buttons.count.bottom == 0) {

        bg.b = 100
        hideB = true
        hideT = true
        hideL = false
        hideR = false

    }
    pop();
    //checks for 0200
    push();
    if (buttons.count.left == 2 && buttons.count.right == 0 && buttons.count.top == 0 && buttons.count.bottom == 0) {

        bg.b = 200
        hideB = true
        hideL = false
        hideR = false
        hideT = false
    }
    pop();
    //checks for 0300
    push();
    if (buttons.count.left == 3 && buttons.count.right == 0 && buttons.count.top == 0 && buttons.count.bottom == 0) {

        bg.r = bg.r - 200
        hideL = true
        hideT = true
        hideB = true
        hideR = false
    }
    pop();
    //checks for 0010
    push();
    if (buttons.count.top == 1 && buttons.count.left == 0 && buttons.count.right == 0 && buttons.count.bottom == 0) {
        hideL = true
        hideR = true
        hideT = true
        hideB = false
        bg.g = 200
    }
    pop();
    //checks for 0210
    push();
    if (buttons.count.top == 1 && buttons.count.left == 2 && buttons.count.right == 0 && buttons.count.bottom == 0) {
        hideL = true
        hideR = true
        hideT = true
        hideB = false
        bg.g = 200
    }
    pop();

    //0000
    //1000
    //0010
    //0100
    //0110
    //0200
    //0210
    //0300
}
//count based on each arrow individually
//gonna want to do something like, if right is clicked 1 time (counted), 
// bathroom is avalible if click is == 1, if you go back (clicking left) count is minus 1
//could continue with this to say that is click is == -1, bedroom is avalible

//THIS IF STATEMENT / FUNCTION MAKES THE AREA CLICKABLE
function mouseClicked() {
    //all of these if statements below effectively make it so that clicking backwards is possible

    //if the right button is clicked
    push();
    if (buttons.right.x1 < mouseX &&
        mouseX < buttons.right.x3 &&
        mouseY > buttons.right.y1 &&
        mouseY < buttons.right.y2) {



        //increase count.left by 1 if left is clicked
        //checks for 0000
        //this moves you to 1000
        if (buttons.count.right == 0 && buttons.count.left == 0 && buttons.count.top == 0 && buttons.count.bottom == 0) {
            buttons.count.right = buttons.count.right + 1
        }
        //checks if code is 0100 - moves 
        if (buttons.count.right == 0 && buttons.count.left == 1 && buttons.count.top == 0 && buttons.count.bottom == 0) {

            buttons.count.left = buttons.count.left - 1

            bg.b = 0
        }
        //checks for 0200
        if (buttons.count.right == 0 && buttons.count.left == 2 && buttons.count.top == 0 && buttons.count.bottom == 0) {
            buttons.count.left = buttons.count.left - 1
            hideR = false
            hideL = false
            hideT = false
            bg.b = bg.b - 100
        }
        //checks for 0300
        if (buttons.count.right == 0 && buttons.count.left == 3 && buttons.count.top == 0 && buttons.count.bottom == 0) {
            buttons.count.left = buttons.count.left - 1
            hideR = false
            bg.r = bg.r + 200

        }


    }
    pop();
    //if the left button is clicked
    if (buttons.left.x1 > mouseX &&
        mouseX > buttons.left.x3 &&
        mouseY > buttons.left.y1 &&
        mouseY < buttons.left.y2) {



        //checks if code is 1000
        if (buttons.count.right == 1 && buttons.count.left == 0 && buttons.count.top == 0 && buttons.count.bottom == 0) {

            buttons.count.right = buttons.count.right - 1

            hideR = false
            hideT = false
            hideB = false
            bg.b = 0

        }
        else {
            buttons.count.left = buttons.count.left + 1

        }


    }
    // if the top buttons is clicked
    if (buttons.top.x1 < mouseX &&
        mouseX < buttons.top.x2 &&
        mouseY > buttons.top.y3 &&
        mouseY < buttons.top.y2) {



        buttons.count.top = buttons.count.top + 1


    }


    // if the bottom button is clicked
    if (buttons.bottom.x1 < mouseX &&
        mouseX < buttons.bottom.x2 &&
        mouseY < buttons.bottom.y3 &&
        mouseY > buttons.bottom.y2) {

        //checks if code is 0010
        if (buttons.count.right == 0 && buttons.count.left == 0 && buttons.count.top == 1 && buttons.count.bottom == 0) {

            buttons.count.top = buttons.count.top - 1
            hideL = false
            hideR = false
            hideT = false

            bg.g = 0
        }
        //checks if code is 0210
        if (buttons.count.right == 0 && buttons.count.left == 2 && buttons.count.top == 1 && buttons.count.bottom == 0) {

            buttons.count.top = buttons.count.top - 1
            hideL = false
            hideR = false
            hideT = false
            bg.g = 0
        }
        else {
            //increase count.bottom by 1 if codes do not match
            // buttons.count.bottom = buttons.count.bottom + 1
        }


    }
}
// i would redraw the whole thing without the buttons,
// you can put the code to draw the buttons in an If statement, 
// and check the condition to hide / unhide

//updates window position x to random number from 50 to 699
//updates window position y to random number from 50 to 499


//updates every variable so that the elements
//on screen stay together to create the window 

//if the left button is clicked,
//and bg is purple, minus the right button,
//otherwise increase left by 1

//another idea; base it off the imaged displayed ei.
//if kitchen is displayed, then do that
//if living room is displayed, then do this...