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

const box = {
    x: 450,
    y: 450,
    height: 50,
    width: 50,
    fill: "#0000"
}




function setup() {
    createCanvas(700, 700);



}
let index = 0

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(155, 0, 0);

    rect(box.x, box.y, box.width, box.height);

    if (targets.length > 0) {
        for (let trgt of targets)
            drawTarget(trgt)
        index++


    }

    moveBox(box);

    // if (checkOverlap(box, trgt) == true) {
    //     trgt.fill = "#e6b402"

    // }

    debugging();//if debugging isnt here then it doesnt work
}
let mX = 0
let mY = 0
function mousePressed() {
    createTarget();

    if (mouseX > box.x && mouseX < box.x + box.width && mouseY > box.y && mouseY < box.y + box.height) {

        let mX = mouseX - width
        let mY = mouseY - height

    }
}

function createTarget() {


    const target = {
        x: random(50, 650),
        y: random(50, 650),
        height: random(15, 50),
        width: random(15, 50),
        fill: "#111111"
    };

    if (checkOverlap(box, target) == true) {
        target.fill = "#e6b402"
    }
    //pushes to array and returns the object
    targets.push(target)
    return target;
}

function drawTarget(target) {
    push();
    noStroke();
    fill(target.fill);
    ellipse(target.x, target.y, target.height, target.width);
    pop();


}


function moveBox(box) {


    if (mouseX > box.x && mouseX < box.x + box.width && mouseY > box.y && mouseY < box.y + box.height) {
        text("hello world", 100, 400)


    }

}



// function drawBox(box) {

//     push();
//     fill(box.fill);
//     noStroke();
//     rect(box.x, box.y, box.width, box.height)
//     pop();


// }

// //START HERE/////////////////////////////////////////////////////


// //need to figure out the interaction for picking up the box, can steal windows code for dat
// //need to figure out why the debugging messes with the thing
// //need to make ellipese consistently show ^ linked ^    


// let test = false
// function pickUpBox(box, cursor) {

//     if (checkOverlap(box, cursor) == true) {

//         test = true
//         text('overlap: ${test}', 300, 300);

//     }

// }


function checkOverlap(rectA, rectB) {
    return (rectA.x + rectA.width / 2 > rectB.x - rectB.width / 2 &&
        rectA.x - rectA.width / 2 < rectB.x + rectB.width / 2 &&
        rectA.y + rectA.height / 2 > rectB.y - rectB.height / 2 &&
        rectA.y - rectA.height / 2 < rectB.y + rectB.height / 2);
}


function debugging() {

    text(`targets: ${targets}`, 50, 100)
    text(`targets: ${targets.length}`, 50, 120)
    text(`targets: ${targets.length}`, 50, 120)

    text(`x: ${mX}`, 250, 350)
    text(`y: ${mY}`, 250, 260)

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
