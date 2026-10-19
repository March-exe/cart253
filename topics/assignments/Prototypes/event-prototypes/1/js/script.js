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

let icons = {

    inbox: {
        x: 400,
        y: 400,
        w: 600,
        h: 600
    },
}

let iconborder = {

    vertLineCo: {
        x1: icons.inbox.x + icons.inbox.w,
        y1: icons.inbox.y,
        x2: icons.inbox.x + icons.inbox.w,
        y2: icons.inbox.y + icons.inbox.h,
    },
    // right: (450, 50, 450, 350)
    // left: (150, 50, 150, 350)

    horzLineCo: {
        x1: icons.inbox.x,
        y1: icons.inbox.y + 1,
        x2: icons.inbox.x + icons.inbox.w,
        y2: icons.inbox.y + 1
    },


    // top (150, 50, 450, 50)
    // bottom: (150, 350, 450, 350)


    gRect: {
        x: icons.inbox.x + 5,
        y: icons.inbox.y + 5,
        w: icons.inbox.w - 10,
        h: 25
    }
}

let inboxText = {

    textPosition: {

        x1: icons.inbox.x + 10,
        y1: icons.inbox.y + 25,
        x2: icons.inbox.x + 10,
        y2: icons.inbox.y + 65,
        x3: icons.inbox.x + icons.inbox.w - 40,
        y3: icons.inbox.y + 24,
    },

    text: {
        one: "Inbox",
        two: "You do not have friends. Of course you have no new messages.",
        three: "_ X"
    },

    culr: {
        b: 0,
        w: 255
    }

}

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
let imgSize = {
    s: 75,
}

let img;
let computer;
let information;
let recyling;
let calendar;
let agent;
let friends;

let computerOpen = false;
let informationOpen = false;
let recylingOpen = false;
let calendarOpen = false;
let agentOpen = false;
let friendsOpen = false;

/*
preloads setup function so that all images are loaded in before start
**/
async function setup() {

    img = await loadImage('assets/images/startnew.png');
    computer = await loadImage('assets/images/computer_explorer_cool-0.png');
    information = await loadImage('assets/images/msg_information-0.png');
    recyling = await loadImage('assets/images/recycle_bin_full_cool-0.png');
    calendar = await loadImage('assets/images/calendar-0.png');
    agent = await loadImage('assets/images/msagent-4.png');
    friends = await loadImage('assets/images/network_normal_two_pcs-5.png');

    createCanvas(cnvs.w, cnvs.h);

}


