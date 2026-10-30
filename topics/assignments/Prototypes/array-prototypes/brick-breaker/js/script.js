/**
 * Brick breaker
 * Marciano faugno
 * 
 * Brick breaker is a game where you have  a paddle, a ball and bricks on screen. 
 * the goal of the game is to break all the bricks using the ball which bounces off walls and your paddle.
 * as you break the balls, you gather points, further increasing your score.
 * there is no end to the game as you can restart - if anything get the highest amount of point in one session
 */

"use strict";


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
 * 
 * the beigging setup includes previous code from the previous challenge project.
 * create an array to hold all the brick objects created
 * create ball and paddle objects for the player to use
 * 
*/

//created an array to house the amount of brings shown onscreen and playing against
const bricks = []

// balls the user will use in-game
// balls 3-4 will spawn in under the condition of having above 25 for ball3 and 50 for ball4
const ball = {
    x: 300,
    y: 300,
    width: 10,
    height: 10,
    velocity: {
        x: 2,
        y: 3,
    }
};

const ball2 = {
    x: 300,
    y: 300,
    width: 10,
    height: 10,
    velocity: {
        x: 2,
        y: 2,
    }
};

const ball3 = {
    x: 300,
    y: 300,
    width: 10,
    height: 10,
    velocity: {
        x: 3,
        y: 3,
    }
};
const ball4 = {
    x: 300,
    y: 300,
    width: 10,
    height: 10,
    velocity: {
        x: 4,
        y: 4,
    }
};
/// end of balls

// Our paddle used by the player in game
const paddle = {
    x: 300,
    y: 600,
    width: 80,
    height: 10
};

//sets the amount of bricks played against in game
let brickNum = 135
//counts the amount of brick left on screen for the player
let bricksLeft = 0
//effectively the same thing as bricksleft but counts up the bricks you destory if you retstart
let points = 0
//checks if you pressed the screen, otherwise youll see 'click to start'
let press = false

//counts the spacing of the bricks in the x axis
let spacingX = 0

//counts the spacing of the bricks in the Y axis
let spacingY = 0

let start = false

/**
 * Create the canvas
*/
function setup() {
    createCanvas(400, 650);


}


/**
 * Move and display the ball, paddle, and bricks
*/
function draw() {
    background("#87ceeb");

    //if the user presses the screen, press becomes true. this will spawn the bricks before activting the game
    if (press == true) {

        spawnBrick();
    }

    //all the bricks must be spawned into the game and brickNum = 0  for start to become true
    if (start == true) {
        movePaddle(paddle);
        moveBall(ball);
        moveBall(ball2);

        handleBounce(ball, paddle);
        handleBounce(ball2, paddle);

        drawPaddle(paddle);
        drawBall(ball);
        drawBall(ball2);
        bounceBoundry(ball);
        bounceBoundry(ball2);

        //handles adding more balls to the game. when you hit 25 and 50 points respectively these balls get added
        if (points >= 25) {
            drawBall(ball3);
            moveBall(ball3);
            handleBounce(ball3, paddle);
            bounceBoundry(ball3);
        }
        if (points >= 50) {
            drawBall(ball4);
            moveBall(ball4);
            handleBounce(ball4, paddle);
            bounceBoundry(ball4);
        }
    }
    //if the game hasnt started this will appear
    else if (start == false) {
        text("click to start", 160, 300)
    }

    //for every brick in the bricks array, draw that brick
    //and check for an overlap with the ball, if so, remove that brick from the array
    for (let brick of bricks) {
        drawBrick(brick);
        handleBrickBounceDelete(ball, brick);
        handleBrickBounceDelete(ball2, brick);
        handleBrickBounceDelete(ball3, brick);
        handleBrickBounceDelete(ball4, brick);
    }


    //shows the points and brick left counters
    InterFace();

    //when the game ends, everything resets except for the points
    endGame();

    //debugging();

}

function mouseClicked() {

    press = true
    //sets the brick number to how many bricks are left to destory
    if (start == false) {

        bricksLeft = brickNum - 15
    }
}


function keyPressed() {

    if (key == "p") {

        if (start == true) {
            start = false;
            noLoop()
        }
        else { start == false }
        start = true
        loop()
    }

}
//debugging
function keyPressed(event) {
    // Code to run that uses the event.
    console.log(event);
}
//this function creates bricks and places them in an array.
//during this process, it checks to see if the bricks are off screen - if so, it will increase the spacing variables to move the bricks down in rows
function spawnBrick() {


    /*
this controls the spacing variables to determine when 
the next line of bricks should stop and drop down a row
    ***/
    //when the row of bricks reaches x = 400 it resets and drops to the next row
    if ((5 + 45 * spacingX) >= 400) {
        spacingX = 0
        spacingY += 1
    }
    //when the lowest row of bricks reaches 350, it stops
    else if ((5 + 20 * spacingY) >= 500) {
        spacingX = 0
        spacingY = 0
    }
    else {
        spacingX += 1
    }


    //when the brick numebr reaches zero it stops creating bricks
    //this way, you can set the amount of bricks you would like
    //when it reaches zero, the paddle, and balls will spawn in.
    if (brickNum > 0) {

        createBrick(-45 + (spacingX * 45), 5 + (spacingY * 20))
        brickNum = brickNum - 1
    }
    else if (brickNum == 0) {

        start = true
    }


}
function createBrick(x, y) {

    const brick = {
        x: x,
        y: y,
        height: 15,
        width: 40,
        fill: "#d54931"
    };
    bricks.push(brick)
    return brick;
}

function drawBrick(brick) {
    push();
    noStroke();
    fill(brick.fill);
    rect(brick.x, brick.y, brick.width, brick.height);
    pop();


}

function handleBrickBounceDelete(ball, brick) {

    //bounce when it hits the paddle
    if (checkOverlap(ball, brick) == true) {
        // text(`overlapped: true`, 300, 100)

        ball.velocity.y = ball.velocity.y * -1

        let index = bricks.indexOf(brick);
        // And now use splice to *remove* the fly at that index
        // Remember we provide the index and the *number of elements*
        // to remove. In this case just the one.
        bricks.splice(index, 1);
        points += 1
        bricksLeft -= 1
    }


}

function endGame() {

    if (start == true) {
        if (bricksLeft == 0) {

            text("YOU WON", 160, 300)
            start = false;
            press = false;
            brickNum = 135 - 15



        }
    }
}

//////////////////////////////////////////////// new code above ^^^^

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

        ball.y = 0
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

    text(`bricks: ${bricks}`, 100, 300)

    text(`Sx:${spacingX}`, 300, 50)
    text(`brickNum:${brickNum}`, 300, 600)
    text(`points:${points}`, 300, 620)
    text(`bricks left:${bricksLeft}`, 300, 640)

}
function InterFace() {
    text(`points:${points}`, 300, 620)
    text(`bricks left:${bricksLeft}`, 300, 640)

}