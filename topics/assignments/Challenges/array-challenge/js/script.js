/**
 * Boingo
 * Pippin Barr
 *
 * A ball that bounces around on the canvas
 */


let balls = []

/**
 * Create the canvas and the ball
 */
function setup() {
    // Create the canvas
    createCanvas(400, 400);
    // Create the ball


}

function mousePressed() {


    createBall(mouseX, mouseY)
}
/**
 * Creates a random ball
 */
function createBall(x, y) {
    // Create a ball object with appropriate properties
    const ball = {
        // Position and dimensions
        x: x,
        y: y,
        size: 20,
        // Colour
        fill: "#000000",
        // Movement
        velocity: {
            x: random(-5, 5),
            y: random(-5, 5),
        },
    };
    balls.push(ball);
    return ball;
}

/**
 * Moves and draws the ball
 */
function draw() {
    background("#87ceeb");

    for (let ball of balls) {

        drawBall(ball)
        moveBall(ball)
        bounceBall(ball)


    }
    if (balls == 0) {

        text("click the mouse to begin", 140, 200)
    }
    debugging();
}

/**
 * Moves the ball according to its velocity
 */
function moveBall(ball) {
    ball.x += ball.velocity.x;
    ball.y += ball.velocity.y;
}

/**
 * Bounces the ball off the walls
 */
function bounceBall(ball) {
    // Check if the ball has reached the left or right
    const bounceX = (ball.x > width || ball.x < 0);
    // Check if the ball has reached the top or bottom
    const bounceY = (ball.y > height || ball.y < 0);

    // Handle bouncing horizontally
    if (bounceX) {
        ball.velocity.x *= -1;
    }
    // Handle bouncing vertically
    if (bounceY) {
        ball.velocity.y *= -1;
    }
}

/**
 * Draw the ball on the canvas
 */
function drawBall(ball) {
    push();
    noStroke();
    fill(ball.fill);
    ellipse(ball.x, ball.y, ball.size);
    pop();
}

function debugging() {

    text(`${balls}`, 0, 100)
    console.log(balls);

    line(pmouseX, pmouseY, mouseX, mouseY);



    if (mouseX > pmouseX) {
        const d = dist(pmouseX, pmouseY, mouseX, mouseY)
        text(`${d}`, 5, 250)
        text(`right`, 0, 320)


    }
    else if (mouseX < pmouseX) {
        const d = mouseX - dist(mouseX, mouseY, pmouseX, pmouseY,)
        text(`${d}`, 5, 250)
        text(`left`, 0, 320)
    }

    if (mouseY > pmouseY) {

        text(`down`, 30, 320)
    }
    else if (mouseY < pmouseY) {

        text(`up`, 30, 320)
    }
}