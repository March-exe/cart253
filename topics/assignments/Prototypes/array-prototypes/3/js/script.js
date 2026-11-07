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
    fill: { r: 255, g: 0, b: 255 }
}

let test = 0
let c = 0

let drag = false
let holding = false


function setup() {
    createCanvas(700, 700);



}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#a40000");


    drawBox();

    if (targets.length > 0) {
        for (let trgt of targets) {

            drawTarget(trgt)
        }

    }
    moveBox(box);

    handlePoints();

    InterFace();
    Win();
    //debugging();//if debugging isnt here then it doesnt work

}


// then for the mouseDragged
// if boolean is true, do moveBox
// then have a mouseReleased()
// which sets the boolean to false

function mouseDragged() {

    if (mouseX > box.x && mouseX < box.x + box.width && mouseY > box.y && mouseY < box.y + box.height) {


        if (holding == true) {
            drag = true
        }
        else { drag = false }


    }
}
function mouseReleased() {

    if (mouseX > box.x && mouseX < box.x + box.width && mouseY > box.y && mouseY < box.y + box.height) {

        drag = false
    }
    else { drag = false }

}

function createTarget() {


    let target = {
        x: random(50, 650),
        y: random(50, 650),
        height: random(15, 50),
        width: random(15, 50),
        fill: "#a40000" // change to black or otherwise to view while debugging
    };


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
        holding = true




    }
    else {
        holding = false
    }

    if (drag == true && holding == true) {
        box.x += mouseX - pmouseX;
        box.y += mouseY - pmouseY;
    }

}



function drawBox() {

    //creates box on screen and sets the fill to red as default 
    push();
    fill(box.fill.r, box.fill.g, box.fill.b);
    rect(box.x, box.y, box.width, box.height);

    pop();

    //controls changing colour from red to blue as you get close to the target
    for (let t of targets) {

        //checks the distance from the current target
        test = dist(t.x, t.y, box.x, box.y)



    }
    //maps the colour to the distance the box is from the target
    c = map(test, 400, 0, 0, 255)
    box.fill.r = c
    box.fill.b = 255 - c


}

function InterFace() {

    let button = createButton('Start Game');
    button.position(width / 2, height / 2);

    if (targets == 0) {
        button.mousePressed(createTarget);
    }


    text(`points: ${points}`, 290, height / 2)
    push();
    textAlign(LEFT, LEFT);
    text(`how to play:\nclick and drag\nthe box to find the\n'hotspot', find 20\nto win`, width - 100, 20)
    pop();
}
let points = 0
function handlePoints() {

    if (test != 0) {
        if (test <= 25) {
            points += 1
            test -= test
            targets.splice(0, 1)
            createTarget();

        }
    }

}

function Win() {

    if (points == 15) {
        textSize(15)
        text('You are a true champion of this game,\nthere is nothing more for me to offer.\ncontinue to play infinitely if you like', 100, 100)
    }
}

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



    text(`x: ${mouseX}`, 250, 400)
    text(`y: ${mouseY}`, 250, 410)

    text(`drag: ${drag}`, 250, 450)
    text(`holding: ${holding}`, 250, 460)

    line(pmouseX, pmouseY, mouseX, mouseY);

    const d = mouseY - dist(mouseX, mouseY, pmouseX, pmouseY,)
    text(`Y test:${d}`, 400, 250)

    text(`Y test:${mouseY - pmouseY}`, 400, 20)


    if (mouseX > pmouseX) {
        const d = dist(pmouseX, pmouseY, mouseX, mouseY)
        text(`${d}`, 5, 250)
        text(`right`, 0, 320)


    }
    else if (mouseX < pmouseX) {
        const d = mouseX - dist(mouseX, mouseY, pmouseX, pmouseY,)
        text(`${d}`, 5, 250)
        text(`left`, 0, 320)
    }

    if (mouseY > pmouseY) {

        text(`down`, 30, 320)
    }
    else if (mouseY < pmouseY) {

        text(`up`, 30, 320)
    }


    text(`dis(box->trgt): ${test}`, 300, 500)
    text(`red: ${c}`, 300, 510)
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