/**
 * draws a fake desktop to look like windows 98. on the canvas, you will find a plethora of icons, messages and things to discover
*/
function draw() {
    background(0, 116, 115);
    taskbar();
    onHover();

    appicons();

    if (friendsOpen == true) {
        friendInbox();
    }


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



function friendInbox() {
    push();

    //encompassing grey box
    noStroke();
    fill(172, 172, 172);
    rect(icons.inbox.x, icons.inbox.y, icons.inbox.w, icons.inbox.h);
    pop();
    //white description box
    push();
    noStroke();
    fill(229, 229, 228);
    rect(icons.inbox.x + 5, icons.inbox.y + 35, icons.inbox.w - 10, icons.inbox.h - 50);
    pop();

    //border lines

    push();
    stroke(255);
    //top and left
    line(iconborder.horzLineCo.x1, iconborder.horzLineCo.y1, iconborder.horzLineCo.x2, iconborder.horzLineCo.y2);
    line(iconborder.vertLineCo.x1 - icons.inbox.w, iconborder.vertLineCo.y1, iconborder.vertLineCo.x2 - icons.inbox.w, iconborder.vertLineCo.y2);
    pop();

    push();
    stroke(0);
    //right and bottom
    line(iconborder.vertLineCo.x1, iconborder.vertLineCo.y1, iconborder.vertLineCo.x2, iconborder.vertLineCo.y2);
    line(iconborder.horzLineCo.x1, iconborder.horzLineCo.y1 + icons.inbox.h, iconborder.horzLineCo.x1 + icons.inbox.w, iconborder.horzLineCo.y1 + icons.inbox.w);
    pop();

    //dark grey header
    push()
    noStroke();
    fill(129, 129, 129);
    rect(iconborder.gRect.x, iconborder.gRect.y, iconborder.gRect.w, iconborder.gRect.h);
    pop();


    // INBOX text//
    //window text descriptor
    push();
    fill(inboxText.culr.w);
    noStroke();
    textSize(20);
    text(inboxText.text.one, inboxText.textPosition.x1, inboxText.textPosition.y1);
    pop();

    //description text
    push();
    fill(inboxText.culr.b);
    noStroke();
    //textFont(manaspace, 20);
    textSize(20);
    text(inboxText.text.two, inboxText.textPosition.x2, inboxText.textPosition.y2);
    pop();

    //exit and minimize "icons"
    push();
    fill(inboxText.culr.w);
    noStroke();
    textSize(18);
    text(inboxText.text.three, inboxText.textPosition.x3, inboxText.textPosition.y3);
    pop();

};

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

    //PLACES IMAGE ON THE Taskbar 
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

function appicons() {
    //image(img, x, y, [width], [height])
    image(computer, 50, 50, imgSize.s, imgSize.s);
    push();
    fill(255);
    noStroke();
    text('my computer', 50, 140)
    pop();

    image(recyling, 50, 200, imgSize.s, imgSize.s);
    push();
    fill(255);
    noStroke();
    text('recycling bin', 50, 290)
    pop();

    image(calendar, 45, 350, imgSize.s, imgSize.s);
    push();
    fill(255);
    noStroke();
    text('calendar', 60, 440)
    pop();

    image(friends, 50, 500, imgSize.s, imgSize.s);
    push();
    fill(255);
    noStroke();
    text('friends', 60, 590)
    pop();


}

function doubleClicked() {
    //image(img, 25, 1300, 150, 50);
    if (25 < mouseX && mouseX < 200 && mouseY < 1300 + 150 && mouseY > 1300) {
        // if (10 < mouseX && mouseX < 90 && mouseY < 961 && mouseY > 951 

        window.open('https://march-exe.github.io/cart253/topics/assignments/Prototypes/variable-prototypes/variable-prototypes.html', '_blank');



        //if (0 < mouseX && mouseX < 95 && 950 < mouseY && mouseY < 100)
        //image(img, x, y, [width], [height]) (10, 951, 95, 45);

    }
}

function mouseClicked() {

    if (50 < mouseX && mouseX < 125 && mouseY < 140 && mouseY > 50) { cursor(HAND); }


    if (50 < mouseX && mouseX < 125 && mouseY < 290 && mouseY > 200) { cursor(HAND); }


    if (50 < mouseX && mouseX < 125 && mouseY < 440 && mouseY > 350) { cursor(HAND); }


    // friends inbox open/close on icon and exit window
    if (50 < mouseX && mouseX < 125 && mouseY < 590 && mouseY > 500) {

        if (friendsOpen == false) {
            friendsOpen = true
        }
        else {
            friendsOpen = false
        }

    }

    if (inboxText.textPosition.x3 < mouseX && mouseX < inboxText.textPosition.x3 + 25 && mouseY < inboxText.textPosition.y3 && mouseY > inboxText.textPosition.y3 - 25) {
        if (friendsOpen == true) {
            friendsOpen = false
        }
    }

}

function infowdw() {
}
function lostdreams() { }



function onHover() {
    if (25 < mouseX && mouseX < 200 && mouseY < 1300 + 150 && mouseY > 1300) {
        cursor(HAND);
    }
    else {
        cursor(ARROW);
    }

    if (50 < mouseX && mouseX < 125 && mouseY < 140 && mouseY > 50) { cursor(HAND); }


    if (50 < mouseX && mouseX < 125 && mouseY < 290 && mouseY > 200) { cursor(HAND); }


    if (50 < mouseX && mouseX < 125 && mouseY < 440 && mouseY > 350) { cursor(HAND); }


    if (50 < mouseX && mouseX < 125 && mouseY < 590 && mouseY > 500) { cursor(HAND); }


    //inbox window close
    if (friendsOpen == true) {
        if (inboxText.textPosition.x3 < mouseX && mouseX < inboxText.textPosition.x3 + 25 && mouseY < inboxText.textPosition.y3 && mouseY > inboxText.textPosition.y3 - 25) {
            cursor(HAND);

        }
    }
}