/**
 * My Desktop
 * Maricano Faugno
 * 
 * My Desktop is a spiritually successor to ERROR, building off some code from that project while also expanding the scope
 * this project acts as a literal desktop of window 98 in your browser. you will find interactable applications and random things
 * sprinkled throughout the program for you to enjoy. 
 * there are also events throughout the project, meaning the more you mess around with it, the more you will find!
 */

"use strict";

/**
 * the first phase of this program is to create a shit ton of variables to handle creating the windows.
 * this is the bluk of the variables as creating a simple window actually takes alot of shapes and coordinates. 
 * otherwise, i also create booleans to handle checking for open/closing of apps and assigning images for the app icons
 * 
 * the setup function itself only handles creating the canvas and preloading the images for the program.
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

let infoWdwAdj = {

    pos: {
        x: 1900,
        y: 200
    },

    text: {
        one: "Information",
        two: "Welcome to my desktop!\n\nThis is a fake desktop with very limited features but feel free\n to explore! as you can see, anything that is interactable will\n change the cursor when you hover so look out for things to click.\n\nfor a start, first check out all the applications on the left side\nof the screen :)",
    }
}


let chat = {

    conversationBox:
    {
        x: inboxText.textPosition.x2 - 5,  //will need to be based on the x/y + adjustments holy fuck this will be complicated
        y: inboxText.textPosition.y2 - 30,
        w: 590,
        h: 150,
    },

    profileBox: {

        x: inboxText.textPosition.x2 + 20,
        y: inboxText.textPosition.y2,
        s: 100, //size because its a sqaure

    },

    namePerson: {

        h1: 45,
        h2: 15,
        x: inboxText.textPosition.x2 + 150,
        y: inboxText.textPosition.y2 + 50,

    },

    lastReply: {

        fill: { r: 200, g: 0, b: 0, },
        s: 25,
        x: inboxText.textPosition.x2 + 120,
        y: inboxText.textPosition.y2,

    },
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

let noodles;
let pippin;

let computerOpen = false;
let informationOpen = false;
let recylingOpen = false;
let calendarOpen = false;
let agentOpen = false;
let friendsOpen = false;

let wifiOff = false;

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

    noodles = await loadImage('assets/images/noodle.jpg');
    pippin = await loadImage('assets/images/noUser.png');

    createCanvas(cnvs.w, cnvs.h);



}


/**
 * draws a fake desktop to look like windows 98. on the canvas, you will find a plethora of icons, messages and things to discover
 * 
 * the bulk of the draw function simply calls for the applications and checks to see if things are open or not.
 * the crash function handles what happens when you lose a wifi connection.
*/
function draw() {
    background(0, 116, 115);
    taskbar();
    onHover();

    appicons();


    if (friendsOpen == true) {
        friendInbox();
    }

    if (informationOpen == true) {
        infoWdw();
    }

    crash();





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

    image(information, 2700, 1300, 50, 50);
};

