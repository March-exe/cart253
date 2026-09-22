/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";



// creates 400x400 canvas with webGL active for 3d models,
// sets frame rate to 24 frames per second and sets angle mode to degrees
let img;

async function setup() {
    // Load an image and create a p5.Image object.
    img = await loadImage("./assets/images/stoner-room.jpg");
    createCanvas(400, 400, WEBGL);


    angleMode(DEGREES);

}

//camera([x], [y], [z], [centerX], [centerY], [centerZ], [upX], [upY], [upZ])
//translate(x, y, [z])



//draw function to create bong - because why not?
function draw() {



    // red background
    //background(220, 0, 0);

    // allows user to click and spin the model
    orbitControl();

    // Draw the image as a panorama (360˚ background).
    panorama(img);

    // Add a soft ambient light.
    ambientLight(100);

    // Add light from the image.
    imageLight(img);

    //botton resevoir - sphere
    push();
    //removes stroke lines on surface
    noStroke();

    //makes the object have a shiny surface
    specularMaterial(255);
    emissiveMaterial(150, 0, 255);
    shininess(100);

    translate(0, 100);
    sphere();


    pop();



    //upper neck //
    push();

    noStroke();
    //makes the object have a shiny surface
    specularMaterial(255);
    emissiveMaterial(150, 0, 255);
    shininess(100);

    translate(0, -15)
    cylinder(20, 200)

    pop()


    rotateX(90);


    // smooth torus top of neck //
    push();

    noStroke();
    //makes the object have a shiny surface
    specularMaterial(255);
    shininess(100);
    emissiveMaterial(150, 0, 255);

    translate(0, 0, 115);
    torus(20);

    pop();

    // bowl piece //
    push();

    translate(55, 0, -50);
    rotateZ(90);
    rotateX(-45);

    noStroke();

    //makes the object have a shiny surface
    specularMaterial(255);

    emissiveMaterial(150, 0, 255);
    shininess(100);
    cone(15);

    pop();



    // downstem - clyinder //
    push();
    // removes strokes lines from object
    noStroke();

    //makes the object have a shiny surface
    specularMaterial(255);

    emissiveMaterial(150, 0, 255);
    shininess(100);

    //translates the downstem to the correct position
    translate(35, 0, -70);
    rotateZ(90);
    rotateX(-45);
    cylinder(8, 50);


    pop();





} 