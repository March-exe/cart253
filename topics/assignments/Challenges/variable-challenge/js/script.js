/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
 */
/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
    // Position and size
    x: 400,
    y: 700,
    size: 100,
    // Colour

    fill: {
        r: 255,
        g: 255,
        b: 255,
    },

    eyebrows: {

        l: 620,
        r: 620
    }

};
let sky = {

    fill: {
        r: 255,
        g: 255,
        b: 255,


    }

}


/**
 * Create the canvas
 */
function setup() {
    createCanvas(800, 800);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {


    sky.fill.b = sky.fill.b - 0.5;
    sky.fill.b = constrain(sky.fill.b, 75, 255);


    sky.fill.g = sky.fill.g - 1;
    sky.fill.g = constrain(sky.fill.g, 0, 200);

    sky.fill.r = sky.fill.r - 0.5;
    sky.fill.r = constrain(sky.fill.r, 75, 200);

    background(sky.fill.r, sky.fill.g, sky.fill.b);

    // Draw Mr. Furious  HEAD as a coloured circle
    push();
    noStroke();
    // Remap mouseY from [0, 800] to [0, 255]
    let c = map(mouseY, 800, 0, 0, 255);

    //remapped both X and Y head coordinates to be effected by mouse movement,
    //making it so when the mouse is closer to Mr.furious, his head shakes 
    // randomly by -5-5 pixel from the original coordinates
    let hY = map(mouseY, 700, 100, mrFurious.y + random(-5, 5), mrFurious.y);
    let hX = map(mouseX, 700, 100, mrFurious.x + random(-5, 5), mrFurious.x);


    //let y = random(700, 710);
    //mrFurious.y
    fill(mrFurious.fill.r, c, c);
    ellipse(hX, hY, mrFurious.size);
    pop();

    // Style the eyebrows.
    push();
    stroke('black');
    strokeWeight(5);
    // eyebrows
    let b = map(mouseY, 0, 800, 620, 675);

    line(350, 640, 395, b);
    line(450, 640, 405, b);

    //  push();
    // mrFurious.eyebrows.l = constrain(mr.Furious.eyebrows.l, 620, 675);
    // mrFurious.eyebrows.r = constrain(mr.Furious.eyebrows.r, 620, 675);
    // pop();


    //620 - 675
    //620 - 675

    pop();


    // mr furious body
    push();
    fill(255, 255, 255);
    square(mrFurious.x - 50, mrFurious.y + 50, mrFurious.size);
    pop();

    //Mr Furious EYES
    push();
    noStroke();
    fill(mrFurious.fill.r - 225, mrFurious.fill.g - 225, mrFurious.fill.b - 225);

    //left eye
    ellipse(mrFurious.x - 25, mrFurious.y - 25, mrFurious.size - 75);
    //right eye
    ellipse(mrFurious.x + 25, mrFurious.y - 25, mrFurious.size - 75);
    pop();

    push();
    noStroke();
    fill(255, 255, 255);
    let eY = map(mouseY, 800, 0, mrFurious.y - 20, mrFurious.y - 30);
    let eX = map(mouseX, 800, 0, mrFurious.x - 20, mrFurious.x - 35);

    let eY2 = map(mouseY, 800, 0, mrFurious.y - 20, mrFurious.y - 30);
    let eX2 = map(mouseX, 0, 800, mrFurious.x + 20, mrFurious.x + 30);
    //left pupil
    ellipse(eX, eY, mrFurious.size - 90);
    //right pupil
    ellipse(eX2, eY2, mrFurious.size - 90);
    pop();


    // 

    //BIRD
    push();
    noCursor();
    fill(0, 0, 0);
    ellipse(mouseX, mouseY, 20);
    rect(mouseX - 30, mouseY, 60, 5);
    pop();
    push();
    fill(200, 200, 0);
    triangle(mouseX - 10, mouseY, mouseX + 10, mouseY, mouseX, mouseY + 20);
    pop();



}

//constrain(n, low, high)

