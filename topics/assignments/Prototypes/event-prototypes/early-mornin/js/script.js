/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let dialogueOption = 0

let hideFour = true
let continu = false
let continuGate = 0
let endingsDone = 0
let reset = false

let greenOpen = false
let blueOpen = false
let blackOpen = false



let goToBed = false
let stayAwake = false
let stayStill = false
let gate1 = false
let gate2 = false
let getOutOfBed = false
let green = false
let blue = false
let black = false
let sitDown = false
let smoke = false
let youAreOkay = false
let sayNothing = false
let goBackInside = false
let stayOutside = false
let nothing = false
let whatIsThis = false
let goToBedEnd = false
let lifeChoices = false
let answer = false
let staySilent = false



/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
let mX;
let mY;
let DTM;


let photoA = {

    x: 300,
    y: 100,
    w: 400,
    h: 200,
    fill: { r: 50, g: 50, b: 50, }
}

//left button
let buttonOne = {

    x: 300,
    y: 350,
    w: 100,
    h: 50,
}

//middle button
let buttonTwo = {

    x: 450,
    y: 350,
    w: 100,
    h: 50,
}

let buttonFour = {

    x: 450,
    y: 425,
    w: 100,
    h: 50,
}

//right button
let buttonThree = {

    x: 600,
    y: 350,
    w: 100,
    h: 50,
}

let scenes = {
    one: {
        one: "you wake up from a bad nightmare, its the\nmiddle of the night and all you can hear\nis the faint hum of the city by your\nwindow. ",
        two: "laying in bed half-untucked, the glint of\nyour night-light catches the corner\nof your eye",
    },
    two: {
        one: "while staring at the ceiling of your\nshadow-cast bedroom, you contemplate your\nlife decisions for an unknown amount of\ntime.",
        two: "its hard to sleep most nights. ",
        three: "to sleep or not to sleep..",


    },
    //3-5 is staying still
    three: {
        one: "you stay still, hoping that it would cause\nyou to drift back to bed - its not\nworking.",
        two: "you continue to lay, motionless.",

    },
    four: {
        one: "you feel the cold breeze of autumn through\nyour cracked window. a shiver runs down\nyour spine.",
        two: "you remember you have work tomorrow..",

    },
    five: {
        one: "you choose to continuously get lost in\nthe depths of your untamed mind.",
        two: "an unknown amount of time has passed. ",
        three: "the voice urging you to go back to sleep\nis no longer audible."

    },
    six: {
        one: "after staring at the ceiling for an\nunknown amount of time, your eyes start\nto soften as you are drawn back into the\nvoid of your subconscious.",
        two: "you fear of continuing the nightmare\nbut you already forgot what it was\nabout... you fall back asleep."

    },
    seven: {
        one: "the urge to escape the grasp of your\nunconscious becomes too strong.",
        two: "you get out of bed and put on some Pjs.",
        three: "even the clothes you wear can be haunting.",
    },
    eight: {
        green: "you put on your green PJs, it reminds\nyour of how far youve come and the\ngrowth you still have.",
        blue: "you put on your blue PJs, you are\nreminded of when things used to be simpler",
        black: "you put on your black PJs, you are\nreminded of home",
        one: "you tread quietly across the\ncreaky floorboards of your apartment.",
        two: "as much as you try to stay silent, you\nfeel as though your movement might've\nbeen disruptive. ",
        three: "after using the bathroom, you realize you\nhave no good reason to be awake.",
    },
    //smoking
    nine: {
        one: "thinking it will help you fall back to\nsleep, you sit down with the company of\nyour rolling tray.",
        two: "you find bud and papers already waiting\nfor you.",
        three: "while rolling the joint, your eyes carry\nthe weight of bad decisions.",
        four: "after stepping onto your balcony, your\nlighter becomes a beacon in a sea of\ndarkness. ",
        five: "you quietly enjoy the smoke.",
        six: "the stars silently snooze a lullaby that\nplays peacfully with the moon's glare.",
    },
    ten: {

        one: "you finish smoking and sit for a minute\nlonger, enjoying the\npeaceful night you have awoken to.",
        two: "the stars start to twinkle.",
        three: "you are reminded of the phrase:\n'you are the universe experiencing itself.'",
        four: "after putting out the smoke, you sit for\na minute longer, enjoying the\npeaceful night you have awoken to.",

    }


}
async function setup() {

    createCanvas(1000, 500)

    DTM = await loadFont('./assets/fonts/DTM-Mono.otf');

    mY = mouseY
    mX = mouseX

    dialogueOption += 0

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0, 25, 25)
    debugging();

    screenObjects();

    if (reset == true) {
        push();
        textFont(DTM);
        textSize(15);

        fill(255);
        text(`endings complete: ${endingsDone}/4`, 300, 80)
        pop();

    }


}
function screenObjects() {

    push();
    fill(photoA.fill.r, photoA.fill.g, photoA.fill.b)
    rect(photoA.x, photoA.y, photoA.w, photoA.h);
    pop();


    onHover(buttonOne, buttonTwo, buttonThree, buttonFour);

    makeButton(buttonOne);
    makeButton(buttonTwo);
    makeButton(buttonThree);

    if (hideFour != true) {
        makeButton(buttonFour);
    }


    ifHandler();


    //photo area

    //buttons

}
function makeButton(button) {
    push();
    fill(50);
    rect(button.x, button.y, button.w, button.h)
    pop();
}

