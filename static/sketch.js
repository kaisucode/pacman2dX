
const pixelWidth = 20;
const moveSpeed = pixelWidth*1;
let mapData;
const mouthRate = 10;
const moveTicks = 10;
const mouthAngle = Math.PI/3;

class Pacman {
  constructor() {
    this.pos = createVector(50,50);
    this.vel = createVector(2,0);
    this.tickCt = 0;
    this.tickMod = 1000;
  }
  update() {
    this.tickCt = (this.tickCt + 1) % this.tickMod;
    if (this.tickCt % moveTicks == 0)
      this.pos.add(this.vel);
  }
  display() {
    fill(255,255,255);
    if((this.tickCt % (2*mouthRate)) < mouthRate) {
      push();
      translate(this.pos.x, this.pos.y);
      if (this.vel.x > 0)
        rotate(0);
      else if (this.vel.x < 0)
        rotate(PI);
      else if (this.vel.y < 0)
        rotate(3*PI/2);
      else if (this.vel.y > 0)
        rotate(PI/2);
      arc(0, 0, pixelWidth, pixelWidth, mouthAngle, 2*PI-mouthAngle);
      pop();
    }
		else {
      ellipse(this.pos.x, this.pos.y, pixelWidth, pixelWidth);
    }
  }
}

function renderBoard() {
  fill(250,250,1);
  for (var i = 0; i < mapData.length; i++) {
    for (var j = 0; j < mapData[i].length; j++) {
      if (mapData[i][j]) {
        rect(pixelWidth*i,pixelWidth*j,pixelWidth, pixelWidth);
      }
    }
  }
}

$.get("/getMap", function(data) {
  mapData = JSON.parse(data);
});

let pacman;
function setup() {
  createCanvas(0.99*windowWidth,0.95*windowHeight);
  pacman = new Pacman();
}
function draw() {
  background(0, 0, 0);
	keyPressed();
	pacman.update();
  pacman.display();
  pacman.update();
	if(mapData)
		renderBoard();
  frameRate(30);
}

function keyPressed() {
	if (keyCode == 39)			// <Right Arrow>
    pacman.vel = createVector(moveSpeed,0);
	else if (keyCode == 37)	// <Left Arrow>
		pacman.vel = createVector(-moveSpeed,0);
	else if (keyCode == 38)	// <Up Arrow>
		pacman.vel = createVector(0,-moveSpeed);
	else if (keyCode == 40)	// <Down Arrow>
		pacman.vel = createVector(0,moveSpeed);
}

