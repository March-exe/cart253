/**
 * Hot or Cold
 * Maricano Faugno
 * 
 * Hot or Cold is a game where you move a box with you mouse
 * around the screen to find the Hotspot as i will call it. 
 * the goal of the game is to collect points by finding the 
 * hotspots around the canvas. 
 * these spots spawn in as you go from one to the next
 * if you get 15 points, you win the game
 */

"use strict";

/**
 * set up is very simple, only creating the canvas.
 *
*/

//creates an array to track and hold targets
const targets = []

//creates a box for the user to use
const box = {
    x: 450,
    y: 450,
    height: 50,
    width: 50,
    fill: { r: 255, g: 0, b: 255 }
}

//test is a variable to 
// measure the distance from the box to the target
let test = 0

//c is a variables to control the rbg levels of the box
let c = 0

// drag checks to see if the user is dragging the mouse within the box
let drag = false

//holding checks to see if the user is hovering over the box
let holding = false
//points counter
let points = 0


function setup() {
    createCanvas(700, 700);
}


/**
 * draws a red canvas. creates the box on screen. 
 * checks if the array is greater than zero, if so it draws the given target
 * the rest of the variables are more self explainatory
*/
function draw() {
    background("#a40000");


    drawBox();

    if (targets.length > 0) {
        for (let trgt of targets) {

            drawTarget(trgt)
        }

    }

    //takes the box object and allows it to move
    moveBox(box);

    //counts and handles points in the game, deleted prevous target after point is given
    handlePoints();


    //displays instructions, points and the start game button
    InterFace();
    //after 20 points you get text telling you youve won
    Win();

    //used for debugging - keep commented
    //debugging();

}


//checks to see if the mouse was dragged within the box, if so, change drag to true otherwise its false
function mouseDragged() {

    if (mouseX > box.x && mouseX < box.x + box.width && mouseY > box.y && mouseY < box.y + box.height) {


        if (holding == true) {
            drag = true
        }
        else { drag = false }


    }
}

//a second measure to ensure that drag is always false when not on the box. if you release the mouse after dragging it around it will stop
function mouseReleased() {

    if (mouseX > box.x && mouseX < box.x + box.width && mouseY > box.y && mouseY < box.y + box.height) {

        drag = false
    }
    else { drag = false }

}


//creates a target object with random dimensions and position with the same colour as the BG
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

//draws the target when its called in the draw function
function drawTarget(target) {
    push();
    noStroke();
    fill(target.fill);
    ellipse(target.x, target.y, target.height, target.width);
    pop();


}

//hold variable turns true if you hove over the box, sets the mouse to a hand to indicate interactivity
function moveBox(box) {


    if (mouseX > box.x && mouseX < box.x + box.width && mouseY > box.y && mouseY < box.y + box.height) {
        holding = true
        if (holding == true) {
            cursor(HAND)
        }
    }
    else {
        holding = false
        if (holding == false) { cursor(ARROW) }

    }
    //if both drag and holding are true then the box can be 'picked up' and moved
    if (drag == true && holding == true) {
        box.x += mouseX - pmouseX;
        box.y += mouseY - pmouseY;
    }

}


//draws the box at its given position in red by default
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
    //as you move away from the target, it turns more blue
    box.fill.b = 255 - c


}

function InterFace() {

    //creates a start button in the center of the screen
    let button = createButton('Start Game');
    button.position(windowWidth / 2 - 50, windowHeight / 2 - 50);

    //button only works when targets is equal to zero
    if (targets == 0) {
        button.mousePressed(createTarget);
    }

    //text displays points
    text(`points: ${points}`, width / 2 - 30, height / 2)
    //text displays instructions
    push();
    textAlign(LEFT, LEFT);
    text(`how to play:\nclick and drag\nthe box to find the\n'hotspot', find 15\nto win`, width - 100, 20)
    pop();
}

//when the distance between the box and trgt are less than 25, you gain a point
//the target is then deleted and a new one is randomly created
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

//win function shows the user a message when you get 15 points
function Win() {

    if (points == 15) {
        textSize(15)
        text('You are a true champion of this game,\nthere is nothing more for me to offer.\ncontinue to play infinitely if you like', 100, 100)
    }
}

//check overlap function comes from pippin
function checkOverlap(rectA, rectB) {
    return (rectA.x + rectA.width / 2 > rectB.x - rectB.width / 2 &&
        rectA.x - rectA.width / 2 < rectB.x + rectB.width / 2 &&
        rectA.y + rectA.height / 2 > rectB.y - rectB.height / 2 &&
        rectA.y - rectA.height / 2 < rectB.y + rectB.height / 2);
}


//random debugging uses and information needed for me to create this game
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