function onHover(button, buttonTwo, buttonThree, buttonFour) {

    cursor(ARROW);


    if (mouseX > button.x && mouseX < button.x + button.w && mouseY > button.y && mouseY < button.y + button.h) {

        cursor(HAND);


    }


    if (mouseX > buttonTwo.x && mouseX < buttonTwo.x + buttonTwo.w && mouseY > buttonTwo.y && mouseY < buttonTwo.y + buttonTwo.h) {

        cursor(HAND);

    }
    if (mouseX > buttonThree.x && mouseX < buttonThree.x + buttonThree.w && mouseY > buttonThree.y && mouseY < buttonThree.y + buttonThree.h) {
        cursor(HAND);
    }

    if (hideFour != true) {
        if (mouseX > buttonFour.x && mouseX < buttonFour.x + buttonFour.w && mouseY > buttonFour.y && mouseY < buttonFour.y + buttonFour.h) {
            cursor(HAND);
        }
    }

}

function ifHandler() {


    sceneOne(); //go to bed //  stay awawke
    sceneTwo();// // 
    sceneThree();// //
    sceneFour();// //
    sceneFive();// //
    sceneSix();// //
    sceneSven(); //get out of bed section
    sceneEight();// //
    sceneNine();// //
    sceneTen();// //
}


function dialogueHandler() {

    if (continu == true && continuGate == 1) {

        text(scenes.one.two, photoA.x + 5, photoA.y + 50)

    }
    if (continu == true && continuGate == 2) {

        text(scenes.two.two, photoA.x + 5, photoA.y + 50)

    }






}

function sceneOne() {
    push();
    if (dialogueOption == 0) {
        push();
        textFont(DTM);
        textSize(15);



        fill(255);
        if (continuGate != 0) {
            text("Go to bed", buttonOne.x + 10, buttonOne.y + 30)
        }
        if (continuGate != 1) {
            text("Continue", buttonOne.x + 165, buttonOne.y + 30)
        }
        if (continuGate != 0) {
            text("Stay awake", buttonOne.x + 305, buttonOne.y + 30)
        }
        if (continuGate == 0) {

            text(scenes.one.one, photoA.x + 5, photoA.y + 50)
        }
        else if (continuGate == 1) {

            text(scenes.one.two, photoA.x + 5, photoA.y + 50)
        }
    }
    pop();
}

function sceneTwo() {
    push();
    if (dialogueOption == 1) {


        continuGate = constrain(continuGate, 0, 2)

        push();
        textFont(DTM);
        textSize(15);

        fill(255);
        if (continuGate == 2) {
            text("stay still", buttonOne.x + 5, buttonOne.y + 30)
        }

        if (continuGate == 0) {

            text("Continue", buttonOne.x + 165, buttonOne.y + 30)
        }
        else if (continuGate == 1) {

            text("Continue", buttonOne.x + 165, buttonOne.y + 30)
        }
        if (!continuGate == 2) {

            text("Continue", buttonOne.x + 165, buttonOne.y + 30)
        }
        if (continuGate == 2) {
            text("Get out of\n    bed", buttonOne.x + 305, buttonOne.y + 20)
        }
        if (continuGate == 0) {

            text(scenes.two.one, photoA.x + 5, photoA.y + 50)
        }

        if (continuGate == 1) {

            text(scenes.two.two, photoA.x + 5, photoA.y + 50)
        }
        if (continuGate == 2) {

            text(scenes.two.three, photoA.x + 5, photoA.y + 50)
        }

    }
    pop();
}

