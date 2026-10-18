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
let cnvs = {
    w: 3000,
    h: 1375,

};
let clok = {
    x: cnvs.w - 200,
    y: cnvs.h - 40,
}


let img;

/*
preloads setup function so that all images are loaded in before start
**/
async function setup() {

    img = await loadImage('assets/images/startnew.png');

    createCanvas(cnvs.w, cnvs.h);

}


/**
 * draws a fake desktop to look like windows 98. on the canvas, you will find a plethora of icons, messages and things to discover
*/
function draw() {
    background(0, 116, 115);
    taskbar();


}



function desktop() {

};

function taskbar() {
    push();
    //grey colour
    fill(172, 172, 172);
    noStroke();
    rect(0, cnvs.h - 100, cnvs.w);
    pop();
    //PLACES IMAGES ON THE DESKTOP 
    //image(img, x, y, [width], [height])
    image(img, 25, 1300, 150, 50);

    clock();
};

function windows() { };

function clock() {
    push();
    stroke(80);
    //lines for border around clock

    //x1,y1,x2,y2
    //vertical lines//
    //top
    line(clok.x - 5, clok.y - 40, clok.x + 150, clok.y - 40)
    //bottom
    line(clok.x - 5, clok.y + 15, clok.x + 150, clok.y + 15)
    //horizontal lines
    line(clok.x - 5, clok.y - 40, clok.x - 5, clok.y + 15)
    line(clok.x + 150, clok.y - 40, clok.x + 150, clok.y + 15)
    pop();
    //clock
    //all the clock code is credited within the readme.md file - i took this code to put in this project to further make the canvas look like a real OS
    var currentHour = hour();
    var currentMinute = minute();
    var currentSecond = second();

    var currentTime = currentHour + ':' + nf(currentMinute, 2) + ':' + nf(currentSecond, 2);

    //clock text
    push();
    fill(255);
    noStroke();
    textSize(35);
    text(currentTime, clok.x, clok.y);
    pop();
};

function doubleClicked() {
    //image(img, 25, 1300, 150, 50);
    if (25 < mouseX && mouseX < 200 && mouseY < 1300 + 150 && mouseY > 1300) {
        // if (10 < mouseX && mouseX < 90 && mouseY < 961 && mouseY > 951 

        window.open('https://march-exe.github.io/cart253/topics/assignments/Prototypes/variable-prototypes/variable-prototypes.html', '_blank');



        //if (0 < mouseX && mouseX < 95 && 950 < mouseY && mouseY < 100)
        //image(img, x, y, [width], [height]) (10, 951, 95, 45);

    }
}