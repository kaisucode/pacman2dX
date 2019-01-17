class Pacman {
  constructor() {
    this.pos = createVector(50,50);
    this.vel = createVector(0,0);
    this.r = 50;
  }
  update() {
    this.pos.add(this.pos);
  }
  display() {
    fill(255,255,255);
    arc(this.pos.x, this.pos.y, this.r, this.r, PI/6, 11*PI/6);
  }
}

let pacman;
function setup() {
  createCanvas(500,500);
  pacman = new Pacman();
}
function draw() {
  background(0, 0, 0);
  pacman.display();
}
