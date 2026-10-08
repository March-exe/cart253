/**
 * Escape the ball 2.0
 * Marciano Faugno
 * 
 * trying to expand on the orginal "3" project from last week. 
 * goal of this 2.0 is to have it reset you on kill. 
 * 
 * new additions from previous version: games ends with overlap, double click to reset game, cleaned up code into seperate functions
 * 
 * 
 */

"use strict";

/**
 * creates canvas. on "clikc to start, loop();" 
 * change start = true, dead = false
 * if animal.position == mouse.position, dead == true - restart
 * 
*/

// elasped time = time since program start
// starttime = time since you clicked start
//timer = elasped time = starttime
//dead = boolean to see if mouse and circle == the same
//press = boolean to check if mouse has been pressed

let elasped = 0;
let starttime = 0;
let timer = 0

let dead = false
let press = false



let mouse = {

    position: {
        x: undefined,
        y: undefined,
    },


}
//aniaml / fill - rgb / position - xy size| mouse / position - x y 
let animal = {

    fill: {
        r: 255,
        g: 255,
        b: 255
    },

    position: {

        x: 400,
        y: 400,
        size: 50,
    },
    speed: 0.05

}

// creates a 800x800 pixel canvas
function setup() {
    createCanvas(800, 800);

}

/**
 * begining of the game: click to start the game, the cirlce will spawn on a random point on canvas
 * clicking the screen will start the game, text will disappear, timer starts
 * maybe difficulty settings: 
 * easy: static speed, n shit so the circle is easy to escape from
 * normal: speed gets faste over time
 * hard: speed gets faster and more circles spawn in to get u
*/
function draw() {
    background(200, 0, 0);

    //sets mouse.position.x/y to mouseX/Y
    mouse.position.x = mouseX
    mouse.position.y = mouseY

    userInterface();

    //checks for mouse and circle overlap 
    death();

    //builds the circle 
    //controls ball movement/position on game start
    animalcircle();


    //DEBUGGGING EXCEPT TIMER - shows cirlce & mouse position
    //and death boolean
    //debugging();


}
// if (mouse not touching; if not dead and animal press is false, and )


// Set the stroke color and weight as soon as the user clicks.
function mouseClicked() {

    press = true
    starttime = elapsed



}

// Set the stroke and fill colors as soon as the user releases
// the mouse.
function mouseReleased() {

    press = false

}

function death() {

    //checking for overlap of mouse and circle
    if (mouse.position.x >= animal.position.x - 20 &&
        mouse.position.x <= animal.position.x + 20 &&
        mouse.position.y <= animal.position.y + 20 &&
        mouse.position.y >= animal.position.y - 20) {

        dead = true

    }
    else {
        dead = false
    }
}



function animalcircle() {

    //builds circle and controls position & colour
    push();
    noStroke();
    fill(animal.fill.r, animal.fill.g, animal.fill.b);
    ellipse(animal.position.x, animal.position.y, animal.position.size);
    pop();

    //controls when the circle starts to move with boolean
    //moves by lerping its position to the mouse
    if (press == true) {

        animal.position.x = lerp(animal.position.x, mouseX, animal.speed);//+ mouse.position.x / 100 + mouse.position.x / 100
        animal.position.y = lerp(animal.position.y, mouseY, animal.speed);//+ mouse.position.y / 1000

        //increases speed after game has started (ie. press == true)
        animal.speed += 0.0005
        //changes ball colour to indicate increase in speed
        animal.fill.g -= 0.25
    }
}

function userInterface() {

    //elasped timer // 
    if (frameCount % 60 == 0 && dead != true) { // if the frameCount is divisible by 60, then a second has passed and you arent dead then timer will count

        elasped += 1
    }
    timer = elasped - starttime

    //Click to start
    if (dead != true && press == false) {

        //display "click to start" while game is not active
        push();
        textSize(100);
        text(`Click To Start `, 115, 200, 1000);
        pop();

    }

    //timer 
    if (press == true) {
        push();
        textSize(40);
        text(`timer: ${timer} `, 300, 520, 1000);
        pop();

    }

    if (dead != false && press != false) {
        push();
        textSize(100);
        text(`GAME OVER`, 115, 200, 1000);
        pop();

        push();
        textSize(40);
        text(`Double click to restart`, 115, 300, 1000);
        pop();
        noLoop()


    }
}

function reset() {

    elasped = 0;
    starttime = 0;
    timer = 0

    dead = false
    press = false
    animal.speed = 0.05
    animal.fill.g = 255
    loop();

}

function doubleClicked() {

    reset();

}


function debugging() {

    push();
    textSize(40);
    //elaped time - differnet to timer as it tracks when the game was started
    text(`elaped: ${elasped} `, 100, 100, 1000);
    text(`speed: ${animal.speed} `, 100, 650, 1000);

    //displays mouse positions
    text(`${mouse.position.x}`, 400, 100, 1000);
    text(`${mouse.position.y}`, 400, 50, 1000);

    //displays ball positions
    text(`${animal.position.x}`, 400, 700, 1000);
    text(`${animal.position.y}`, 400, 750, 1000);

    //displays boolean
    text(dead, 400, 200, 1000)
    text(press, 400, 500, 1000)
    pop();

}



//attempt at creating difficulty system but not motivated enough right now :/
/** 
 * 
 * //let easyButton
//let mediumButton
//let hardButton
function buttons() {


    easyButton = createButton('easy');
    easyButton.position(400, 1090);
    easyButton.size(100, 50);
    mediumButton = createButton('medium');
    mediumButton.position(500, 1090);
    mediumButton.size(100, 50);
    hardButton = createButton('hard');
    hardButton.position(600, 1090);
    hardButton.size(100, 50);

    easyButton.mousePressed(easy);
    mediumButton.mousePressed(medium);
    hardButton.mousePressed(hard);
}

function easy() {
    animal.speed = 0.05
}

function medium() {
    animal.speed += 0.0005

}

function hard() {
    animal.speed += 0.0009
}
    */