function setup() {
  createCanvas(320, 240);
}

var x = 100, y = 100;
var diameter = 100;
function draw() {
  background(200);
  
  // check to condition of the mouse
  if(mouseIsPressed){ // true or false?
    // if true, change the fill color here
    fill(255, 0, 0)
    x = width/3;
    y = height/3;

  diameter = 200;
}
else { 
    // otherwise do this:
    fill(255);
x = width/2;
y = height/2;
diameter = 100;
  }

  ellipse(x, y, diameter);
}
