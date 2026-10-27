/**
 * Bouncy Ball Ball Bonanza
 * Pippin Barr
 * 
 * The starting point for a ball-bouncing experience of
 * epic proportions!
 * 
 *the challenge is to add moveball, move paddle, handle paddle, a second ball
 */

"use strict";

// Our ball
const ball = {
    x: 300,
    y: 20,
    width: 10,
    height: 10,
    velocity: {
        x: 2,
        y: 3,
    }
};

const ball2 = {
    x: 300,
    y: 20,
    width: 10,
    height: 10,
    velocity: {
        x: 2,
        y: 1,
    }
};
const ball3 = {
    x: 300,
    y: 20,
    width: 10,
    height: 10,
    velocity: {
        x: 3,
        y: 3,
    }
};

// Our paddle
const paddle = {
    x: 300,
    y: 280,
    width: 80,
    height: 10
};

let keyP = false;

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 300);
    background("#87ceeb");

}


/**
 * Move and display the ball and paddle
*/
function draw() {
    text("p to pause", 300, 150)
    text("s to start", 300, 170)


    //movePaddle(paddle);

    if (keyP == true) {
        moveBall(ball);
        moveBall(ball2);
        moveBall(ball3);
    }


    //handleBounce(ball, paddle);
    //handleBounce(ball2, paddle);

    // drawPaddle(paddle);
    drawBall(ball);
    drawBall(ball2);
    drawBall(ball3);

    bounceBoundry(ball);
    bounceBoundry(ball2);
    bounceBoundry(ball3);


    //debugging();
}


function keyPressed() {

    if (key == "s") {
        keyP = true;

    }
    else if (key == "p") {
        keyP = false;

    }
}

/**
 * Moves the paddle
 */
function movePaddle(paddle) {
    noCursor()
    paddle.x = mouseX

}

/**
 * Moves the ball passed in as a parameter
 */
function moveBall(ball) {


    ball.x += ball.velocity.x
    ball.y += ball.velocity.y

    //ball.x = constrain(ball.x, 0, width + 10);
    //ball.y = constrain(ball.y, 0, height + 10);

    if (ball.y == 0) {

        ball.velocity.y = ball.velocity.y * 1


    }




}

function bounceBoundry(ball) {

    //bottom - resets to top if you miss the ball
    if (ball.y > height == true) {

        //ball.y = 0
        ball.velocity.y = ball.velocity.y * -1
    }

    // bounce off the roof
    if (ball.y < 0 == true) {


        ball.velocity.y = ball.velocity.y * -1
    }


    // bounce off the sides

    //right side
    if (ball.x > width == true) {
        //  text(`right: true`, 350, 170)

        ball.velocity.x = ball.velocity.x * -1
    }

    //left side
    if (ball.x == 0 == true) {
        //  text(`left: true`, 350, 170)
        //text(`y vel: ${ball.velocity.x}`, 300, 190)

        ball.velocity.x = ball.velocity.x * -1
    }

}

/**
 * Bounces the provided ball off the provided paddle
 */
function handleBounce(ball, paddle) {

    //bounce when it hits the paddle
    if (checkOverlap(ball, paddle) == true) {
        // text(`overlapped: true`, 300, 100)

        ball.velocity.y = ball.velocity.y * -1
    }


}

/**
 * Draws the specified paddle on the canvas
 */
function drawPaddle(paddle) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("black");
    rect(paddle.x, paddle.y, paddle.width, paddle.height);
    pop();
}

/**
 * Draws the specified ball on the canvas
 */
function drawBall(ball) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("red");
    rect(ball.x, ball.y, ball.width, ball.height);
    pop();
}

/**
 * Returns true if rectA and rectB overlap, and false otherwise
 * Assumes rectA and rectB have properties x, y, width and height to describe
 * their rectangles, and that rectA and rectB are displayed CENTERED on their
 * x,y coordinates.
 */
function checkOverlap(rectA, rectB) {
    return (rectA.x + rectA.width / 2 > rectB.x - rectB.width / 2 &&
        rectA.x - rectA.width / 2 < rectB.x + rectB.width / 2 &&
        rectA.y + rectA.height / 2 > rectB.y - rectB.height / 2 &&
        rectA.y - rectA.height / 2 < rectB.y + rectB.height / 2);
}

function debugging() {

    text(`height: ${height}`, 100, 150)
    text(`width: ${width}`, 100, 160)

    text(`y: ${ball.y}`, 100, 50)
    text(`x: ${ball.x}`, 100, 60)

    //text(`off screen btm: true`, 300, 200)
    //text(`off screen btm: false`, 300, 220)
}