/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
 * 
 * set up varables,  makkine one for everything
 * 
 * 
 * 
 * moakingtarget
 * - random to some point
 * - clikcking soucnfd w hen actv
*/

const targets = []

let cursor = {

    x: mouseX,
    y: mouseY,
    w: 20,
    h: 20,


}

function setup() {
    createCanvas(700, 700);



}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(155, 0, 0);

    createBox();
    makeCursor();


    for (let trgt of targets) {

        drawTarget(trgt);
        pickUpBox(box, trgt);
    }

    debugging();//if debugging isnt here then it doesnt work
}

function mousePressed() {

    createTarget();
}
function createBox() {

    const box = {
        x: 450,
        y: 450,
        height: 50,
        width: 50,
        fill: "#0000"


    }
    push();
    fill(150);
    noStroke();
    rect(box.x, box.y, box.width, box.height)
    pop();

}

//START HERE/////////////////////////////////////////////////////


//need to figure out the interaction for picking up the box, can steal windows code for dat
//need to figure out why the debugging messes with the thing
//need to make ellipese consistently show ^ linked ^    

//this doesnt work
function makeCursor() {

    noCursor();
    fill(0)
    rect(mouseX, mouseY, cursor.w, cursor.h)
}
//doesnt do anything
function pickUpBox(box, cursor) {

    if (checkOverlap(box, cursor) == true) {

        text('working', 300, 300);

    }

}

function createTarget() {


    const target = {
        x: random(50, 650),
        y: random(50, 650),
        height: random(15, 50),
        width: random(15, 50),
        fill: "#0000"
    };

    //pushes to array and returns the object
    targets.push(target)
    //return target;
    push();
    fill(target.fill);
    ellipse(target.x, target.y, target.width, target.height);
    pop();
}

function drawTarget(target) {
    push();
    noStroke();
    fill(target.fill);
    ellipse(target.x, target.y, target.size);
    pop();


}

function checkOverlap(rectA, rectB) {
    return (rectA.x + rectA.width / 2 > rectB.x - rectB.width / 2 &&
        rectA.x - rectA.width / 2 < rectB.x + rectB.width / 2 &&
        rectA.y + rectA.height / 2 > rectB.y - rectB.height / 2 &&
        rectA.y - rectA.height / 2 < rectB.y + rectB.height / 2);
}


function debugging() {

    text(`targets: ${targets}`, 50, 100)

    text(`targets: ${target}`, 50, 100) // i believe this breaks the funciton, making the ellipses spawn
    //idk why tho and without this the ellipses dont spawn

}
/**
 * 
 * 
 * make target array
 * 
 * 
 * taget = x y w h
 * 
 * 
 * create targets
 * 
 * spawn targets/pick target?
 * 
 * colour mapping - distance ball and box
 * 
 * create box
 * 
 * move box
 * 
 * mouse pressed/mouse release - pick up drop box
 * 
 * 
 * 
 * 
 */