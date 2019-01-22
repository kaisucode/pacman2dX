
const moveSpeed = 2;
const pixelWidth = 20;
let mapData;
const mouthRate = 20;

class Pacman {
  constructor() {
    this.pos = createVector(50,50);
    this.vel = createVector(2,0);
    this.state = 0;
  }
  update() {
		this.state = (this.state + 1) % (2*mouthRate);
    this.pos.add(this.vel);
  }
  display() {
    fill(255,255,255);
    if(this.state < mouthRate)
      arc(this.pos.x, this.pos.y, pixelWidth, pixelWidth, PI/6, 11*PI/6);
		else
			ellipse(this.pos.x, this.pos.y, pixelWidth, pixelWidth);
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