function sceneThree() {
    push();
    if (dialogueOption == 2) {

        continuGate = constrain(continuGate, 0, 3)

        push();
        textFont(DTM);
        textSize(15);

        fill(255);
        if (continuGate == 1) {
            text("stay still", buttonOne.x + 5, buttonOne.y + 30)
        }

        if (!continuGate == 1) {

            text("Continue", buttonOne.x + 165, buttonOne.y + 30)
        }
        if (continuGate == 1) {
            text("Get out of\n    bed", buttonOne.x + 305, buttonOne.y + 20)
        }


        if (continuGate == 0) {

            text(scenes.three.one, photoA.x + 5, photoA.y + 50)
        }

        if (continuGate == 1) {

            text(scenes.three.two, photoA.x + 5, photoA.y + 50)
        }
        if (continuGate == 2) {

            text(scenes.three.two, photoA.x + 5, photoA.y + 50)
        }
        if (continuGate == 3) {

            text(scenes.two.three, photoA.x + 5, photoA.y + 50)
        }
    }
    pop();
}

function sceneFour() {
    push();
    if (dialogueOption == 3) {

        //continuGate = constrain(continuGate, 0, 3)

        push();
        textFont(DTM);
        textSize(15);

        fill(255);




        if (continuGate == 1) {
            text("stay still", buttonOne.x + 5, buttonOne.y + 30)
        }
        if (continuGate == 1) {
            text("Get out of\n    bed", buttonOne.x + 305, buttonOne.y + 20)
        }




        if (continuGate == 0) {

            text("Continue", buttonOne.x + 165, buttonOne.y + 30)
        }




        if (continuGate == 0) {

            text(scenes.four.one, photoA.x + 5, photoA.y + 50)
        }

        if (continuGate == 1) {

            text(scenes.four.two, photoA.x + 5, photoA.y + 50)
        }


        pop();
    }
}
function sceneFive() {
    push();
    if (dialogueOption == 4) {

        //continuGate = constrain(continuGate, 0, 3)

        push();
        textFont(DTM);
        textSize(15);

        fill(255);


        if (continuGate == 0) {

            text("Continue", buttonOne.x + 165, buttonOne.y + 30)
        }
        else if (continuGate == 1) {

            text("Continue", buttonOne.x + 165, buttonOne.y + 30)
        }
        if (continuGate == 2) {
            text("Get out of\n    bed", buttonOne.x + 305, buttonOne.y + 20)
        }
        if (continuGate == 0) {

            text(scenes.five.one, photoA.x + 5, photoA.y + 50)
        }

        if (continuGate == 1) {

            text(scenes.five.two, photoA.x + 5, photoA.y + 50)
        }
        if (continuGate == 2) {

            text(scenes.five.three, photoA.x + 5, photoA.y + 50)
        }

        pop();
    }
}


//first ending
function sceneSix() {


    push();
    if (dialogueOption == 5) {

        //continuGate = constrain(continuGate, 0, 3)

        push();
        textFont(DTM);
        textSize(15);

        fill(255);


        if (continuGate == 0) {

            text("Continue", buttonOne.x + 165, buttonOne.y + 30)
        }
        else if (continuGate == 1) {

            text("Continue", buttonOne.x + 165, buttonOne.y + 30)
        }
        else if (continuGate == 2) {

            text("Restart", buttonOne.x + 170, buttonOne.y + 30)
        }

        if (continuGate == 0) {

            text(scenes.six.one, photoA.x + 5, photoA.y + 50)
        }

        if (continuGate == 1) {

            text(scenes.six.two, photoA.x + 5, photoA.y + 50)
        }
        if (continuGate == 2) {




        }

        pop();
    }
}

//get out of bed
function sceneSven() {


    push();
    if (dialogueOption == 6) {


        //continuGate = constrain(continuGate, 0, 3)

        push();
        textFont(DTM);
        textSize(15);

        fill(255);


        if (continuGate == 0) {

            text("Continue", buttonOne.x + 165, buttonOne.y + 30)
        }
        else if (continuGate == 1) {

            text("Continue", buttonOne.x + 165, buttonOne.y + 30)
        }
        else if (continuGate == 2) {

            text("green PJs", buttonOne.x + 10, buttonOne.y + 30)
            text("blue PJs", buttonOne.x + 165, buttonOne.y + 30)
            text("black PJs", buttonOne.x + 310, buttonOne.y + 30)
        }



        if (continuGate == 0) {

            text(scenes.seven.one, photoA.x + 5, photoA.y + 50)
        }

        if (continuGate == 1) {

            text(scenes.seven.two, photoA.x + 5, photoA.y + 50)
        }
        if (continuGate == 2) {

            text(scenes.seven.three, photoA.x + 5, photoA.y + 50)

        }

        pop();
    }
}


