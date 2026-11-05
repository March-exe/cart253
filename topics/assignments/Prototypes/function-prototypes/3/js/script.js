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
*/
function setup() {
    createCanvas(600, 700)

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/

let x = 0;

async function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES); // Switch to degrees
    frameRate(15);
    breathe();
    drawSinWave();



}


let fill1 = 0
let fill2 = 255

count = 100

let circles = []

function draw() {

    background('skyblue')

    breathe();




    while (count != 0) {

        createCircle();
        count = count - 1


        for (let i of circles) {




        }



    }

    debugging();
}


function createCircle() {

    const circle = {
        colour: fill(fill1, fill2),
        x: 50,
        y: 50,
        size: 100,

    }

    circles.push(circle)
    return circle
}

// visualize the sin wave ... a continuous oscillating wave
// it oscillates between (-1 and 1) as the input angle increases 
// you can change the height of the wave by scaling the y value

// it is a repeating wave that has a height (amplitude)
// it has a period: this is the horizontal distance or time 
// it takes for the wave to complete one full cycle before it starts repeating.

function drawSinWave() {
    //let x =0;
    for (let i = 0; i < 360; i += .15) {
        if (x < width) {
            x += .15;
        }

        //run the for loop from 0-360 degrees
        let yvalue = sin(i) * 100; //scale to -100 or 100
        //you will see that as i increments the sin(i) will change
        //console.log(yvalue) 
        //fill(255,0,0)
        noFill()

        ellipse(x, yvalue + 250, 2, 2)
        // center of y is 250 
        //sin() will increase from 250 and then decrease from 250 down 

    }

}

let angle = 0;
let amplitude = 125;





function breathe() {
    // if you change the angle speed it will go faster/slower
    //if you change the amplitude it will go bigger/smaller
    angle += 1;
    // if you change the 
    let scaleValue = sin(angle) * amplitude;
    ellipse(width / 2, height / 2, scaleValue, scaleValue);

}
function debugging() {


    push();
    textSize(50);
    text(`X;${mouseX}`, 100, 100)
    text(`array;${circles}`, 100, 100)
    pop();

}