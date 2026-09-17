/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";



// Click and drag the mouse to view the scene from different angles.

function setup() {
    createCanvas(400, 400, WEBGL);

    describe('A white sphere on a gray background.');
}

function setup() {
    createCanvas(400, 400, WEBGL);


    frameRate(24);

    angleMode(DEGREES);
}

//camera([x], [y], [z], [centerX], [centerY], [centerZ], [upX], [upY], [upZ])
//translate(x, y, [z])


//draw function to create bong - because why not?
function draw() {
    // red background
    background(220, 0, 0);
    // allows user to click and spin the model
    orbitControl();

    //botton resevoir
    push();
    translate(0, 100)
    sphere()
    pop();
    //upper neck
    push();
    translate(0, -15)
    cylinder(20, 200)
    pop()


    rotateX(90);

    // smooth torus top of neck
    push();
    translate(0, 0, 115);
    torus(20);
    pop();

    push();
    translate(55, 0, -50);
    rotateZ(90);
    rotateX(-45);
    cone(15);
    pop();
    //

    push();
    translate(35, 0, -70);
    rotateZ(90);
    rotateX(-45);
    cylinder(8, 50);
    //
    pop();



} 

}