let x,y;
let px,py;
let step = 1;
let numSteps = 1;
let state = 0;
let turnCounter = 1;

// Scale / Resolution
let stepSize = 20;
let totalSteps;


// Function to Check For Prime.
function isPrime(value){
    if(value == 1) return false;
    for(let i=2;i<sqrt(value);i++) {
        if(value%i == 1) {
            return false;
        }
    }
    return true;
}

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

    //If Prime, Draw Circle.
    if(isPrime(step)) {
        fill(255);
        stroke(255);
        circle(x,y,stepSize*0.5);
    }

    // For Connecting to the previous point with a line.
    line(x,y,px,py);
    px = x;
    py = y;

    // Turning according to state.
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

    // Change State.
    if(step%numSteps == 0){
        state = (state+1) % 4;
        turnCounter++;
        if(turnCounter % 2 == 0){
            numSteps++;
        }
    }
    step++;

    // Are we Done?
    if(step > totalSteps) {
        noLoop();
    }
}