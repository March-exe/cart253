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
        x: 0,
        y: 0,
    },


}
//aniaml / fill  rgb/ position  xy size| mouse / position / x y 
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

function setup() {
    createCanvas(800, 800);

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



    mouse.position.x = mouseX
    mouse.position.y = mouseY


    push();
    noStroke();
    fill(255, 255, 255);
    // animal.position.y = map(mouse.position.y, 800, 0, animal.position.y - 20, animal.position.y - 30);
    //animal.position.x = map(mouseX, 800, 0, mouse.position.x - 20, mrFurious.x - 35);

    // let eY2 = map(mouseY, 800, 0, mrFurious.y - 20, mrFurious.y - 30);
    //let eX2 = map(mouseX, 0, 800, mrFurious.x + 20, mrFurious.x + 30);
    //left pupil
    pop();
    //circle racism
    push();
    fill(animal.fill.r, animal.fill.g, animal.fill.b);
    ellipse(animal.position.x, animal.position.y, animal.position.size);
    pop();


    //aniaml / fill  rgb/ position  xy size| mouse / position / x y 



    //display timer//

    //if the game isnt started and you arent dead, the circle chases you
    if (dead != true && press == false) {
        push();
        textSize(100);
        text(`Click To Start `, 115, 200, 1000);

        push();
        fill(animal.fill.r, animal.fill.g, animal.fill.b);
        //ellipse(animal.position.x, animal.position.y, animal.position.size);
        // ellipse(animal.position.x, animal.position.y, animal.position.size);
        //if the ball doesn not euqal != cursor position thene towards it
        // if ()
        animal.position.x, animal.position.y, animal.position.size
        pop();
    }

    //elasped timer // 
    if (frameCount % 60 == 0 && dead != true) { // if the frameCount is divisible by 60, then a second has passed and you arent dead then timer will count

        elasped += 1
    }

    //EXTRA CODE // -> let elasped = timer - starttime //let s = millis() / 1000; //let sec = second();
    timer = elasped - starttime



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



    if (dead == true) {
        finished = true

    }
}