function sceneEight() {



    push();
    if (dialogueOption == 7) {


        //continuGate = constrain(continuGate, 0, 3)

        push();
        textFont(DTM);
        textSize(15);

        fill(255);


        if (continuGate == 0) {

            text("Continue", buttonOne.x + 165, buttonOne.y + 30)
        }
        else if (continuGate == 1) {

            text("Continue", buttonOne.x + 165, buttonOne.y + 30)
        }
        else if (continuGate == 2) {
            text("smoke", buttonOne.x + 27, buttonOne.y + 30)

            text("sit down", buttonOne.x + 315, buttonOne.y + 30)
        }



        if (continuGate == 0) {

            if (greenOpen == true) {
                text(scenes.eight.green, photoA.x + 5, photoA.y + 50)
            }
            if (blueOpen == true) {
                text(scenes.eight.blue, photoA.x + 5, photoA.y + 50)
            }
            if (blackOpen == true) {
                text(scenes.eight.black, photoA.x + 5, photoA.y + 50)
            }
        }

        if (continuGate == 1) {

            text(scenes.eight.two, photoA.x + 5, photoA.y + 50)
        }
        if (continuGate == 2) {

            text(scenes.eight.three, photoA.x + 5, photoA.y + 50)

        }

        pop();
    }
}

function sceneNine() {



    push();
    if (dialogueOption == 8) {


        //continuGate = constrain(continuGate, 0, 3)

        push();
        textFont(DTM);
        textSize(15);

        fill(255);


        if (continuGate != 5) {

            text("Continue", buttonOne.x + 165, buttonOne.y + 30)
        }
        else if (continuGate == 5) {

            text("  sit\nlonger", buttonOne.x + 18, buttonOne.y + 20)
            text("go inside", buttonOne.x + 310, buttonOne.y + 30)

        }



        if (continuGate == 0) {

            text(scenes.nine.one, photoA.x + 5, photoA.y + 50)

        }

        if (continuGate == 1) {

            text(scenes.nine.two, photoA.x + 5, photoA.y + 50)
        }
        if (continuGate == 2) {

            text(scenes.nine.three, photoA.x + 5, photoA.y + 50)
        }
        if (continuGate == 3) {

            text(scenes.nine.four, photoA.x + 5, photoA.y + 50)
        }
        if (continuGate == 4) {

            text(scenes.nine.five, photoA.x + 5, photoA.y + 50)
        }
        if (continuGate == 5) {

            text(scenes.nine.six, photoA.x + 5, photoA.y + 50)
        }

        pop();
    }
}


function sceneTen() {



    push();
    if (dialogueOption == 9) {


        //continuGate = constrain(continuGate, 0, 3)

        push();
        textFont(DTM);
        textSize(15);

        fill(255);


        if (continuGate != 5) {

            text("Continue", buttonOne.x + 165, buttonOne.y + 30)
        }
        else if (continuGate == 5) {

            text("  sit\n  longer", buttonOne.x + 18, buttonOne.y + 20)
            text("  sit\n  longer", buttonOne.x + 180, buttonOne.y + 20)

        }



        if (continuGate == 0) {

            text(scenes.ten.one, photoA.x + 5, photoA.y + 50)

        }

        if (continuGate == 1) {

            text(scenes.ten.two, photoA.x + 5, photoA.y + 50)
        }
        if (continuGate == 2) {

            text(scenes.ten.three, photoA.x + 5, photoA.y + 50)
        }
        if (continuGate == 3) {

            text(scenes.ten.four, photoA.x + 5, photoA.y + 50)
        }
        if (continuGate == 4) {

            text(scenes.ten.five, photoA.x + 5, photoA.y + 50)
        }
        if (continuGate == 5) {

            text(scenes.ten.six, photoA.x + 5, photoA.y + 50)
        }

        pop();
    }
}


//start here - working on scene 6
//-need scene for going to bed on first choice
//since get out of bed is not based on a set increase, 
//all those buttons need to direct to DialogueOption = 6 probably


function mouseReleased() {

    //continu button
    if (mouseX > buttonTwo.x && mouseX < buttonTwo.x + buttonTwo.w && mouseY > buttonTwo.y && mouseY < buttonTwo.y + buttonTwo.h) {

        continu = false
    }
}

