/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

/**
 * The Only Move Is Not To Play
 * Pippin Barr
 *
 * A game where your score increases so long as you do nothing.
 */

"use strict";

// Current score
let score = 0;

// Is the game over?
let gameOver = false;

//did the player complete the steps?
let stepOne = false;
let stepTwo = false;
let stepThree = false;
let stepFour = false;

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);

    window.addEventListener("visibilitychange", steps)
}

/**
 * Update the score and display the UI
 */
function draw() {
    background("#87ceeb");

    // Only increase the score if the game is not over
    if (!gameOver) {
        if (stepOne != false) {
            // Score increases relatively slowly
            score += 0.05;
        }
    }
    displayUI();
}

/**
 * Show the game over message if needed, and the current score
 */
function displayUI() {
    if (gameOver) {
        push();
        background(255, 0, 0);
        textSize(48);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        text("You lose!", width / 2, height / 3);
        pop();
    }
    displayScore();
    if (!gameOver) {
        push();
        textSize(40);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        text("do something else", width / 2, height / 3);
        pop();

    }
    if (stepOne != true) {
        push();
        background("#87ceeb");
        textSize(40);
        textStyle(BOLD);
        textAlign(CENTER, 10);
        text("move your mouse", width / 2, height / 3);
        pop();
    }
    if (stepTwo == true && stepOne == true) {
        push();
        background("#87ceeb");
        textSize(40);
        textStyle(BOLD);
        textAlign(CENTER, 10);
        text("Goodjob, another.", width / 2, height / 3);
        pop();
        displayScore();
    }
    if (stepThree == true && stepTwo == true && stepOne == true) {
        push();
        background("#87ceeb");
        textSize(40);
        textStyle(BOLD);
        textAlign(CENTER, 10);
        text("one more final task?", width / 2, height / 3);
        pop();
        displayScore();
    }
    if (stepFour == true && stepThree == true && stepTwo == true && stepOne == true) {
        push();
        background("#87ceeb");
        textSize(40);
        textStyle(BOLD);
        textAlign(CENTER, 10);
        text("You Won !", width / 2, height / 3);
        pop();
        displayScore();
        gameOver = true;

    }
}

displayScore();



/**
 * Display the score
 */
function displayScore() {
    push();
    textSize(48);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text(floor(score), width / 2, height / 2);
    pop();
}


//makes gameover true
function lose() {

    gameOver = true;

}

//checks if you pressed the keyboard
function keyPressed() {

    stepTwo = true;


}


//checks if you pressed the mouse
function mousePressed() {

    stepThree = true;
}

//checks if the mouse moved
function mouseMoved() {

    stepOne = true;


}

function steps() {
    stepFour = true;

}

//checks for being off the broswer



//instead of doing nothing, you have to do all of these tasks to win the game
//so like start with click the screen then maybe typing a word or key
//then moving the mouse around or something
//then clicking off the browser and on again
//then waiting for a timer to finish, before "you win!"