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

    //sets mouse.position.x/y to mouseX/Y since you cannot within variable
    mouse.position.x = mouseX
    mouse.position.y = mouseY

    // animal.position.x = lerp(animal.position.x, mouseX, 0.05);//+ mouse.position.x / 100 + mouse.position.x / 100
    //animal.position.y = lerp(animal.position.y, mouseY, 0.05);//+ mouse.position.y / 1000

    // animal.position.x = constrain(animal.position.x, 0, mouse.position.x)
    //animal.position.y = constrain(animal.position.y, 0, mouse.position.y)


    //circle racism
    push();
    noStroke();
    fill(animal.fill.r, animal.fill.g, animal.fill.b);
    ellipse(animal.position.x, animal.position.y, animal.position.size);
    pop();


    //aniaml / fill  rgb/ position  xy size| mouse / position / x y 

    //if the game isnt started and you arent dead, the circle does not chases you, program stays idle
    if (dead != true && press == false) {

        //display "click to start" while game is not active
        push();
        textSize(100);
        text(`Click To Start `, 115, 200, 1000);
        pop();
    }

    //elasped timer // 
    if (frameCount % 60 == 0 && dead != true) { // if the frameCount is divisible by 60, then a second has passed and you arent dead then timer will count

        elasped += 1
    }

    //EXTRA CODE - not needed // -> let elasped = timer - starttime //let s = millis() / 1000; //let sec = second();
    timer = elasped - starttime

    // simply shows mouseX and elapsed time for debugging
    push();
    textSize(40);
    text(`elaped: ${elasped} `, 100, 100, 1000);
    text(`${mouse.position.x}`, 400, 100, 1000);
    pop();

    if (press == true) {
        push();
        textSize(40);
        text(`timer: ${timer} `, 300, 520, 1000);
        pop();

        animal.position.x = lerp(animal.position.x, mouseX, 0.05);//+ mouse.position.x / 100 + mouse.position.x / 100
        animal.position.y = lerp(animal.position.y, mouseY, 0.05);//+ mouse.position.y / 1000




    }





}
// if (mouse not touching; if not dead and animal press is false, and )


// Set the stroke color and weight as soon as the user clicks.
function mouseClicked() {

    press = true
    starttime = elaspe


    if (dead != true) {


    }



}

// Set the stroke and fill colors as soon as the user releases
// the mouse.
function mouseReleased() {

    press = false



    if (mouse.position.x == animal.position.x / 2 && mouse.position.y == animal.position.y / 2) {

        dead == true
        //game over

    }
}