function mousePressed() {

    //continu button
    if (mouseX > buttonTwo.x && mouseX < buttonTwo.x + buttonTwo.w && mouseY > buttonTwo.y && mouseY < buttonTwo.y + buttonTwo.h) {



        if (dialogueOption == 1 && continuGate == 0) {
            continu = true;
            continuGate += 1;
        }
        else if (dialogueOption == 0 && continuGate == 1) {
            continu = false;
        }
        else if (dialogueOption == 1 && continuGate == 2) {
            continu = false;
        }
        else if (dialogueOption == 1 && continuGate == 3) {
            continu = false;
        }
        else if (dialogueOption == 3 && continuGate == 1) {
            continu = false;
        }
        else if (dialogueOption == 4 && continuGate == 2) {
            continu = false;
        }
        else if (dialogueOption == 5 && continuGate == 2) {
            restart();
        }
        else if (dialogueOption == 7 && continuGate == 2) {
            continu = false;
        }
        else if (dialogueOption == 8 && continuGate == 5) {
            continu = false;
        }
        else if (dialogueOption == 6 && continuGate == 2) {
            dialogueOption += 1
            continuGate = 0;
            blueOpen = true
        }
        else {
            continu = true;
            continuGate += 1;
        }
    }
}
function mouseClicked() {

    //left
    if (mouseX > buttonOne.x && mouseX < buttonOne.x + buttonOne.w && mouseY > buttonOne.y && mouseY < buttonOne.y + buttonOne.h) {



        if (continuGate == 1 && dialogueOption == 0) {
            dialogueOption += 5
            continuGate = 0;
        }

        if (continuGate == 1 && dialogueOption != 1 && dialogueOption != 6 && dialogueOption != 7) {
            dialogueOption += 1
            continuGate = 0;

        }
        if (continuGate == 2 && dialogueOption == 1) {
            dialogueOption += 1
            continuGate = 0;

        }
        if (continuGate == 3 && dialogueOption == 1) {
            dialogueOption += 1
            continuGate = 0;

        }
        if (continuGate == 1 && dialogueOption == 3) {
            dialogueOption += 1
            continuGate = 0;
        }

        if (dialogueOption == 6 && continuGate == 2) {
            dialogueOption += 1
            continuGate = 0;

            greenOpen = true;
        }

        if (dialogueOption == 7 && continuGate == 2) {
            dialogueOption += 1
            continuGate = 0;
        }

        if (dialogueOption == 8 && continuGate == 5) {
            dialogueOption += 1
            continuGate = 0;
        }
        //hideFour = false

    }

    //middle
    if (mouseX > buttonTwo.x && mouseX < buttonTwo.x + buttonTwo.w && mouseY > buttonTwo.y && mouseY < buttonTwo.y + buttonTwo.h) {

    }

    //right
    if (mouseX > buttonThree.x && mouseX < buttonThree.x + buttonThree.w && mouseY > buttonThree.y && mouseY < buttonThree.y + buttonThree.h) {
        cursor(HAND);

        push();

        if (continuGate == 1 && dialogueOption == 0) {
            dialogueOption += 1
            continuGate = 0;
        }
        if (continuGate == 0 && dialogueOption == 1) {
            dialogueOption += 1
            continuGate = 0;
        }
        if (continuGate == 1 && dialogueOption != 0 && dialogueOption != 1 && dialogueOption != 6 && dialogueOption != 7 && dialogueOption != 2) {
            dialogueOption += 3
            continuGate = 0;
        }

        if (continuGate == 2 && dialogueOption == 1) {
            dialogueOption += 1
            continuGate = 0;
        }

        if (continuGate == 1 && dialogueOption == 2) {
            dialogueOption += 4
            continuGate = 0;
        }

        if (continuGate == 3 && dialogueOption == 1) {
            dialogueOption += 1
            continuGate = 0;
        }
        if (continuGate == 1 && dialogueOption == 3) {
            dialogueOption += 1
            continuGate = 0;

        }
        if (continuGate == 2 && dialogueOption == 4) {
            dialogueOption += 2
            continuGate = 0;

        }

        if (dialogueOption == 6 && continuGate == 2) {
            dialogueOption += 1
            continuGate = 0;
            blackOpen = true
        }

        if (dialogueOption == 7 && continuGate == 2) {
            dialogueOption += 1
            continuGate = 0;
        }

    }


}
function restart() {

    reset = true
    endingsDone += 1
    dialogueOption = 0
    continuGate = 0


    draw();

}

function debugging() {

    push();
    fill(255);
    //text(`mX:${mouseX}`, 350, 80)
    //text(`mY:${mouseY}`, 350, 50)
    text(`Doption:${dialogueOption}`, 220, 100)
    text(`ContU?:${continu}`, 220, 120)
    text(`ConGate:${continuGate}`, 220, 140)

    text(`green:${greenOpen}`, 220, 160)
    text(`blue:${blueOpen}`, 220, 180)
    text(`black:${blackOpen}`, 220, 200)

    pop();

}