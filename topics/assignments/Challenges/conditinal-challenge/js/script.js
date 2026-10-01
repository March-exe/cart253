/**
 * Circle Master
 * Pippin Barr
 *
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */

const puck = {
    x: 200,
    y: 200,
    size: 100,
    fill: "#ff0000",
    fillTwo: "#a45e5e"
};

const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 75,
    fill: "#000000"
};

/**
 * Create the canvas
 */


function setup() {
    createCanvas(400, 400);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
    background("#aaaaaa");

    // Move user circle
    moveUser();

    // Draw the user and puck
    drawUser();
    drawPuck();

    function moveUser() {
        user.x = mouseX;
        user.y = mouseY;
    }

    /**
     * Move the user circle, check for overlap, draw the two circles
     */


    push();
    // Calculate distance between circles' centres
    const d = dist(user.x, user.y, puck.x, puck.y);
    // Check if that distance is smaller than their two radii, 
    // because if it is, they are overlapping by the amazing
    // power of geometry!


    const overlap = (d < user.size / 2 + puck.size / 2);
    // Set fill based on whether they overlap
    text(overlap, 100, 50)
    //just to move the puck based on the distance between the puck and user on x.
    if (overlap) {

        puck.x = puck.x         // + user.x / overlap//lerp(puck.x, mouseX, 0.05);//+ mouse.position.x / 100 + mouse.position.x / 100
        puck.y = puck.y         //lerp(puck.y, mouseY, 0.05);//+ mouse.position.y / 1000



    }
    else {
        puck.fill = puck.fillTwo;
        puck.x = puck.x
    }


    text(puck.x, 100, 100)
    text(user.x, 200, 110)

    pop();



}
/**
 * Overlapping Circles
 * Pippin Barr
/**
/**
 * Displays the user circle
 */
function drawUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
    push();
    noStroke();
    fill(puck.fill);
    ellipse(puck.x, puck.y, puck.size);
    pop();
}