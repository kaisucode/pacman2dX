
const moveSpeed = 2;
let mapData;

class Pacman {
  constructor() {
    this.pos = createVector(50,50);
    this.vel = createVector(2,0);
    this.r = 50;
  }
  update() {
    this.pos.add(this.vel);
  }
  display() {
    fill(255,255,255);
    arc(this.pos.x, this.pos.y, this.r, this.r, PI/6, 11*PI/6);
  }
}

function renderBoard() {
  fill(250,250,1);
  for (var i = 0; i < mapData.length; i++) {
    for (var j = 0; j < mapData[i].length; j++) {
      if (mapData[i][j]) {
        rect(10*i,10*j,10,10);
      }
    }
  }
}

$.get("/getMap", function(data) {
  mapData = JSON.parse(data);
});

let pacman;
function setup() {
  createCanvas(500,500);
  pacman = new Pacman();
}
function draw() {
  background(0, 0, 0);
	keyPressed();
	pacman.update();
  pacman.display();
  pacman.update();
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

