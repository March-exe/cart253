/**
 * Lines
 * Pippin Barr
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */


function draw() {
    background("red");

    let step = 0

    for (let x = 0, clr = 0; x <= width; x += 5, clr += 25) {


        step += mouseX
        rotate(step)
        translate(map(x, 50, width, 50, width)
        )

        // translate(x, y, [z])
        //map(value, start1, stop1, start2, stop2)

        stroke(clr);
        line(x, 0, x, height);

        for (let y = 0, clr = 0; y <= height; y += 25, clr += 25) {

            stroke(clr);
            line(0, y, width, y);


        }

    }

}