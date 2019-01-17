class Pacman {
  constructor() {
    this.pos = createVector(50,50);
    this.vel = createVector(0,0);
    this.r = 50;
  }
  update() {
    this.pos.add(this.vel);
  }
  display() {
    fill(255,255,255);
    arc(this.pos.x, this.pos.y, this.r, this.r, PI/6, 11*PI/6);
  }

	moveRight(){
    this.vel = createVector(2,0);
	}
	moveLeft(){
    this.vel = createVector(-2,0);
	}
	moveUp() {
    this.vel = createVector(0,-2);
	}
	moveDown() {
    this.vel = createVector(0,2);
	}

}

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
}

function keyPressed() {
	if (keyCode == 39)			// <Right Arrow>
		pacman.moveRight();
	if (keyCode == 37)	// <Left Arrow>
		pacman.moveLeft();
	if (keyCode == 38)	// <Up Arrow>
		pacman.moveUp();
	if (keyCode == 40)	// <Down Arrow>
		pacman.moveDown();
}


