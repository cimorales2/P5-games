var pj;

function setup() {
  createCanvas(600,600);
  noCursor();
  pj = new Character();
}

function draw() {
 background(51);
 pj.update();
 pj.show();
}
