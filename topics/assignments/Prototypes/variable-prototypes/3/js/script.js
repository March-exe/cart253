/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
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

function setup() {
    createCanvas(800, 800);

}


let mouse = {

    position: {
        x: mouseX,
        y: mouseY,
    },


}
let animal = {

    fill: {
        r: 255,
        g: 255,
        b: 255
    },

    position: {

        x: 0,
        y: 0,
        W: 0,
        h: 0
    },




}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
 * begining of the game: click to start the game, the cirlce will spawn on a random point on canvas
 * clicking the screen will start the game, text will disappear, timer starts
 * maybe difficulty settings: 
 * easy: static speed, n shit so the circle is easy to escape from
 * normal: speed gets faste over time
 * hard: speed gets faster and more circles spawn in to get u
*/
function draw() {
    background(200, 0, 0);


    ellipse(400, 400, 50);


    //if the game is started and you arent dead, the circle chases you
    if (dead != true && press == false) {

    }
    //if t
    if (frameCount % 60 == 0 && dead != true) { // if the frameCount is divisible by 60, then a second has passed and you arent dead then timer will count

        elasped += 1
    }
    //let elasped = timer - starttime
    let s = millis() / 1000;
    let sec = second();
    timer = elasped - starttime

    push();
    textSize(40);
    text(`${elasped}`, 100, 100, 1000);
    pop();

    if (press == true) {
        push();
        textSize(40);
        text(`${timer}`, 300, 520, 1000);
        pop();



    }

}


// Set the stroke color and weight as soon as the user clicks.
function mouseClicked() {

    press = true
    starttime = elasped
    if (finished != true) {

    }



}

// Set the stroke and fill colors as soon as the user releases
// the mouse.
function mouseReleased() {

    press = false



    if (dead == true) {
        finished = true

    }

}
