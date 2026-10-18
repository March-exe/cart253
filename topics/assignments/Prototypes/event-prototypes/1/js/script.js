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
};
let imgPos = {
    x: 25,
    y: 1300
};

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
    onHover();



}



function desktop() {

};

function taskbar() {
    //grey task bar at the bottom
    push();
    //grey colour
    fill(172, 172, 172);
    noStroke();
    rect(0, cnvs.h - 100, cnvs.w);
    pop();
    //other elements inside taskbar
    start();
    clock();
};

function windows() { };

function clock() {
    push();
    //lines for border around clock
    //x1,y1,x2,y2
    stroke(0);
    //top
    line(clok.x - 5, clok.y - 40, clok.x + 150, clok.y - 40)
    //left
    line(clok.x - 5, clok.y - 40, clok.x - 5, clok.y + 15)

    stroke(255);
    //bottom
    line(clok.x - 5, clok.y + 15, clok.x + 150, clok.y + 15)
    //right
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
function start() {

    //PLACES IMAGES ON THE DESKTOP 
    //image(img, x, y, [width], [height])
    image(img, imgPos.x, imgPos.y, 150, 50);
    push();
    //lines for border around clock

    //x1,y1,x2,y2
    stroke(0);
    //top
    line(imgPos.x - 10, imgPos.y - 5, imgPos.x + 160, imgPos.y - 5)
    //left
    line(imgPos.x - 10, imgPos.y - 5, imgPos.x - 10, imgPos.y + 60)

    stroke(255);
    //bottom
    line(imgPos.x - 10, imgPos.y + 60, imgPos.x + 160, imgPos.y + 60)
    //right
    line(imgPos.x + 160, imgPos.y - 5, imgPos.x + 160, imgPos.y + 60)


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

function onHover() {
    if (25 < mouseX && mouseX < 200 && mouseY < 1300 + 150 && mouseY > 1300) {
        cursor(HAND);
    }
    else {
        cursor(ARROW);
    }


}