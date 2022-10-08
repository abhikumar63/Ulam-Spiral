let x,y;
let px,py;
let step = 1;
let numSteps = 1;
let state = 0;
let turnCounter = 1;
let stepSize = 20;
let totalSteps;

function setup() {
    createCanvas(500,500);
    textFont("Courier");
    const cols = width/stepSize;
    const rows = height/stepSize;
    totalSteps = rows*cols;
    x = width/2;
    y = height/2;
    px = x;
    py = y;
    background(0);
}

function draw() {
    fill(255);
    stroke(255);
    circle(x,y,stepSize*0.5);

    line(x,y,px,py);
    px = x;
    py = y;

    switch (state) {
        case 0:
            x += stepSize;
            break;
        case 1:
            y -= stepSize;
            break;
        case 2:
            x -= stepSize;
            break;
        case 3:
            y += stepSize;
            break;
    }

    if(step%numSteps == 0){
        state = (state+1) % 4;
        turnCounter++;
        if(turnCounter % 2 == 0){
            numSteps++;
        }
    }
    step++;

    if(step > totalSteps) {
        noLoop();
    }
}