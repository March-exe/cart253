/**
 * Fortune 8 ball
 * Marciano Faugno
 * 
 * Fortune 8 ball is a project that makes the imfamous fortune telling 8 ball digital.
 * when you click the screen, the ball will give you one of 20 answers avalible to decide your fortune
 * good luck!
 */

"use strict";

/**
 * setup function is only to create the canvas, but i also create an array with all the avalible answers in it
 * and i create two variables to handle if the mouse has been clicked, and what answer is generated/displayed
*/

const answers = ["It is certain", "Reply hazy, try again", "Don’t count on it", "It is decidedly so", "Ask again later",
    "My reply is no", "Without a doubt", "Better not tell you now", "My sources say no", "Yes definitely",
    "Cannot predict now", "Outlook not so good", "You may rely on it", "Concentrate and ask again",
    "Very doubtful", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes"]

let press = false
let answer = undefined
function setup() {
    createCanvas(600, 600)

}


/**
 * my draw builds the 8 ball and displays a random string based on the index of the array
 * it also checks for press being true to display the answer given
*/



function draw() {
    background(100, 0, 30)


    create8ball();
    displayText();

    debugging();

    if (answer == undefined) {

        push();
        fill(255);
        textSize(30);
        textAlign(CENTER, CENTER)
        text('8', 250, 250, 100, 100);
        pop();
    }
    if (press == true) {

        generateAnswer();
        displayAnswer(answer);
    }
}

//display instructional text for the user to play the ball
function displayText() {

    push();
    fill(0);
    textSize(25);
    textAlign(CENTER, CENTER);
    text("Click to generate answer\nClick twice to regenerate", 300, 100);
    pop();

}


//simply changes a variables based on if the player clicked or not. when the player reclicks it changes press to false and resets the answer for another question
function mouseClicked() {

    if (press == false) {

        press = true
    }
    else if (press == true) {

        press = false
        answer = undefined
    }
}

function create8ball() {
    //black ball
    push();
    noStroke();
    fill(0)
    ellipse(300, 300, 300)
    pop();

    //answer section
    push();
    noStroke();
    fill(100, 0, 100)
    triangle(300, 200, 200, 350, 400, 350)
    pop();
    //shine on the ball
    push();
    noStroke();
    fill(255)
    ellipse(240, 200, 40)
    ellipse(210, 230, 20)
    pop();


}

function generateAnswer() {

    if (answer == undefined) {

        let index = floor(random(0, 19))
        answer = answers[index]

        return answer;
    }

}
function displayAnswer(answer) {

    push();
    fill(255);
    textSize(15);
    textAlign(CENTER, CENTER)
    text(answer, 250, 250, 100, 100);
    pop();
}

function debugging() {


}