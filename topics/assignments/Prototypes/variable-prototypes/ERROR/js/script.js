/**
 * ERROR !
 * Marciano Faugno
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
//creates a 

let img;
let imgTwo;

let desktop = {

    windowPosition: {
        //og: 300, 400
        x: 300,
        y: 400
    },

    mColour: {
        r: 172,
        g: 172,
        b: 172,
    },

    sColour: {

        r: 0,
        g: 1,
        b: 111,
    },

    sizeWindow: {

        w: 300,
        h: 400,

    },

    lineColour: {

        w: 255,
        b: 0,

    },

}

// creates a border varialbe to create properties for the white/black lines that create the 3d effect on the window rectangle
let border = {

    vertLineCo: {

        x1: desktop.windowPosition.x,
        y1: desktop.windowPosition.y,
        x2: desktop.windowPosition.x,
        y2: desktop.windowPosition.y + 400,


    },


    horzLineCo: {

        x1: desktop.windowPosition.x,
        y1: desktop.windowPosition.y - 1,
        x2: desktop.windowPosition.x + 300,
        y2: desktop.windowPosition.y - 1
    },

}
// creates a wdw variable to create properties for the purple rectangle and the section box within the window 
let wdw = {

    pRect: {

        x: desktop.windowPosition.x + 5,
        y: desktop.windowPosition.y + 5,
        w: 290,
        h: 25

    },


    selectBox: {

        x: desktop.windowPosition.x + 100,
        y: desktop.windowPosition.y + 300,
        w: 100,
        h: 35
    },

    exitBox: {
        x: 10,
        y: 951,
        x2: 75,
        y2: 975

    },
    textPosition: {

        x1: desktop.windowPosition.x + 10,
        y1: desktop.windowPosition.y + 24,
        x2: desktop.windowPosition.x + 125,
        y2: desktop.windowPosition.y + 325,
        x3: desktop.windowPosition.x + 10,
        y3: desktop.windowPosition.y + 60,
    },



    text: {
        one: "System ERROR :(",
        two: "Close",
        three: "Runtime ERROR\n press Close to quit"


    },

}


// THE ACTUAL CANVAS //



async function setup() {

    img = await loadImage('assets/images/start.png');
    imgTwo = await loadImage('assets/images/icons.png');
    createCanvas(1000, 1000);
    background(0, 116, 115);



}


function draw() {

    //CLOCK AND TASK BAR//


    //bottom task bar
    push();
    //grey colour
    fill(172, 172, 172);
    noStroke();
    rect(0, 950, 1000, 100);
    pop();
    //
    //PLACES IMAGES ON THE DESKTOP // image(img, x, y, [width], [height])
    image(img, wdw.exitBox.x, wdw.exitBox.y, 95, 45);
    image(imgTwo, 25, 25, 85, 350);

    //time in the corner//
    push();
    stroke(80);
    //lines for border around clock
    //horizontal lines
    line(900, 960, 980, 960)
    line(900, 990, 980, 990)
    //vertical lines
    line(900, 960, 900, 990)
    line(980, 960, 980, 990)
    pop();
    //clock
    //all the clock code is credited within the readme.md file - i took this code to put in this project to further make the canvas look like a real OS
    var currentHour = hour();
    var currentMinute = minute();
    var currentSecond = second();

    var currentTime = currentHour + ':' + nf(currentMinute, 2) + ':' + nf(currentSecond, 2);
    //manaspace = loadFont("assets/manaspace/manaspc.ttf"); // left over code for trying to change the font
    // might get around to it if i have some more time :D
    push();
    fill(255);
    noStroke();
    //textFont(manaspace, 20); // leftovers
    textSize(20);
    text(currentTime, 900, 983);
    pop();
    //BOTTOM TASK BAR WILL NOT CHANGE

    // grey rect "window"
    push();
    fill(desktop.mColour.r, desktop.mColour.g, desktop.mColour.b);
    noStroke();
    rect(desktop.windowPosition.x, desktop.windowPosition.y, desktop.sizeWindow.w, desktop.sizeWindow.h);
    pop();


    //WR//

    //purple rect
    push();
    fill(desktop.sColour.r, desktop.sColour.g, desktop.sColour.b);
    noStroke();
    rect(wdw.pRect.x, wdw.pRect.y, wdw.pRect.w, wdw.pRect.h);
    pop();

    //selection area//
    push();
    stroke(15);
    fill(desktop.mColour.r, desktop.mColour.g, desktop.mColour.b);
    rect(wdw.selectBox.x, wdw.selectBox.y, wdw.selectBox.w, wdw.selectBox.h);

    //top text
    push();
    fill(255);
    noStroke();
    //textFont(manaspace, 20);
    textSize(20);
    text(wdw.text.one, wdw.textPosition.x1, wdw.textPosition.y1);
    pop();
    // bottom text
    push();
    fill(255);
    noStroke();
    //textFont(manaspace, 20);
    textSize(20);
    text(wdw.text.two, wdw.textPosition.x2, wdw.textPosition.y2);
    pop();
    //middle text
    push();
    fill(0);
    noStroke();
    textSize(20);
    text(wdw.text.three, wdw.textPosition.x3, wdw.textPosition.y3);
    pop();

    //BORDER//
    // left and top white lines
    push();
    stroke(desktop.lineColour.w);
    line(border.vertLineCo.x1, border.vertLineCo.y1, border.vertLineCo.x2, border.vertLineCo.y2);
    //top
    line(border.horzLineCo.x1, border.horzLineCo.y1, border.horzLineCo.x2, border.horzLineCo.y2)

    //right and bottom black lines
    stroke(desktop.lineColour.b);
    line(border.vertLineCo.x1 + 300, border.vertLineCo.y1 + 1, border.vertLineCo.x2 + 300, border.vertLineCo.y2 - 1);

    //bottom
    line(border.horzLineCo.x1, border.horzLineCo.y1 + 400, border.horzLineCo.x2, border.horzLineCo.y2 + 400);

    pop();


}
// on mouse click, if the mouse is within range of the 'select box',
// updates window position to a random number and updates all previous variables
function mouseClicked() {
    if (wdw.selectBox.x < mouseX && mouseX < wdw.selectBox.x + 100 && mouseY > wdw.selectBox.y && mouseY < wdw.selectBox.y + 75) {

        //updates window position x to random number from 50 to 699
        //updates window position y to random number from 50 to 499

        desktop.windowPosition.x = random(110, 700)
        desktop.windowPosition.y = random(50, 500)


        //updates every variable so that the elements
        //on screen stay together to create the window 

        //mouse cliked
        border.vertLineCo.x1 = desktop.windowPosition.x
        border.vertLineCo.y1 = desktop.windowPosition.y
        border.vertLineCo.x2 = desktop.windowPosition.x
        border.vertLineCo.y2 = desktop.windowPosition.y + 400
        //mouse clicked
        border.horzLineCo.x1 = desktop.windowPosition.x
        border.horzLineCo.y1 = desktop.windowPosition.y - 1
        border.horzLineCo.x2 = desktop.windowPosition.x + 300
        border.horzLineCo.y2 = desktop.windowPosition.y - 1
        //mouse clicked
        wdw.pRect.x = desktop.windowPosition.x + 5
        wdw.pRect.y = desktop.windowPosition.y + 5
        wdw.pRect.w = 290
        wdw.pRect.h = 25
        //mouse clicked
        wdw.selectBox.x = desktop.windowPosition.x + 100
        wdw.selectBox.y = desktop.windowPosition.y + 300
        wdw.selectBox.w = 100
        wdw.selectBox.h = 35
        //mouse clicked
        wdw.textPosition.x1 = desktop.windowPosition.x + 10
        wdw.textPosition.y1 = desktop.windowPosition.y + 24
        wdw.textPosition.x2 = desktop.windowPosition.x + 125
        wdw.textPosition.y2 = desktop.windowPosition.y + 325
        wdw.textPosition.x3 = desktop.windowPosition.x + 10
        wdw.textPosition.y3 = desktop.windowPosition.y + 60
        //mouse clicked
        wdw.text.one = "System ERROR :("
        wdw.text.two = "Close"
        wdw.text.three = "Runtime ERROR\n press Close to quit"

    }

}
//start
function doubleClicked() {

    if (wdw.exitBox.x < mouseX && mouseX < wdw.exitBox.x + 170 && mouseY < wdw.exitBox.y + 300 && mouseY > wdw.exitBox.y) {
        // if (10 < mouseX && mouseX < 90 && mouseY < 961 && mouseY > 951 

        window.open('https://march-exe.github.io/cart253/topics/assignments/Prototypes/variable-prototypes/variable-prototypes.html', '_blank');



        //if (0 < mouseX && mouseX < 95 && 950 < mouseY && mouseY < 100)
        //image(img, x, y, [width], [height]) (10, 951, 95, 45);

    }
}
//my briefcase
function mousePressed() {
    if (40 < mouseX && mouseX < 90 && mouseY < 370 && mouseY > 320) {
        // if (10 < mouseX && mouseX < 90 && mouseY < 961 && mouseY > 951 

        window.open('https://drive.google.com/file/d/1uQoQ8wFBTn9cHN-J8YbRsA4Eeb92k7U4/view?usp=drive_link', '_blank');
    }

    if (40 < mouseX && mouseX < 90 && mouseY < 305 && mouseY > 265) {
        // if (10 < mouseX && mouseX < 90 && mouseY < 961 && mouseY > 951 

        window.open('https://github.com/March-exe/cart253/tree/main/topics/assignments/Prototypes/variable-prototypes/ERROR', '_blank');
    }
}

//inbox

//rect(40, 20, 50, 50)
// rect(40, 85, 50, 50)
// rect(40, 150, 50, 50)
// rect(40, 210, 50, 50)
// rect(40, 265, 50, 50)
// rect(40, 320, 50, 50)