function infoWdw() {

    push();

    //encompassing grey box
    noStroke();
    fill(172, 172, 172);
    rect(icons.inbox.x + infoWdwAdj.pos.x, icons.inbox.y + infoWdwAdj.pos.y, icons.inbox.w, icons.inbox.h);
    pop();
    //white description box
    push();
    noStroke();
    fill(229, 229, 228);
    rect(icons.inbox.x + 5 + infoWdwAdj.pos.x, icons.inbox.y + 35 + infoWdwAdj.pos.y, icons.inbox.w - 10, icons.inbox.h - 50);
    pop();

    //border lines

    push();
    stroke(255);
    //top and left
    line(iconborder.horzLineCo.x1 + infoWdwAdj.pos.x, iconborder.horzLineCo.y1 + infoWdwAdj.pos.y, iconborder.horzLineCo.x2 + infoWdwAdj.pos.x, iconborder.horzLineCo.y2 + infoWdwAdj.pos.y);
    line(iconborder.vertLineCo.x1 - icons.inbox.w + infoWdwAdj.pos.x, iconborder.vertLineCo.y1 + infoWdwAdj.pos.y, iconborder.vertLineCo.x2 - icons.inbox.w + infoWdwAdj.pos.x, iconborder.vertLineCo.y2 + infoWdwAdj.pos.y);
    pop();

    push();
    stroke(0);
    //right and bottom
    line(iconborder.vertLineCo.x1 + infoWdwAdj.pos.x, iconborder.vertLineCo.y1 + infoWdwAdj.pos.y, iconborder.vertLineCo.x2 + infoWdwAdj.pos.x, iconborder.vertLineCo.y2 + infoWdwAdj.pos.y);
    line(iconborder.horzLineCo.x1 + infoWdwAdj.pos.x, iconborder.horzLineCo.y1 + icons.inbox.h + infoWdwAdj.pos.y, iconborder.horzLineCo.x1 + icons.inbox.w + infoWdwAdj.pos.x, iconborder.horzLineCo.y1 + icons.inbox.w + infoWdwAdj.pos.y);
    pop();

    //dark grey header
    push()
    noStroke();
    fill(129, 129, 129);
    rect(iconborder.gRect.x + infoWdwAdj.pos.x, iconborder.gRect.y + infoWdwAdj.pos.y, iconborder.gRect.w, iconborder.gRect.h);
    pop();


    // INBOX text//
    //window text descriptor
    push();
    fill(inboxText.culr.w);
    noStroke();
    textSize(20);
    text(infoWdwAdj.text.one, inboxText.textPosition.x1 + infoWdwAdj.pos.x, inboxText.textPosition.y1 + infoWdwAdj.pos.y);
    pop();

    //description text
    push();
    fill(inboxText.culr.b);
    noStroke();
    //textFont(manaspace, 20);
    textSize(20);
    text(infoWdwAdj.text.two, inboxText.textPosition.x2 + infoWdwAdj.pos.x, inboxText.textPosition.y2 + infoWdwAdj.pos.y);
    pop();

    //exit and minimize "icons"
    push();
    fill(inboxText.culr.w);
    noStroke();
    textSize(18);
    text(inboxText.text.three, inboxText.textPosition.x3 + infoWdwAdj.pos.x, inboxText.textPosition.y3 + infoWdwAdj.pos.y);
    pop();
}

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
    //push();
    //fill(inboxText.culr.b);
    //noStroke();
    //textFont(manaspace, 20);
    //textSize(20);
    //text(inboxText.text.two, inboxText.textPosition.x2, inboxText.textPosition.y2);
    //pop();

    //exit and minimize "icons"
    push();
    fill(inboxText.culr.w);
    noStroke();
    textSize(18);
    text(inboxText.text.three, inboxText.textPosition.x3, inboxText.textPosition.y3);
    pop();



    chatbox();
};
function chatbox() {
    //chat boxes// 

    //conversation box
    push();
    noStroke()
    rect(chat.conversationBox.x, chat.conversationBox.y, chat.conversationBox.w, chat.conversationBox.h)
    pop();

    //profile picture
    image(noodles, chat.profileBox.x, chat.profileBox.y, 100, 100)

    //name of person
    push();
    textSize(chat.namePerson.h1);
    text("Noodles", chat.namePerson.x, chat.namePerson.y)
    pop();
    //last received/sent message
    push();
    textSize(chat.namePerson.h2);
    text("Meow, meow, meow, meow, meow, meow, meow, meow...", chat.namePerson.x, chat.namePerson.y + 40)
    pop();

    //red circle for new message
    push();
    fill(chat.lastReply.fill.r, chat.lastReply.fill.g, chat.lastReply.fill.b)
    circle(chat.lastReply.x, chat.lastReply.y, chat.lastReply.s)
    pop();

    //2nd chat box
    //conversation box
    push();
    noStroke()
    rect(chat.conversationBox.x, chat.conversationBox.y + 155, chat.conversationBox.w, chat.conversationBox.h)
    pop();

    //profile picture
    image(pippin, chat.profileBox.x, chat.profileBox.y + 155, 100, 100)


    //name of person
    push();
    textSize(chat.namePerson.h1);
    text("Pippin", chat.namePerson.x, chat.namePerson.y + 155)
    pop();
    //last received/sent message
    push();
    textSize(chat.namePerson.h2);
    text("March, please submit your homework you are falling be...", chat.namePerson.x, chat.namePerson.y + 40 + 155)
    pop();

    //red circle for new message
    push();
    fill(chat.lastReply.fill.r, chat.lastReply.fill.g, chat.lastReply.fill.b)
    circle(chat.lastReply.x, chat.lastReply.y + 155, chat.lastReply.s)
    pop();

    //3nd chat box
    //conversation box
    push();
    noStroke()
    rect(chat.conversationBox.x, chat.conversationBox.y + 310, chat.conversationBox.w, chat.conversationBox.h)
    pop();

    //profile picture
    image(agent, chat.profileBox.x, chat.profileBox.y + 310, 100, 100)


    //name of person
    push();
    textSize(chat.namePerson.h1);
    text("FBI Agent", chat.namePerson.x, chat.namePerson.y + 310)
    pop();
    //last received/sent message
    push();
    textSize(chat.namePerson.h2);
    text("Yo dude you gotta get off your computer.. how do you pl...", chat.namePerson.x, chat.namePerson.y + 40 + 310)
    pop();

    //red circle for new message
    //push();
    //fill(chat.lastReply.fill.r, chat.lastReply.fill.g, chat.lastReply.fill.b)
    //circle(chat.lastReply.x, chat.lastReply.y + 310, chat.lastReply.s)
    //pop();

}

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

    }

    //if (0 < mouseX && mouseX < 95 && 950 < mouseY && mouseY < 100)
    //image(img, x, y, [width], [height]) (10, 951, 95, 45);


    if (2700 < mouseX && mouseX < 2750 && mouseY < 1350 && mouseY > 1300) {

        if (informationOpen == false) {
            informationOpen = true
        }
        else {
            informationOpen = false
        }
    }
}

function mouseClicked() {

    //computer
    if (50 < mouseX && mouseX < 125 && mouseY < 140 && mouseY > 50) { cursor(HAND); }


    //recycling bin
    if (50 < mouseX && mouseX < 125 && mouseY < 290 && mouseY > 200) { cursor(HAND); }


    //calendar
    if (50 < mouseX && mouseX < 125 && mouseY < 440 && mouseY > 350) { cursor(HAND); }


    // friends inbox 
    if (50 < mouseX && mouseX < 125 && mouseY < 590 && mouseY > 500) {

        if (friendsOpen == false) {
            friendsOpen = true
        }
        else {
            friendsOpen = false
        }
    }
    //friends inbox - exit window
    if (inboxText.textPosition.x3 < mouseX && mouseX < inboxText.textPosition.x3 + 25 && mouseY < inboxText.textPosition.y3 && mouseY > inboxText.textPosition.y3 - 25) {
        if (friendsOpen == true) {
            friendsOpen = false
        }
    }


    //information message - exit window
    if ((inboxText.textPosition.x3 + infoWdwAdj.pos.x) < mouseX && mouseX < (inboxText.textPosition.x3 + 25 + infoWdwAdj.pos.x) && mouseY < (inboxText.textPosition.y3 + infoWdwAdj.pos.y) && mouseY > (inboxText.textPosition.y3 - 25 + infoWdwAdj.pos.y)) {

        if (informationOpen == true) {
            informationOpen = false
        }
    }

}

//this function changes the cursor to a hand when something on the canvas is interactabe
function onHover() {

    //any clickable icons

    //start buttom
    if (25 < mouseX && mouseX < 200 && mouseY < 1300 + 150 && mouseY > 1300) {
        cursor(HAND);
    }
    else {
        cursor(ARROW);
    }

    //computer
    if (50 < mouseX && mouseX < 125 && mouseY < 140 && mouseY > 50) { cursor(HAND); }

    //recycling
    if (50 < mouseX && mouseX < 125 && mouseY < 290 && mouseY > 200) { cursor(HAND); }


    //calendar
    if (50 < mouseX && mouseX < 125 && mouseY < 440 && mouseY > 350) { cursor(HAND); }


    //friends
    if (50 < mouseX && mouseX < 125 && mouseY < 590 && mouseY > 500) { cursor(HAND); }
    //friends inbox - window close
    if (friendsOpen == true) {
        if (inboxText.textPosition.x3 < mouseX && mouseX < inboxText.textPosition.x3 + 25 && mouseY < inboxText.textPosition.y3 && mouseY > inboxText.textPosition.y3 - 25) {
            cursor(HAND);

        }
    }

    //information
    if (2700 < mouseX && mouseX < 2750 && mouseY < 1350 && mouseY > 1300) { cursor(HAND); }

    //infornation message - exit window
    if ((inboxText.textPosition.x3 + infoWdwAdj.pos.x) < mouseX && mouseX < (inboxText.textPosition.x3 + 25 + infoWdwAdj.pos.x) && mouseY < (inboxText.textPosition.y3 + infoWdwAdj.pos.y) && mouseY > (inboxText.textPosition.y3 - 25 + infoWdwAdj.pos.y)) {

        cursor(HAND);
    }
    inboxText.textPosition.x3 + infoWdwAdj.pos.x, inboxText.textPosition.y3 + infoWdwAdj.pos.y


}



//these two functions and the event listener cause a Blue screen of death when the wifi connection is lost
function crash() {
    //blue screen of death
    if (wifiOff == true) {
        push();
        fill(9, 10, 120);
        rect(0, 0, cnvs.w, cnvs.h)
        pop();
        //displayed text
        push();
        textSize(65);
        fill(255);

        text('an error has occurred. to continue:\n\nPress Enter to return to Windows, or\n\nPress CTRL+ALT+DEL to restart your computer. if you do this,\nyou will lose any unsaved information in all open applications.\n\n                          Press any key to continue.', 650, 400)
        pop();
    }

}
function wifiOffline() {

    wifiOff = true
}
window.addEventListener("offline", wifiOffline);





